import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LanguageContext from '../context/LanguageContext';

// Define team members content in both languages
const teamContent = {
  English: [
    {
      name: 'Gabriel Fono',
      position: 'Founder and CEO',
      bio: 'Gabriel Fono, founder and CEO of Vogtech Renewable, uniquely marries financial acumen, stemming from his CPA/accounting background, with a deep eco-conscious ethos. His visionary leadership propels Vogtech Renewable towards creating transformative, eco-friendly solutions, positioning the company as a frontrunner in the sustainable technology sector, dedicated to a greener future.'
    },
    {
      name: 'Abdul Rehman',
      position: 'Renewable Energy Engineer',
      bio: 'Abdul Rehman, a distinguished Renewable Energy Engineer, is the driving force behind groundbreaking initiatives in sustainable power. His expertise in renewable energy technologies fuels innovative solutions, reshaping the energy landscape. With a keen focus on sustainability, he pioneers transformative projects, shaping a greener and more efficient future.'
    },
    {
      name: 'Patrick Tekou',
      position: 'Project Manager and Mechanical Engineer',
      bio: 'Patrick Tekou, a dynamic Project Manager and Mechanical Engineer, orchestrates transformative ventures with precision and innovation. Leveraging his engineering expertise, he leads projects that redefine industries. His commitment to excellence and mechanical ingenuity drive forward-looking solutions, reshaping the future of engineering and project management.'
    },
    {
      name: "Sharli Jodhani",
      position: "Sustainability Project Manager",
      bio: "Sharli Jodhani is a Sustainability Project Manager with an MSc in Environmental Engineering and over 5 years of experience in environmental consulting, project development, and management. She is skilled in leading and managing clean technology and ensuring compliance with Canadian environmental regulations. She has a proven track record in risk mitigation, reducing potential project risks ensuring regulatory compliance, and implementing strategic environmental solutions. She is highly adept at collaborating with stakeholders and delivering innovative solutions to meet climate change objectives. She is also experienced in engineering design, including PFDs, BFDs, P&IDs, equipment selection, specifications, and site engineering."
    },
    {
      name: "Illia Negovora",
      position: "Process Development Specialist",
      bio: "Illia Negovora, a Process Development Specialist - Research and Development with industrial in both production and pilot scale processes. With his unique background in both Chemical Engineering and Computing Technologies, he brings an innovative approach to process development, simulation and validation. From test tube to commercial scale, he believes that processes must be designed to be scalable, safe and sustainable. ILLIA is a graduate in Chemistry Engineering from Ottawa University"
    }
  ],
  French: [
    {
      name: 'Gabriel Fono',
      position: 'Fondateur et PDG',
      bio: 'Gabriel Fono, fondateur et PDG de Vogtech Renewable, allie de manière unique une expertise financière, issue de son expérience en comptabilité, à une profonde conscience écologique. Son leadership visionnaire propulse Vogtech Renewable vers la création de solutions écologiques transformantes, positionnant l’entreprise en tête du secteur de la technologie durable, dédiée à un avenir plus vert.'
    },
    {
      name: 'Abdul Rehman',
      position: 'Ingénieur en Énergies Renouvelables',
      bio: 'Abdul Rehman, ingénieur en énergies renouvelables distingué, est le moteur des initiatives révolutionnaires dans le domaine de l’énergie durable. Son expertise en technologies des énergies renouvelables alimente des solutions innovantes, remodelant le paysage énergétique. Avec un fort accent sur la durabilité, il pilote des projets transformants, façonnant un avenir plus vert et plus efficace.'
    },
    {
      name: 'Patrick Tekou',
      position: 'Responsable de Projet et Ingénieur Mécanique',
      bio: 'Patrick Tekou, responsable de projet dynamique et ingénieur mécanique, orchestre des projets transformants avec précision et innovation. En s’appuyant sur son expertise en ingénierie, il dirige des projets qui redéfinissent les industries. Son engagement envers l’excellence et son ingéniosité mécanique conduisent des solutions tournées vers l’avenir, remodelant l’avenir de l’ingénierie et de la gestion de projets.'
    },
    {
      name: "Sharli Jodhani",
      position: "Chef de Projet en Durabilité",
      bio: "Sharli Jodhani est chef de projet en durabilité avec une maîtrise en ingénierie environnementale et plus de 5 ans d'expérience dans le conseil environnemental, le développement et la gestion de projets. Elle est experte dans la gestion de la technologie propre et veille à la conformité avec les réglementations environnementales canadiennes. Elle a fait ses preuves dans la réduction des risques potentiels des projets en assurant leur conformité réglementaire et en mettant en œuvre des solutions environnementales stratégiques. Elle excelle dans la collaboration avec les parties prenantes et la fourniture de solutions innovantes pour répondre aux objectifs de lutte contre le changement climatique. Elle possède également une expérience en conception technique, y compris PFD, BFD, P&ID, la sélection d'équipements, les spécifications et l'ingénierie de site."
    },
    {
      name: "Illia Negovora",
      position: "Spécialiste du Développement des Processus",
      bio: "Illia Negovora, spécialiste du développement des processus - Recherche et Développement, avec une expérience industrielle à la fois dans les processus de production et à l’échelle pilote. Avec son parcours unique en génie chimique et en technologies informatiques, il apporte une approche innovante au développement, à la simulation et à la validation des processus. De l’éprouvette à l’échelle commerciale, il croit que les processus doivent être conçus pour être évolutifs, sûrs et durables. Illia est diplômé en génie chimique de l’Université d’Ottawa."
    }
  ]
};

const Team = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const teamMembers = teamContent[selectedLanguage];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-8xl font-bold text-green-600 mb-4">{selectedLanguage == 'English' ? "Our Team" : "Notre équipe"}</h1>
        <p className='text-lg mb-12'>{selectedLanguage == 'English' ? "Meet Our Experts" : "Rencontrez tous nos experts"}</p>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-md mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                {/*<FontAwesomeIcon icon={faUser} className="text-green-600" style={{ fontSize: '10rem' }} />*/}
              </div>
              <div className="p-6 text-left">
                <h2 className="text-2xl font-bold text-green-600 mb-2">{member.name}</h2>
                <h3 className="text-xl text-green-400 mb-4">{member.position}</h3>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
