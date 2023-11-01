import React from "react";
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
      demoUrl: "https://example.com/votechain-demo",
      githubUrl: "https://github.com/yourusername/votechain",
    },
    {
      id: 3,
      src: movies,
      demoUrl: "https://movie-nine-sigma.vercel.app/",
      githubUrl: "https://github.com/a1bx/movie",
    },
    {
      id: 4,
      src: Currency,
      demoUrl: "",
      githubUrl: "https://github.com/a1bx/Currency",
    },
    {
      id: 5,
      src: game,
      demoUrl: "https://example.com/game-demo",
      githubUrl: "https://github.com/yourusername/game",
    },
    {
      id: 6,
      src: Radio,
      demoUrl: "https://example.com/radio-demo",
      githubUrl: "https://github.com/yourusername/radio",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, githubUrl }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
