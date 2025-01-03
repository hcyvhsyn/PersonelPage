import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { aboutMeData } from "../data";
import { aboutMeDataTr } from "../dataTr";

const AboutMe = ({ darkMode, language }) => {
  return (
    <div
      className={`sm:flex-col lg:mx-32 flex lg:flex-row mt-16 justify-between `}
    >
      <div>
        <p className={`text-grape ${darkMode ? "text-lemon" : ""} `}>
          {aboutMeData.name}
        </p>
        <h1 className="lg:text-[70px] font-bold lg:w-[700px] mt-8 leading-[75px] ">
          {language === "tr" ? aboutMeDataTr.title : aboutMeData.title}
        </h1>
        <p
          className={`mt-8 text-xs w-[600px] text-gray-600 ${
            darkMode ? "text-inherit" : ""
          }`}
        >
          {language === "tr"
            ? aboutMeDataTr.description
            : aboutMeData.description}
        </p>
        <div className="flex gap-8 mt-10">
          <button
            className={`boreder-solid border-2 border-grape text-grape font-bold p-4 rounded-xl max-w-[130px] w-[110px] hover:bg-grape hover:text-white ${
              darkMode
                ? "border-lemon text-lemon hover:bg-lemon hover:text-white"
                : ""
            }`}
          >
            {language === "tr" ? "İşe Al" : "Hire Me"}
          </button>

          <a
            href="https://github.com/hcyvhsyn"
            className={`border-solid border-2 p-4 rounded-xl border-grape text-grape flex justify-center items-center gap-2 max-w-[130px] w-[110px] hover:bg-grape hover:text-white ${
              darkMode
                ? "border-lemon text-lemon hover:bg-lemon hover:text-white"
                : ""
            }`}
          >
            <span
              className={`text-inherit text-2xl ${
                darkMode ? "text-inherit" : ""
              }`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </span>
            Github
          </a>
          <a
            className={`border-solid border-2 p-4 rounded-xl border-grape text-grape flex justify-center items-center gap-2 max-w-[130px] w-[110px] hover:bg-grape hover:text-white cursor-pointer ${
              darkMode
                ? "border-lemon text-lemon hover:bg-lemon hover:text-white"
                : ""
            }`}
          >
            <span>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`text-inherit text-2xl ${
                  darkMode ? "text-inherit  " : ""
                } `}
              />
            </span>
            Linkedin
          </a>
        </div>
      </div>
      <div className="pr-32 pt-5">
        <img
          height={400}
          width={800}
          src={aboutMeData.image}
          className="w-[600px] h-[400px] object-cover rounded-lg shadow-xl "
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
