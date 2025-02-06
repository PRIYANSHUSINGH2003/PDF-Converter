// components/Footer.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">PDF Converter</h1>
            <p className="mt-2 text-gray-400">
              Seamlessly convert your documents between DOC and PDF formats.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/priyanshusingh.rajawat.37"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-0859211b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="http://github.com/PRIYANSHUSINGH2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PDF Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
