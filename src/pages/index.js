import React from 'react';
import Layout from '../components/layout/Layout';
import Project from '../components/Project';
import { StaticImage } from "gatsby-plugin-image";

const Index = () => (
  <Layout>
    <section className="py-20 md:pt-40  bg-gray-200">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Hello, I'm <span className="text-blue-900">Francisco Chensan</span>.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Computer Engineering student at National University of Singapore.
          </p>
        </div>
      </div>
    </section>
    <h2 className="mt-20 mx-auto text-center text-3xl lg:text-5xl font-semibold">Projects</h2>
    <Project id={1} 
      title="Teleteam" 
      description="Teleteam is a task manager helping college students on their group projects. This project was built under NUS SoC's Orbital programme.
      Shout out to my friend, Ivander Jonathan, for being such an amazing teammate in developing this app."
      buttonLink="https://www.notion.so/Teleteam-d69d6ac7d698457792a2faa3eadf2d59"
      image={<StaticImage src="../images/teleteam.png" />}
    />
    <Project id={2} 
      title="Low-power posture detection system" 
      description="This is an ongoing project under NUS FoE's Undergraduate Research Opportunities Programme.
      The aim is to design a wearable system that detects bad sitting posture while consuming very little power.
      Possible applications include smart clothing."
      image={<StaticImage src="../images/urop.jpeg" />}
    />
    <Project id={3} 
      title="RTOS-based Robot Car" 
      description="A robot car controlled by a KL25Z microcontroller, programmed using Keil RTX RTOS. 
      It can be controlled via Bluetooth from a mobile app. This project was done in a team of three for an NUS module."
    />
  </Layout>
);

export default Index;
