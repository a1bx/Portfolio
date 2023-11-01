import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hello! I'm a dedicated software engineer and computer science student with a passion for coding and problem-solving. 
        Beyond my tech skills, I have a unique passion for animation, which I've cultivated alongside my technical pursuits. 
        This diverse combination of skills and interests makes me a well-rounded individual who brings creativity,
        dedication, and a holistic approach to both the tech world and animation world.
        </p>

        <br />

        <p className="text-xl">
        I have a solid foundation in JavaScript,Typescript enabling me to create dynamic and interactive web applications.
        I'm also experienced with popular JavaScript libraries and frameworks such as React, Vite, Next.Js and Vue.js, allowing me to build efficient and user-friendly front-end interfaces.
        My expertise extends to server-side development using Node.js, enabling me to create full-stack applications.
        </p>
      </div>
    </div>
  );
};

export default About;
