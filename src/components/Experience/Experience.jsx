import React from "react";
import experienceData from "/src/data/experience/experience.json";
import { Link } from "react-router-dom";

const Experience = () => {
  //console.log(experienceData);
  return (
    <div className="flex flex-col justify-start gap-3 items-stretch px-5 md:px-[100px] text-matte">
      <h1 className="font-extrabold text-4xl text-matte">My Experience</h1>
      <div className="grid grid-cols-1 gap-5">
        {experienceData.map((exp) => {
          return (
            <div key={exp.id} className="flex group">
              <div className="hidden md:block bg-none group-hover:text-highlight">
                <svg
                  className="min-h-full stroke-current fill-current aspect-[1/2]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.005 11.995L12.005 12.005"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.005 7.995L12.005 8.005"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.005 15.995L12.005 16.005"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <Link to={`/experience/${exp.id}`}
                className="flex flex-1 bg-card rounded-xl group-hover:cursor-pointer 
              transition-all shadow group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-[1.02]
              group-hover:border border-highlight p-2 duration-300"
              >
                    <div className="flex justify-center items-center aspect-square p-2 md:p-5">
                    <div className="rounded-xl aspect-square flex justify-center items-center bg-surface p-1.5 max-h-[75px] md:max-h-[150px]">
                        <img src={exp.logoPath} alt="${}" />
                    </div>
                    </div>
                    <div className="flex flex-col w-full p-2 md:p-5 justify-around">
                        <div className="flex text-lg md:text-xl flex-wrap text-center md:text-left break-words md:justify-between">
                            <div className="font-bold">{`${exp.companyName} @ ${exp.position}`}</div>
                            <div className="hidden md:block font-thin text-highlight text-base">{exp.duration}</div>
                        </div>
                        <div className="hidden md:flex text-matte group-hover:text-highlight text-left">
                            {exp.description}
                        </div>
                    </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
