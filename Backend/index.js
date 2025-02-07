const express = require('express');
const multer = require('multer');
const libre = require('libreoffice-convert');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const sharp = require('sharp'); // For image to PDF and PDF to JPG
const pdf = require('pdf-lib'); // For PDF manipulation (compression)
const app = express();
const port = 5000;

// Enable CORS for all origins
app.use(cors());

// Set up storage for multer (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Helper function to compress PDF
const compressPDF = async (inputPath, outputPath) => {
  const data = fs.readFileSync(inputPath);
  const pdfDoc = await pdf.PDFDocument.load(data);
  const compressedPdf = await pdfDoc.save({ useObjectStreams: false });
  fs.writeFileSync(outputPath, compressedPdf);
};

// POST endpoint to handle file upload and conversion
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  const inputPath = path.join(uploadsDir, file.originalname);
  const ext = path.extname(file.originalname).toLowerCase();
  
  // Determine the output file path based on the input file extension
  let outputPath;

  try {
    // Save the uploaded file to disk
    fs.writeFileSync(inputPath, file.buffer);

    if (ext === '.doc' || ext === '.docx') {
      // Convert DOC to PDF
      outputPath = path.join(uploadsDir, `${path.parse(file.originalname).name}.pdf`);
      libre.convert(inputPath, '.pdf', undefined, (err, done) => {
        if (err) {
          console.error('Error during DOC to PDF conversion:', err);
          return res.status(500).send('Error during conversion');
        }
        fs.writeFileSync(outputPath, done);
        res.download(outputPath, cleanUpFiles);
      });
    } else if (ext === '.pdf') {
      // Convert PDF to DOC
      outputPath = path.join(uploadsDir, `${path.parse(file.originalname).name}.docx`);
      libre.convert(inputPath, '.docx', undefined, (err, done) => {
        if (err) {
          console.error('Error during PDF to DOC conversion:', err);
          return res.status(500).send('Error during conversion');
        }
        fs.writeFileSync(outputPath, done);
        res.download(outputPath, cleanUpFiles);
      });
    } else if (ext === '.jpg' || ext === '.png' || ext === '.jpeg') {
      // Convert Image to PDF
      outputPath = path.join(uploadsDir, `${path.parse(file.originalname).name}.pdf`);
      sharp(inputPath)
        .toFormat('pdf')
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error('Error during image to PDF conversion:', err);
            return res.status(500).send('Error during conversion');
          }
          res.download(outputPath, cleanUpFiles);
        });
    } else if (ext === '.pdf') {
      // Convert PDF to JPG
      outputPath = path.join(uploadsDir, `${path.parse(file.originalname).name}.jpg`);
      sharp(inputPath)
        .jpeg()
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error('Error during PDF to JPG conversion:', err);
            return res.status(500).send('Error during conversion');
          }
          res.download(outputPath, cleanUpFiles);
        });
    } else if (ext === '.pdf') {
      // Compress PDF
      outputPath = path.join(uploadsDir, `${path.parse(file.originalname).name}-compressed.pdf`);
      await compressPDF(inputPath, outputPath);
      res.download(outputPath, cleanUpFiles);
    } else {
      return res.status(400).send('Invalid file type');
    }
  } catch (err) {
    console.error('Error processing file:', err);
    return res.status(500).send('Error processing file');
  }
});

// Helper function to clean up files after download
const cleanUpFiles = (err) => {
  if (err) {
    console.error('Error sending file:', err);
  }
  // Clean up the uploaded and converted files
  fs.unlinkSync(inputPath);
  fs.unlinkSync(outputPath);
};

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
