import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-10 text-center">
                <h1 className="text-6xl font-bold text-green-600">404</h1>
                <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="inline-block mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
