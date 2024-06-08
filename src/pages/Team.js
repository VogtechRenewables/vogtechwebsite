import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
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
  
];

const Team = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-8xl font-bold text-green-600 mb-4">Our Team</h1>
        <p className='text-lg mb-12'>Meet all our experts</p>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-md mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                <FontAwesomeIcon icon={faUser} className="text-green-600" style={{ fontSize: '10rem' }} />
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
