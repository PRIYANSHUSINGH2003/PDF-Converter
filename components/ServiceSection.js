import { FaFilePdf, FaFileWord, FaImage, FaExchangeAlt, FaCompress } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 px-6">
      <div className="text-center text-white mb-12">
        <h2 className="text-4xl font-extrabold">Our Conversion Services</h2>
        <p className="text-xl mt-4 max-w-2xl mx-auto">
          Seamlessly convert, compress, and manage your documents and images with our easy-to-use online tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* PDF to DOC */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaFilePdf className="text-5xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">PDF to DOC</h3>
          <p className="text-gray-600 mb-6">
            Convert your PDF files into editable Word documents effortlessly.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
            Convert Now
          </button>
        </div>

        {/* DOC to PDF */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaFileWord className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">DOC to PDF</h3>
          <p className="text-gray-600 mb-6">
            Convert your Word documents into PDF format in just a few clicks.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
            Convert Now
          </button>
        </div>

        {/* File Conversion */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaExchangeAlt className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">All-in-One Conversion</h3>
          <p className="text-gray-600 mb-6">
            Convert any DOC or PDF file to your desired format in one click.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Start Converting
          </button>
        </div>

        {/* Image to PDF */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaImage className="text-5xl text-pink-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Image to PDF</h3>
          <p className="text-gray-600 mb-6">
            Convert your images to high-quality PDFs effortlessly.
          </p>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105">
            Convert Now
          </button>
        </div>

        {/* PDF to JPG */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaFilePdf className="text-5xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">PDF to JPG</h3>
          <p className="text-gray-600 mb-6">
            Extract high-quality images from your PDF documents.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105">
            Convert Now
          </button>
        </div>

        {/* Compress PDF */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaCompress className="text-5xl text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Compress PDF</h3>
          <p className="text-gray-600 mb-6">
            Reduce the size of your PDF files without losing quality.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
            Compress Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
