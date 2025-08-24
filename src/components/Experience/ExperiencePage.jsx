import React from "react";
import { useParams } from "react-router-dom";
import data from "/src/data/experience/experience.json";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  const { id } = useParams();
  const exp = data.find((x) => x.id === id);

  if (!exp) {
    return <h1>Experience not found</h1>;
  }

  return (
    <div className="text-matte p-5 flex justify-center items-start">
      <div className="flex flex-col p-2 md:p-5 bg-card rounded-xl shadow gap-3 max-w-[900px]">
        <div className=" hover:text-highlight mb-5">
          <Link to={"/#experience"}>&larr; Back to Experience</Link>
        </div>
        <div className="flex gap-3">
          <a href={exp.companyWebsite} target="_blank">
            <div
              className="rounded-xl aspect-square flex justify-center items-center
            bg-surface p-1.5 max-h-[75px] md:max-h-[150px] 
            transition-all hover:-translate-y-1 hover:scale-[1.02]"
            >
              <img src={exp.logoPath} alt="Company Logo"></img>
            </div>
          </a>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-4xl font-bold">{exp.position}</h1>
            <a
              className="text-lg md:text-3xl hover:text-highlight"
              href={exp.companyWebsite}
              target="_blank"
            >
              {exp.companyName}
            </a>
            <p className="text-lg text-highlight">{exp.duration}</p>
          </div>
        </div>
        <PageSection title={"Overview"}>
          <div>{exp.description}</div>
        </PageSection>
        <PageSection title={"Responsibilities"}>
          <ul className="list-disc list-inside">
            {exp.responsibilities.map((responsibility, idx) => {
              return <li key={idx}>{responsibility}</li>;
            })}
          </ul>
        </PageSection>
        <PageSection title={"Key Achievements"}>
          <ul className="list-disc list-inside">
            {exp.achievements.map((achievement, idx) => {
              return <li key={idx}>{achievement}</li>;
            })}
          </ul>
        </PageSection>
        <PageSection title={"Technologies Used"}>
          <div className="flex flex-wrap gap-3">
            {exp.technologies.map((tech, idx) => {
              //console.log(tech);
              return (
                <div
                  key={idx}
                  className="p-2 bg-surface rounded-xl shadow font-semibold text-sm"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </PageSection>
      </div>
    </div>
  );
};

const PageSection = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="border-b-2 border-matte p-2 font-bold md:text-lg">
        {title}
      </div>
      {children}
    </div>
  );
};

export default ExperiencePage;
