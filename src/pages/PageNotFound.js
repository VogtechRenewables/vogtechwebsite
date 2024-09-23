import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from "../context/LanguageContext";

// Define page content in both languages
const pageNotFoundContent = {
  English: {
    title: "404",
    subtitle: "Page Not Found",
    message: "Sorry, the page you are looking for does not exist.",
    buttonText: "Go Back Home"
  },
  French: {
    title: "404",
    subtitle: "Page Non Trouvée",
    message: "Désolé, la page que vous recherchez n'existe pas.",
    buttonText: "Retour à l'accueil"
  }
};

const PageNotFound = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const content = pageNotFoundContent[selectedLanguage];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-6xl font-bold text-green-600">{content.title}</h1>
        <h2 className="text-2xl font-semibold mt-4">{content.subtitle}</h2>
        <p className="text-gray-600 mt-2">{content.message}</p>
        <Link to="/" className="inline-block mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
          {content.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
