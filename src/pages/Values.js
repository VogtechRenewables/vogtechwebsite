import React, { useContext } from 'react';
import valuesBanner from '../images/values_banner.webp';
import valuesImage from '../images/values_logs.webp';
import valuesImage2 from '../images/values_work.webp';
import valuesImage3 from '../images/values_plant.jpg';
import valuesImage4 from '../images/values_windmill.webp';
import LanguageContext from "../context/LanguageContext";

// Define values content in both languages
const valuesContent = {
  English: {
    pageTitle: "VALUES",
    title1: "Integrity",
    desc1: "We hold ourselves and those around us to the highest moral and ethical standards in all we do. The integrity of our people and organization is the foundation of our firm. Integrity carries forward into the management of our operating segments and fosters the future success of all Fidelis stakeholders.",
    title2: "Stewardship",
    desc2: "We engage with a deep sense of responsibility and accountability to our communities, employees, and investors. We focus on safe, sustainable, and beneficial infrastructure providing critical products to society.",
    title3: "Excellence",
    desc3: "Based on a passionate belief in what we are doing and the value and importance of our work, we strive to excel in every aspect of our individual and collective effort to approach every opportunity and challenge with a determination to responsibly succeed at every step.",
    title4: "Collaboration",
    desc4: "We thrive when we collaborate iteratively with team members who have diverse backgrounds, skills, and experience. It involves open communication, mutual respect, and a willingness to cooperate for the greater good. Effective collaboration fosters creativity, diverse perspectives, and the pooling of resources, leading to innovative solutions and improved outcomes. Whether in a professional setting, a creative project, or a community initiative, successful collaboration promotes synergy, enables the exchange of ideas, and leverages the strengths of each participant, ultimately fostering an environment where collective contributions lead to collective success.",
    title5: "Intellectual Honesty and Objectivity",
    desc5: "We seek the truth regardless of where it leads or the outcome it dictates. Our decisions are grounded by facts, not by the stature or position of any individual. We refine our path forward when new facts emerge or our assumptions are proven incorrect.",
    title6: "Environmental, Social & Governance",
    desc6: "Embracing diverse team backgrounds, skills, and experiences to solve society’s decarbonization challenges enables Vogtech to collectively create best-in-class solutions. Vogtech Renewable is a unique decarbonization enterprise developing and operating multiple synergistic infrastructure GigaSystems™ that generate climate-positive, stable, and predictable EBITDA in the following global growth sectors."
  },
  French: {
    pageTitle: "VALEURS",
    title1: "Intégrité",
    desc1: "Nous nous soumettons, ainsi que ceux qui nous entourent, aux normes morales et éthiques les plus élevées dans tout ce que nous faisons. L’intégrité de nos collaborateurs et de notre organisation est le fondement de notre cabinet. L'intégrité se poursuit dans la gestion de nos secteurs opérationnels et favorise le succès futur de toutes les parties prenantes de Fidelis.",
    title2: "Gestion",
    desc2: "Nous nous engageons avec un profond sens des responsabilités et des responsabilités envers nos communautés, nos employés et nos investisseurs. Nous nous concentrons sur des infrastructures sûres, durables et bénéfiques fournissant des produits essentiels à la société.",
    title3: "Excellence",
    desc3: "Basés sur une croyance passionnée dans ce que nous faisons ainsi que sur la valeur et l’importance de notre travail, nous nous efforçons d’exceller dans tous les aspects de nos efforts individuels et collectifs pour aborder chaque opportunité et chaque défi avec la détermination de réussir de manière responsable à chaque étape.",
    title4: "Collaboration",
    desc4: "Nous prospérons lorsque nous collaborons de manière itérative avec des membres de l’équipe ayant des parcours, des compétences et des expériences divers. Cela implique une communication ouverte, un respect mutuel et une volonté de coopérer pour le bien commun. Une collaboration efficace favorise la créativité, la diversité des perspectives et la mise en commun des ressources, conduisant à des solutions innovantes et à de meilleurs résultats. Que ce soit dans un cadre professionnel, un projet créatif ou une initiative communautaire, une collaboration réussie favorise la synergie, permet l'échange d'idées et exploite les forces de chaque participant, favorisant finalement un environnement où les contributions collectives mènent au succès collectif.",
    title5: "Honnêteté intellectuelle et objectivité",
    desc5: "Nous recherchons la vérité, peu importe où elle mène ou quel que soit le résultat qu’elle dicte. Nos décisions sont fondées sur des faits et non sur la stature ou la position d'un individu. Nous affinons notre voie à suivre lorsque de nouveaux faits émergent ou que nos hypothèses se révèlent incorrectes.",
    title6: "Environnemental, Social et Gouvernance",
    desc6: "En intégrant des équipes, des compétences et des expériences diverses pour résoudre les défis de la décarbonisation de la société, Vogtech Renouvelable peut créer collectivement les meilleures solutions de leur catégorie. Vogtech Renouvelable est une entreprise de décarbonation unique qui développe et exploite plusieurs infrastructures qui générerons un EBITDA positif pour le climat, stable et prévisible dans les secteurs de croissance."
  }
};

const Values = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const content = valuesContent[selectedLanguage];

  return (
    <div>
      {/* Banner with "Values" text */}
      <div className="relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${valuesBanner})` }}>
        <h1 className="text-7xl font-bold uppercase">{content.pageTitle}</h1>
      </div>

      {/* Values sections */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First section */}
          <div className="flex items-center justify-center md:order-1">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">{content.title1}</h2>
              <p className="text-lg text-gray-800 mb-4">{content.desc1}</p>
              <h2 className="text-4xl font-bold mb-6 text-green-600">{content.title2}</h2>
              <p className="text-lg text-gray-800">{content.desc2}</p>
            </div>
          </div>
          <div className="md:order-2" style={{ backgroundImage: `url(${valuesImage4})`, backgroundSize: 'cover' }}></div>

          {/* Second section */}
          <div className="flex items-center justify-center md:order-3" style={{ backgroundImage: `url(${valuesImage})`, backgroundSize: 'cover' }}></div>
          <div className="md:order-4">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">{content.title3}</h2>
              <p className="text-lg text-gray-800 mb-4">{content.desc3}</p>
              <h2 className="text-4xl font-bold mb-6 text-green-600">{content.title4}</h2>
              <p className="text-lg text-gray-800">{content.desc4}</p>
            </div>
          </div>

          {/* Third section */}
          <div className="flex items-center justify-center md:order-5">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">{content.title5}</h2>
              <p className="text-lg text-gray-800">{content.desc5}</p>
            </div>
          </div>
          <div className="md:order-6" style={{ backgroundImage: `url(${valuesImage2})`, backgroundSize: 'cover' }}></div>

          {/* Fourth section */}
          <div className="flex items-center justify-center md:order-7" style={{ backgroundImage: `url(${valuesImage3})`, backgroundSize: 'cover' }}></div>
          <div className="md:order-8">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">{content.title6}</h2>
              <p className="text-lg text-gray-800">{content.desc6}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
