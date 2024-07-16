import React, { useState, useEffect } from "react";
import game from "../assets/portfolio/gaming.png";
import Currency from "../assets/portfolio/currency.jpg";
import movies from "../assets/portfolio/movies.jpg";
import VoteChain from "../assets/portfolio/votechain.jpg";
import Radio from "../assets/portfolio/radio.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 2,
      src: VoteChain,
      title: "VoteChain",
      description: "A blockchain-based voting system for secure and transparent elections.",
      demoUrl: "https://taikai.network/ethsafari/hackathons/ethsafari/projects/clmka9d1n043ywn015kt0wil6/idea",
      githubUrl: "https://github.com/Vote-Chain/VoteChain",
      additionalInfo: "VoteChain leverages blockchain technology to ensure secure, transparent, and tamper-proof elections. It features end-to-end encryption, voter anonymity, and real-time result tracking. Built with Solidity smart contracts on Ethereum and a React frontend, it aims to revolutionize digital voting systems."
    },
    {
      id: 3,
      src: movies,
      title: "Movie App",
      description: "A web application for browsing and discovering movies.",
      demoUrl: "https://movie-nine-sigma.vercel.app/",
      githubUrl: "https://github.com/a1bx/movie",
      additionalInfo: "This movie discovery app offers a sleek interface for exploring a vast database of films. Users can search for movies, view details including cast, crew, and ratings, and create personalized watchlists. Built with React and integrating with popular movie APIs, it provides an immersive experience for film enthusiasts."
    },
    {
      id: 4,
      src: Currency,
      title: "Currency Converter",
      description: "An application for converting between different currencies.",
      demoUrl: "",
      githubUrl: "https://github.com/a1bx/Currency",
      additionalInfo: "This currency converter offers real-time exchange rates for a wide range of global currencies. It features an intuitive interface, historical rate charts, and the ability to set rate alerts. Built with React Native, it provides a seamless experience across both iOS and Android platforms."
    },
    {
      id: 5,
      src: game,
      title: "Gaming Project",
      description: "An interactive gaming experience.",
      demoUrl: "https://example.com/game-demo",
      githubUrl: "https://github.com/yourusername/game",
      additionalInfo: "This immersive gaming project showcases advanced graphics and physics engines. It features multiple levels of increasing difficulty, character customization, and online multiplayer functionality. Developed using Unity and C#, it pushes the boundaries of mobile gaming capabilities."
    },
    {
      id: 6,
      src: Radio,
      title: "Radio App",
      description: "A digital radio application for streaming music and podcasts.",
      demoUrl: "https://example.com/radio-demo",
      githubUrl: "https://github.com/yourusername/radio",
      additionalInfo: "This digital radio app offers a vast library of global radio stations and podcasts. It features personalized recommendations, offline playback, and social sharing capabilities. Built with React Native and integrating various streaming APIs, it provides a seamless audio experience across devices."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolios.length);
    setIsFlipped(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolios.length) % portfolios.length);
    setIsFlipped(false);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getSlideStyle = (index) => {
    const diff = (index - currentIndex + portfolios.length) % portfolios.length;
    if (diff === 0) return "translate-x-0 scale-100 opacity-100 z-20";
    if (diff === 1) return "translate-x-full scale-75 opacity-50 z-10 blur-sm";
    return "-translate-x-full scale-75 opacity-0 z-0";
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div name="my work" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white pt-20">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-2">My work</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex items-center justify-center h-[600px] relative overflow-hidden">
          {/* Description - visible only on large screens */}
          <div className="w-1/3 p-4 absolute left-0 z-30 hidden lg:block">
            <h2 className="text-2xl font-bold mb-4">{portfolios[currentIndex].title}</h2>
            <p className="mb-4">{portfolios[currentIndex].description}</p>
            <div className="flex space-x-4">
              <a href={portfolios[currentIndex].demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded">Demo</a>
              <a href={portfolios[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded">Code</a>
            </div>
          </div>

          {/* Slider */}
          {portfolios.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-full lg:w-1/3 h-full transition-all duration-500 ease-in-out ${getSlideStyle(index)}`}
              onClick={index === currentIndex ? handleCardClick : undefined}
              style={{ perspective: '1000px' }}
            >
              <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped && index === currentIndex ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute w-full h-full backface-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                  {/* Description overlay for mobile */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 lg:hidden">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="mb-2">{item.description}</p>
                    <div className="flex space-x-4">
                      <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded text-sm">Demo</a>
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded text-sm">Code</a>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p>{item.additionalInfo}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          {/* <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
            &#10094;
          </button> */}
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;