import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DigitalRain from "./Matrix";

const IntroPage = () => {
  const [text, setText] = useState("");
  // const [showButton, setShowButton] = useState(false);
  const fullText = "Welcome to my portfolio";
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const typingIntervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      // if (index > fullText.length) {
      //   clearInterval(typingIntervalId);
      //   setShowButton(true);
      // }
    }, 100);


    const navigationTimeoutId = setTimeout(() => {
      navigate('/main');
    }, 5000);

    return () => {
      clearInterval(typingIntervalId);
      clearTimeout(navigationTimeoutId);
    };
  }, [navigate]);

  // const handleEnter = () => {
  //   navigate('/main');
  // };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <DigitalRain />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl text-white text-center font-bold mb-8">{text}</h1>
        {/* {showButton && (
          <button
            onClick={handleEnter}
            className="text-white bg-blue-500 sm:bg-green-500 hover:bg-blue-600 sm:hover:bg-green-600 px-6 py-3 rounded-md transition-colors duration-300 ease-in-out"
          >
            Check out my Portfolio
          </button>
        )} */}
      </div>
    </div>
  );
};

export default IntroPage;