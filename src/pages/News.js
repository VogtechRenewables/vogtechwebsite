import React, { useContext } from 'react';
import LanguageContext from "../context/LanguageContext";
import newsBanner from '../images/news_banner.webp';

// Define news content in both languages
const newsContent = {
  English: {
    pageTitle: "Vogtech Renewables in the News",
    title: "News Articles",
    desc: "At Vogtech Renewable, we keep our finger on the pulse of the latest news in the tech industry. Our News section is the best place to find out the latest developments in technology and how Vogtech Renewable is involved. Here, you can find articles from major publications where VogTech is mentioned, as well as news about the products and services we offer. Be sure to check back often for the latest updates.",
    news1Title: "Ottawa Plant Underway",
    news1Desc: "Vogtech Renewable plant in Ottawa, Ontario under development.",
    news2Title: "Montreal Manufacturing Site Underway",
    news2Desc: "Vogtech Renewable plant in Montreal, Quebec under development."
  },
  French: {
    pageTitle: "VOGTECH RENEWABLES DANS L'ACTUALITÉ",
    title: "Articles de Presse",
    desc: "Chez VogTech, nous restons à l'écoute des dernières nouvelles de l'industrie technologique. Notre section Actualités est le meilleur endroit pour découvrir les derniers développements technologiques et la manière dont VogTech est impliqué. Vous trouverez ici des articles de publications majeures dans lesquelles VogTech est mentionnée, ainsi que des actualités sur les produits et services que nous proposons. Assurez-vous de revenir souvent pour les dernières mises à jour.",
    news1Title: "L'usine d'Ottawa est en cours de construction",
    news1Desc: "L'usine de Vogtech Renewable à Ottawa (Ontario) en cours de développement.",
    news2Title: "Le site de fabrication de Montréal est en cours de réalisation",
    news2Desc: "L'usine renouvelable Vogtech à Montréal, Québec, en cours de développement."
  }
};

const News = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const content = newsContent[selectedLanguage];

  return (
    <div>
      <div
        className="flex-col relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${newsBanner})` }}
      >
        <h1 className="text-4xl md:text-7xl font-bold uppercase mb-12 w-4/5 md:w-3/5">
          {content.pageTitle}
        </h1>
      </div>
      <div className="container mx-auto py-12 px-4 md:px-12">
        <section className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-green-600 mb-6">
            {content.title}
          </h2>
          <p className="text-sm md:text-lg text-gray-700 mb-8">
            {content.desc}
          </p>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">
                {content.news1Title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {content.news1Desc}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-4">
                {content.news2Title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {content.news2Desc}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default News;
