const express = require("express");
const multer = require("multer");
const libre = require("libreoffice-convert");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { PDFDocument } = require("pdf-lib");
const sharp = require("sharp");
const { convert } = require("pdf-poppler");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Multer storage (memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// File upload directory
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Helper function to save uploaded file
const saveFile = (file) => {
  const inputPath = path.join(uploadsDir, file.originalname);
  fs.writeFileSync(inputPath, file.buffer);
  return inputPath;
};

// 🔹 Convert DOC to PDF & PDF to DOC
app.post("/convert/doc-pdf", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const inputPath = saveFile(file);
    const ext = path.extname(file.originalname).toLowerCase();
    const outputExt = ext === ".pdf" ? ".docx" : ".pdf";
    const outputPath = path.join(
      uploadsDir,
      `${path.parse(file.originalname).name}${outputExt}`
    );

    libre.convert(inputPath, outputExt, undefined, (err, done) => {
      if (err) return res.status(500).json({ error: "Conversion failed", details: err.message });

      fs.writeFileSync(outputPath, done);
      res.download(outputPath, () => {
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// 🔹 Convert Image to PDF
app.post("/convert/image-pdf", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const inputPath = saveFile(file);
    const outputPath = path.join(
      uploadsDir,
      `${path.parse(file.originalname).name}.pdf`
    );

    const pdfDoc = await PDFDocument.create();
    const imageBytes = fs.readFileSync(inputPath);
    const image = await pdfDoc.embedPng(imageBytes);
    const page = pdfDoc.addPage([image.width, image.height]);
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, pdfBytes);

    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (error) {
    res.status(500).json({ error: "Conversion failed", details: error.message });
  }
});

// 🔹 Convert PDF to JPG
app.post("/convert/pdf-jpg", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const inputPath = saveFile(file);
    const outputPath = path.join(uploadsDir, `${path.parse(file.originalname).name}.jpg`);

    await convert(inputPath, {
      format: "jpeg",
      out_dir: uploadsDir,
      out_prefix: path.parse(file.originalname).name,
      page: 1,
    });

    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (error) {
    res.status(500).json({ error: "Conversion failed", details: error.message });
  }
});

// 🔹 Compress PDF
app.post("/convert/compress-pdf", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const inputPath = saveFile(file);
    const outputPath = path.join(
      uploadsDir,
      `${path.parse(file.originalname).name}_compressed.pdf`
    );

    const pdfDoc = await PDFDocument.load(fs.readFileSync(inputPath));
    const compressedPdfBytes = await pdfDoc.save({ useObjectStreams: false });
    fs.writeFileSync(outputPath, compressedPdfBytes);

    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (error) {
    res.status(500).json({ error: "Compression failed", details: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
