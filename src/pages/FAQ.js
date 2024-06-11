import React, { useState } from 'react';
import faqBanner from '../images/FAQ_banner.webp';

const faqData = [
  { question: "What materials can be used to produce renewable diesel?", answer: "Renewable diesel is produced from such materials as rendered animal fats, vegetable oils, distillers corn oil, canola oil, and used cooking oils." },
  { question: "Does renewable diesel have other names?", answer: "Yes, renewable diesel is also known as hydrotreated vegetable oil (HVO) or green diesel." },
  { question: "Is renewable diesel the same as biodiesel?", answer: "No, renewable diesel isn’t the same as biodiesel. While both are made from vegetable oils or animal fats -- not petroleum -- they are processed differently, have different performance attributes, and only renewable diesel is “engine-ready” and can fully replace petroleum diesel without engine modifications. Biodiesel must be blended with other fuels. Most manufacturers’ engines are calibrated to operate with no more than 20% of their fuel blend from biodiesel." },
  { question: "Does renewable diesel burn cleaner than petroleum diesel or biodiesel?", answer: "Gallon for gallon, burning renewable diesel produces lower particulate matter, oxides of nitrogen, and aromatic hydrocarbon emissions than petroleum fuels. Renewable diesel also has a higher cetane than petroleum-based diesel or biodiesel. Cetane is similar to the octane rating of regular gasoline, in that higher cetane prevents premature fuel combustion that can cause engine knocking. This higher cetane also reduces engine emissions." },
  { question: "Isn’t distillers corn oil (DCO) related to ethanol? Is renewable diesel the same as ethanol?", answer: "Distillers corn oil is a byproduct of the corn ethanol manufacturing process. It has been used in animal feed. Renewable diesel isn’t the same as ethanol, but renewable diesel can be produced using this ethanol byproduct." },
  { question: "Why is renewable diesel suddenly in high demand?", answer: "Federal and state credit systems require fuel importers, refiners and wholesalers to include an increasing proportion of renewable fuels in the products they sell, to comply with regulations. Renewable diesel generates needed credits in state programs and renewable identification numbers (RINs) in the federal system. Additionally, renewable diesel can be used in conventional engine systems as a complete replacement for or in combination with petroleum diesel without requiring any modifications to conventional engines. Renewable diesel also has a higher cetane than petroleum-based diesel or biodiesel. Cetane is similar to the octane rating of regular gasoline, in that higher cetane prevents premature fuel combustion that can cause engine knocking. This higher cetane also reduces engine emissions." },
  { question: "What is LCFS?", answer: "LCFS is the acronym for California’s Low Carbon Fuel Standard, which is designed with a stated goal of decreasing the carbon intensity of California’s transportation fuels and driving production of a broader range of low-carbon and renewable alternative fuels. LCFS is one of a group of programs enacted, and similar programs are being considered by many states and nations. The LCFS system drives demand for lower-carbon fuels through a system of credits, deficits and required proportions of renewable fuels to conventional fuels. In the LCFS program, fuels generate LCFS credits if they have a carbon intensity (CI) value lower than the year’s program target. Fuels with CI values higher than the year’s program target generate LCFS deficits. Fuel producers with deficits must generate and acquire enough credits to remain in compliance with the standard." },
  { question: "How do provincial and federal fuel standards work?", answer: "Fuel-standard programs have established requirements to blend or use a certain percentage of renewable fuels in the hydrocarbon fuel volumes. These programs are adjusted and overseen by federal and provincial programs to ensure renewable fuels are blended into fuels on an annual basis. These programs are designed to lower carbon emissions from transportation fuels." },
  { question: "What are the clean fuel regulations in Quebec, Ontario and B.C.?", answer: "As of January 1, 2023, Quebec requires 10% low-carbon fuel content in gasoline in 2023 and increase this to 15% by 2030. The Cleaner Transportation Fuels regulation in Ontario requires that fuel suppliers blend 10% of renewable content in gasoline from 2020 to 2024. In British Columbia the Renewable and Low Carbon Fuel Requirement mandates a 5% ethanol content in gasoline and 4% in diesel fuel." },
  { question: "What is carbon intensity?", answer: "Carbon intensity, also known as CI, is a measure of how much carbon dioxide (CO2) or carbon dioxide equivalent (CO2-e) is emitted by the complete lifecycle of a fuel per unit of energy delivered. Carbon intensity varies based on the many lifecycle factors of feedstock production, conversion into fuel, and use. Renewable diesel has a lower CI value than petroleum diesel, but the CI value varies based on the feedstock and the process to transform the material into fuel. For example, petroleum diesel has a CI value of about 100, renewable diesel from soybean oil typically has CI value of 53-58, and renewable diesel from animal fat typically has a CI score of 24-52." },
  { question: "Why does a fuel type have a CI range instead of a set number?", answer: "Fuels have ranges instead of set CI values because the CI value of a specific fuel will vary based on the lifecycle emissions associated with how the feedstock is produced, processed, and transported as well as its emissions impact when used."},
  { question: "What is the carbon intensity of renewable diesel?", answer: "It varies based on such factors as which feedstock is used (such as rendered animal fat, vegetable oils or used cooking oil), the land impact of the feedstock production, the energy and process used to convert that material into fuel, and the emissions when the fuel is used in vehicles." },
  { question: "What are the benefits of green ammonia?", answer: "Green ammonia is produced using renewable energy sources and emits no carbon dioxide during its production. It serves as a clean and versatile energy carrier, with applications in agriculture, energy storage, and transportation. Its benefits include reduced greenhouse gas emissions, energy storage capacity, and a sustainable alternative to fossil fuels, contributing to a more environmentally friendly and sustainable energy future." }
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      <div
        className="flex-col relative h-72 md:h-96 bg-cover bg-center text-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${faqBanner})` }}
      >
        <h1 className="text-3xl md:text-7xl font-bold mb-6 md:mb-12 w-4/5 md:w-3/5">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl mb-6 text-center font-semibold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-400 pb-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h3 className="text-xl md:text-2xl text-gray-800">{faq.question}</h3>
                <span className="text-xl md:text-2xl">{openIndexes.includes(index) ? '-' : '+'}</span>
              </div>
              {openIndexes.includes(index) && (
                <p className="mt-4 md:mt-12 text-gray-700 pb-4 md:pb-12">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
