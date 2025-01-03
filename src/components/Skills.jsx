import { skillsData } from "../data";
import { skillsDataTr } from "../dataTr";

const Skills = ({ darkMode, language }) => {
  return (
    <div className="lg:mx-32 mt-40">
      <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : ""}`}>
        {language === "tr" ? "Yetenekler" : "Skills"}
      </h2>
      <div className="mt-8 flex justify-between">
        {language === "tr"
          ? skillsDataTr.map((skill, index) => (
              <div key={index} className="flex flex-col w-[450px]">
                <h2
                  className={`font-bold text-3xl text-grape ${
                    darkMode ? "text-lemon" : ""
                  }`}
                >
                  {skill.title}
                </h2>
                <p
                  className={`mt-4 text-xs w-full text-gray-600 ${
                    darkMode ? "text-gray-200" : ""
                  }`}
                >
                  {skill.description}
                </p>
              </div>
            ))
          : skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col w-[450px]">
                <h2
                  className={`font-bold text-3xl text-grape ${
                    darkMode ? "text-lemon" : ""
                  }`}
                >
                  {skill.title}
                </h2>
                <p
                  className={`mt-4 text-xs w-[350px] text-gray-600 ${
                    darkMode ? "text-inherit" : ""
                  }`}
                >
                  {skill.description}
                </p>
              </div>
            ))}
      </div>
      <hr
        className={`border-1 mt-10 ${
          darkMode ? "border-white" : "border-grape"
        }`}
      />
    </div>
  );
};

export default Skills;
