// components/Hero.js
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in">
            Convert Your Documents with Ease
          </h1>
          <p className="text-lg md:text-2xl mb-8 animate-fade-in">
            Seamlessly transform your DOC files to PDF and vice versa with our user-friendly converter.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#upload"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition animate-bounce-in"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition animate-bounce-in"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="relative">
            <FaFileWord className="text-9xl text-white opacity-75 animate-zoom-in" />
            <FaFilePdf className="text-9xl text-white opacity-75 absolute top-0 left-0 transform translate-x-8 translate-y-8 animate-zoom-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
