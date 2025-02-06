import { FaRegCheckCircle, FaFilePdf, FaFileWord, FaShieldAlt, FaClock } from 'react-icons/fa';

const AdvantagesSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-16 px-6">
      <div className="text-center text-white mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Why Choose Our PDF & DOC Converter?</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Experience a hassle-free, secure, and fast conversion process with our intuitive tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Advantage 1: Fast Conversion */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaClock className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fast Conversion</h3>
          <p className="text-gray-600 mb-6">
            Convert your files within seconds with our lightning-fast tool, saving you time and effort.
          </p>
          <p className="text-sm text-gray-500">
            No more waiting around for file conversions; get it done in a snap!
          </p>
        </div>

        {/* Advantage 2: High Quality */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaRegCheckCircle className="text-5xl text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">High Quality</h3>
          <p className="text-gray-600 mb-6">
            Preserve the integrity and quality of your documents during conversion, without any data loss.
          </p>
          <p className="text-sm text-gray-500">
            We ensure that your files are always converted with the highest level of accuracy.
          </p>
        </div>

        {/* Advantage 3: Secure and Private */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaShieldAlt className="text-5xl text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure and Private</h3>
          <p className="text-gray-600 mb-6">
            Your data is handled with the utmost privacy and security. We don't store or share your files.
          </p>
          <p className="text-sm text-gray-500">
            Convert confidently knowing your information is safe and secure.
          </p>
        </div>

        {/* Advantage 4: Multiple Formats */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaFilePdf className="text-5xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Supports Multiple Formats</h3>
          <p className="text-gray-600 mb-6">
            Convert PDF to DOC and DOC to PDF, along with a variety of other formats. Your conversion options are limitless.
          </p>
          <p className="text-sm text-gray-500">
            Our tool supports a wide range of file types for your convenience.
          </p>
        </div>

        {/* Advantage 5: Easy to Use */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaFileWord className="text-5xl text-pink-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Friendly</h3>
          <p className="text-gray-600 mb-6">
            The interface is clean, simple, and intuitive, making the conversion process effortless for everyone.
          </p>
          <p className="text-sm text-gray-500">
            Whether you're tech-savvy or a beginner, our tool is designed to be simple and easy to use.
          </p>
        </div>

        {/* Advantage 6: Free Tool */}
        <div className="bg-white text-center p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
          <FaRegCheckCircle className="text-5xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Completely Free</h3>
          <p className="text-gray-600 mb-6">
            Enjoy free access to all conversion features with no hidden fees or charges.
          </p>
          <p className="text-sm text-gray-500">
            We believe in providing top-quality services at no cost to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
