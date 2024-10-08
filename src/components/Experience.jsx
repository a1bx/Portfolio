import React from "react";

import Solidity from "../assets/Solidity.svg";
import node from "../assets/nodejs.svg";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Kotlin from "../assets/Kotlin.svg";
import flutter from "../assets/flutter.svg";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.svg";
import firebase from "../assets/firebase.svg";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: Solidity,
      title: "Solidity",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Kotlin,
      title: "Kotlin",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    
    {
      id: 8,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    }
  ];

  return (
    <div
      name="skills"
      className="pt-14 bg-gradient-to-b from-gray-800 to-black w-full h-screen sm:pt-[20vh]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 pt-[20vh] sm:inline">
            Skills
          </p>
          <p className="py-6">These are some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
