import React from 'react';
import valuesBanner from '../images/values_banner.webp';
import valuesImage from '../images/values_logs.webp';
import valuesImage2 from '../images/values_work.webp';
import valuesImage3 from '../images/values_plant.jpg';
import valuesImage4 from '../images/values_windmill.webp';

const Values = () => {
  return (
    <div>
      {/* Banner with "Values" text */}
      <div className="relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${valuesBanner})` }}>
        <h1 className="text-7xl font-bold uppercase">Values</h1>
      </div>
      
      {/* Values sections */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First section */}
          <div className="flex items-center justify-center md:order-1">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">Integrity</h2>
              <p className="text-lg text-gray-800 mb-4">
                We hold ourselves and those around us to the highest moral and ethical standards in all we do. The integrity of our people and organization is the foundation of our firm. Integrity carries forward into the management of our operating segments and fosters the future success of all Fidelis stakeholders.
              </p>
              <h2 className="text-4xl font-bold mb-6 text-green-600">Stewardship</h2>
              <p className="text-lg text-gray-800">
                We engage with a deep sense of responsibility and accountability to our communities, employees, and investors. We focus on safe, sustainable, and beneficial infrastructure providing critical products to society.
              </p>
            </div>
          </div>
          <div className="md:order-2 " style={{ backgroundImage: `url(${valuesImage4})`, backgroundSize: 'cover' }}>
            
          </div>

          {/* Second section */}
          <div className="flex items-center justify-center md:order-3" style={{ backgroundImage: `url(${valuesImage})`, backgroundSize: 'cover' }}>
            
          </div>
          <div className="md:order-4">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">Excellence</h2>
              <p className="text-lg text-gray-800 mb-4">
                Based on a passionate belief in what we are doing and the value and importance of our work, we strive to excel in every aspect of our individual and collective effort to approach every opportunity and challenge with a determination to responsibly succeed at every step.
              </p>
              <h2 className="text-4xl font-bold mb-6 text-green-600">Collaboration</h2>
              <p className="text-lg text-gray-800">
                We thrive when we collaborate iteratively with team members who have diverse backgrounds, skills, and experience. It involves open communication, mutual respect, and a willingness to cooperate for the greater good. Effective collaboration fosters creativity, diverse perspectives, and the pooling of resources, leading to innovative solutions and improved outcomes. Whether in a professional setting, a creative project, or a community initiative, successful collaboration promotes synergy, enables the exchange of ideas, and leverages the strengths of each participant, ultimately fostering an environment where collective contributions lead to collective success.
              </p>
            </div>
          </div>
          {/* Third section */}
          <div className="flex items-center justify-center md:order-5">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">Intellectual Honesty and Objectivity</h2>
              <p className="text-lg text-gray-800">
                We seek the truth regardless of where it leads or the outcome it dictates. Our decisions are grounded by facts, not by the stature or position of any individual. We refine our path forward when new facts emerge or our assumptions are proven incorrect. We seek the truth regardless of where it leads or the outcome it dictates. Our decisions are grounded by facts, not by the stature or position of any individual. We refine our path forward when new facts emerge or our assumptions are proven incorrect. 
              </p>
            </div>
          </div>
          <div className="md:order-6" style={{ backgroundImage: `url(${valuesImage2})`, backgroundSize: 'cover' }}>
            
          </div>

          {/* Fourth section */}
          <div className="flex items-center justify-center md:order-7" style={{ backgroundImage: `url(${valuesImage3})`, backgroundSize: 'cover' }}>
            
          </div>
          <div className="md:order-8">
            <div className="">
              <h2 className="text-4xl font-bold mb-6 text-green-600">Environmental, Social & Governance</h2>
              <p className="text-lg text-gray-800">
                Embracing diverse team backgrounds, skills, and experiences to solve society’s decarbonization challenges enables Vogtech to collectively create best-in-class solutions. Vogtech Renewable is a unique decarbonization enterprise developing and operating multiple synergistic infrastructure GigaSystems™ that generate climate-positive, stable, and predictable EBITDA in the following global growth sectors. 
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Values;
