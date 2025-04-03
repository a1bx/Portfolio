import React, { useState, useEffect } from "react";
import payd from "../assets/portfolio/payd.svg";
import PureConnect from "../assets/portfolio/Logo_Vertical_White.png";
import movies from "../assets/portfolio/movies.jpg";
import VoteChain from "../assets/portfolio/votechain.jpg";
import Radio from "../assets/portfolio/Now-playing.jpeg";
import Jobfinder from "../assets/portfolio/jobfinder.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 5,
      src: Jobfinder,
      title: "Jobfinder",
      description: "A react native application for finding and applying for jobs.",
      demoUrl: "",
      githubUrl: "https://github.com/a1bx/jobfinder",
      additionalInfo: "This app helps users search for job opportunities, providing details on job listings, company information, and application processes. Built with React Native for cross-platform compatibility, it aims to simplify job hunting with a user-friendly interface and real-time updates."
    },
    {
      id: 2,
      src: VoteChain,
      title: "VoteChain",
      description: "A blockchain-based voting system for secure and transparent elections.",
      demoUrl: "https://vote-rho.vercel.app/",
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
      src: PureConnect,
      title: "Currency Converter",
      description: "An application for converting between different currencies.",
      demoUrl: "",
      githubUrl: "https://github.com/a1bx/Currency",
      additionalInfo: "This currency converter offers real-time exchange rates for a wide range of global currencies. It features an intuitive interface, historical rate charts, and the ability to set rate alerts. Built with React Native, it provides a seamless experience across both iOS and Android platforms."
    },
    {
      id: 1,
      src: payd,
      title: "Payd app",
      description: "Payd is the number one payments and financial management platform for freelancers, creatives, event organisers and gig workers.",
      demoUrl: "https://web.mypayd.app",
      githubUrl: "",
      additionalInfo: "For Individuals, Send invoices, receive payments and track your income the easy way. Access multiple payment channels from mobile to bank, card and crypto. For Businesses, Automate how you pay and get paid. Handle bulk invoices, bulk payments and payment tracking for your business the easy way"
    },
    {
      id: 6,
      src: Radio,
      title: "Radio App",
      description: "This is a flutter and python radio streaming application for streaming music and podcasts. Still in development",
      demoUrl: "",
      githubUrl: "https://github.com/a1bx/stream_Radio",
      additionalInfo: "This digital radio app offers a vast library of global radio stations and podcasts. It features personalized recommendations, offline playback, and social sharing capabilities. Built with React Native and integrating various streaming APIs, it provides a seamless audio experience across devices."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolios.length);
    setIsFlipped(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolios.length) % portfolios.length);
    setIsFlipped(false);
  };

  useEffect(() => {
    let timer;
    if (!isFlipped) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isFlipped]);

  const getSlideStyle = (index) => {
    const diff = (index - currentIndex + portfolios.length) % portfolios.length;
    if (diff === 0) return "translate-x-0 scale-100 opacity-50 z-20";
    if (diff === 1) return "translate-x-full scale-75 opacity-50 z-10 blur-sm";
    return "-translate-x-full scale-75 opacity-0 z-0";
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const touchDiffX = touchStartX - touchEndX;

    if (touchDiffX > 50) {
      nextSlide();
      setTouchStartX(0);
    } else if (touchDiffX < -50) {
      prevSlide();
      setTouchStartX(0);
    }
  };

  return (
    <div name="my work" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-2">My work</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="flex items-center justify-center h-[600px] relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Description - visible only on large screens */}
          <div className="w-1/3 p-4 absolute left-0 z-30 hidden lg:block">
            <h2 className="text-2xl font-bold mb-4">{portfolios[currentIndex].title}</h2>
            <p className="mb-4">{portfolios[currentIndex].description}</p>
            <div className="flex space-x-4">
              {portfolios[currentIndex].demoUrl && (
                <a href={portfolios[currentIndex].demoUrl} target="_blank" rel="noopener noreferrer" className="group text-white opacity-70 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Demo</a>
              )}
              {portfolios[currentIndex].githubUrl && (
                <a href={portfolios[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer" className="group text-white opacity-70 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-black cursor-pointer">Code</a>
              )}
            </div>
          </div>

          {/* Slider */}
          {portfolios.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-full p-2 lg:w-1/3 h-full transition-all duration-500 ease-in-out ${getSlideStyle(index)}`}
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
                      {item.demoUrl && (
                        <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Demo</a>
                      )}
                      {item.githubUrl && (
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-black cursor-pointer">Code</a>
                      )}
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
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
