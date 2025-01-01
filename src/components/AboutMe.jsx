import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Project2 from "../assets/images/Project2.jpg";
import { aboutMeData } from "../data";

const AboutMe = ({ darkMode }) => {
  return (
    <div className={`mx-32 flex mt-16 justify-between`}>
      <div>
        <p className={`text-grape ${darkMode ? "text-lemon" : ""}`}>
          {aboutMeData.name}
        </p>
        <h1 className="text-[70px] font-bold w-[700px] mt-8 leading-[75px]">
          {aboutMeData.title}
        </h1>
        <p
          className={`mt-8 text-xs w-[600px] text-gray-600 ${
            darkMode ? "text-gray-200" : ""
          }`}
        >
          {aboutMeData.description}
        </p>
        <div className="flex gap-8 mt-10">
          <button
            className={`boreder-solid border-2 border-grape text-grape font-bold p-4 rounded-xl max-w-[130px] w-[110px] hover:bg-grape hover:text-white ${
              darkMode
                ? "border-lemon text-lemon hover:bg-lemon hover:text-white"
                : ""
            }`}
          >
            Hire Me
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
              className={`text-inherit text-2xl ${darkMode ? "text-lemon" : ""}`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </span>
            Github
          </a>
          <a
            className={`border-solid border-2 p-4 rounded-xl border-grape text-grape flex justify-center items-center gap-2 max-w-[130px] w-[110px] hover:bg-grape hover:text-white ${
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
          width={400}
          src={Project2}
          className="w-[600px] h-[400px] object-cover rounded-lg shadow-xl "
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
