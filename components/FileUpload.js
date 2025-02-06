'use client';

import React, { useState } from 'react';
import { FaFileUpload, FaDownload, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const FileUpload = () => {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('file', file);

            axios.post('http://localhost:5000/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percent);
                },
            })
                .then((response) => {
                    setDownloadUrl(response.data.downloadUrl); // Assuming the server provides the download URL
                    setIsUploaded(true);
                    setIsUploading(false);
                    setProgress(0);
                })
                .catch(() => {
                    setIsUploading(false);
                    setProgress(0);
                });
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-100 to-blue-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">Convert Your Documents Effortlessly</h2>
                <p className="text-center text-lg text-gray-600 mb-6">
                    Upload your PDF or DOC files and convert them in seconds. Fast, secure, and easy to use.
                </p>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-12 rounded-2xl shadow-2xl mb-12 transform transition-all hover:scale-105 duration-300 ease-in-out">
                    <div className="flex justify-center items-center">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer p-6 bg-white text-blue-600 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-700 transform hover:scale-110"
                        >
                            <FaFileUpload className="text-5xl" />
                        </label>
                    </div>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    {isUploading ? (
                        <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                                <div
                                    className="bg-blue-600 h-3 rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="text-center text-sm text-gray-700">{progress}%</p>
                        </div>
                    ) : (
                        <p className="text-center text-sm text-white">Select a file to upload</p>
                    )}
                    {isUploaded && !isUploading && (
                        <div className="flex justify-center items-center space-x-3 mt-6">
                            <a
                                href={downloadUrl}
                                className="flex items-center text-white bg-green-500 hover:bg-green-600 font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                                download
                            >
                                <FaDownload className="mr-2 text-lg" />
                                Download Converted File
                            </a>
                        </div>
                    )}
                    {isUploading && (
                        <div className="flex justify-center items-center space-x-2 mt-6">
                            <FaSpinner className="text-blue-600 animate-spin text-2xl" />
                            <span className="text-gray-600">Uploading...</span>
                        </div>
                    )}
                </div>


                {/* Features Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our Converter?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <h4 className="text-xl font-semibold text-blue-600 mb-4">Fast & Efficient</h4>
                            <p className="text-gray-600">Experience fast file conversion with no delays. Get your results in seconds!</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <h4 className="text-xl font-semibold text-blue-600 mb-4">Easy to Use</h4>
                            <p className="text-gray-600">Just upload your file, and let us handle the rest. It's that simple!</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <h4 className="text-xl font-semibold text-blue-600 mb-4">Secure & Private</h4>
                            <p className="text-gray-600">Your documents are securely processed and deleted after use. Privacy is our priority.</p>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="text-center">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">How It Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <FaCheckCircle className="text-green-600 text-4xl mb-4 mx-auto" />
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">Step 1: Upload Your File</h4>
                            <p className="text-gray-600">Click the upload button and choose the document you want to convert.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <FaCheckCircle className="text-green-600 text-4xl mb-4 mx-auto" />
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">Step 2: Conversion</h4>
                            <p className="text-gray-600">Our system processes and converts your file instantly.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                            <FaCheckCircle className="text-green-600 text-4xl mb-4 mx-auto" />
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">Step 3: Download</h4>
                            <p className="text-gray-600">Download your converted file with just a click!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
