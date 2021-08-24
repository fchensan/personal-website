import React from 'react';

const Project = ({ id, title, techUsed, description, buttonText, buttonLink, image }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-2/3">
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
          {techUsed && 
          <p className="text-xl italic pt-2">
            Using {techUsed}
          </p>
          }
          <p className="mt-8 text-xl font-light leading-relaxed">
            {description}
          </p>
          { buttonLink && 
          <p className="mt-8">
            <a href={buttonLink}>
                <button className="py-3 px-8 bg-primary hover:bg-primary-darker rounded text-white">
                    {buttonText}
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
