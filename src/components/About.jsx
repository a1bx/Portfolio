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
            About Me
          </p>
        </div>
        <p className="text-xl mt-10">
        Hello! I am a dedicated software engineer and a computer science graduate with a passion for coding and problem-solving.
        I have a solid foundation in mobile development using Dart, Kotlin and Flutter sdk, enabling me to create cross-platform applications.
        My expertise extends to web development using TypeScript, JavaScript and also it's popular libraries and frameworks such as React and Next.Js
        enabling me to create dynamic and interactive web applications.
        </p>

        <br />

{/*         <p className="text-xl">
        I have a solid foundation in JavaScript,Typescript enabling me to create dynamic and interactive web applications.
        I'm also experienced with popular JavaScript libraries and frameworks such as React, Vite, Next.Js and Vue.js, allowing me to build efficient and user-friendly front-end interfaces.
        My expertise extends to server-side development using Node.js, enabling me to create full-stack applications.
        </p> */}
      </div>
    </div>
  );
};

export default About;
