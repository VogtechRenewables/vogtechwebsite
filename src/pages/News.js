import React from 'react'
import newsBanner from '../images/news_banner.webp';

const News = () => {
  return (
    <div>
      <div className="flex-col relative h-96 bg-cover bg-center text-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${newsBanner})` }}>
        <h1 className="text-7xl font-bold uppercase mb-12 w-3/5">Vogtech Renewables in the News</h1>
      </div>
      <div className="container mx-auto py-12 px-4 md:px-12">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-6">News Articles</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Vogtech Renewable, we keep our finger on the pulse of the latest news in the tech industry. Our News section is the best place to find out the latest developments in technology and how Vogtech Renewable is involved. Here, you can find articles from major publications where VogTech is mentioned, as well as news about the products and services we offer. Be sure to check back often for the latest updates.
          </p>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Ottawa Plant Underway</h3>
              <p className="text-gray-700">Vogtech Renewable plant in Ottawa, Ontario under development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Montreal Manufacturing Site Underway</h3>
              <p className="text-gray-700">Vogtech Renewable plant in Montreal, Quebec under development.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default News;
