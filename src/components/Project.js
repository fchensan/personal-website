import React from 'react';

const Project = ({ id, title, description, buttonLink, image }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-2/3">
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            {description}
          </p>
          { buttonLink && 
          <p className="mt-8">
            <a href="https://www.notion.so/Teleteam-d69d6ac7d698457792a2faa3eadf2d59">
                <button className="py-3 px-8 bg-primary hover:bg-primary-darker rounded text-white">
                    Learn more
                </button>
            </a>
          </p>
          }
        </div>
      </div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/3`}
      >
        {image}
      </div>
    </div>
  </section>
);

export default Project;
