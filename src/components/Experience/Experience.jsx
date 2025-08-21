import React from "react";
import experienceData from "/src/data/experience/experience.json";

const Experience = () => {
  //console.log(experienceData);
  return (
    <div className="flex flex-col justify-start gap-3 items-stretch px-5 md:px-[100px]">
      <h1 className="font-extrabold text-4xl">My Experience</h1>
      <div className="grid grid-cols-1 gap-5">
        {experienceData.map((exp, idx) => {
          return (
            <div key={idx} className="flex group max-h-[75px] md:max-h-[150px]">
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
              <button
                className="flex flex-1 bg-card rounded-xl group-hover:cursor-pointer 
              transition-all shadow group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-[1.02]
              group-hover:border border-highlight p-2"
              >
                    <div className="flex justify-center items-center max-h-full aspect-square p-2 md:p-5">
                    <div className="rounded-xl aspect-square flex justify-center items-center bg-surface p-1.5">
                        <img src={exp.logoPath} alt="${}" />
                    </div>
                    </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
