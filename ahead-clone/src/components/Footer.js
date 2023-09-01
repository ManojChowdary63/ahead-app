import React from 'react';
import { FaMapMarkerAlt, FaEnvelope} from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-center py-6 border-t-4 border-gray-300/30">
      <div className="mb-4">
        <img src="/images/main-mascot.png" alt="App Logo" className="w-16 mx-auto py-3" />
        <img src="/images/ahead-logo.svg" alt="App Logo" className="w-20 mx-auto py-3" />
      </div>
      <div className="mb-4 flex justify-center items-center">
        <div className="mr-4 flex items-center">
          <FaMapMarkerAlt className="text-blue-500 text-lg mr-2" />
          <p className="text-md pr-6">AuguststraBe 26, 10117 Berlin</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-red-500 text-lg mr-2" />
          <p className="text-md pr-6">hi@ahead-app.com</p>
        </div>
      </div>
      <div className="mb-4">
        <img src="/images/app-store.svg" alt="App Logo" className="w-36 mx-auto py-3" />
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Ahead app. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
