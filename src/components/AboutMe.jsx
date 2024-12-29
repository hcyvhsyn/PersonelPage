import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Project2 from "../assets/images/Project2.jpg";

const AboutMe = ({darkMode}) => {
  return (
    <div className={`mx-32 flex mt-16 justify-between` }>
      <div>
        <p className="text-grape ">Huseyn Hajiyev</p>
        <h1 className="text-[70px] font-bold w-[700px] mt-8 leading-[75px]">
        React Enthusiast | Crafting User-Friendly Interfaces
        </h1>
        <p className={`mt-8 text-xs w-[600px] text-gray-600 ${ darkMode ? 'text-gray-300' : ""  }`}>
        I am a passionate web developer with a strong foundation in modern web technologies such as JavaScript, React, and CSS. I specialize in building responsive, user-friendly websites and applications that prioritize functionality and design. I enjoy solving complex problems and turning ideas into reality through efficient and innovative coding practices. With a keen eye for detail and a commitment to continuous learning, I stay updated on the latest industry trends to deliver high-quality projects. My goal is to create digital experiences that not only meet client expectations but also enhance user engagement and satisfaction.
        </p>
        <div className="flex gap-8 mt-10">
          <button className="bg-grape text-white p-4 rounded-xl max-w-[130px] w-[110px]">
            Hire Me
          </button>

          <button className="border-solid border-2 p-4 rounded-xl border-grape flex justify-center items-center gap-2 max-w-[150px] w-[110px] ">
            <span>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-grape text-2xl "
              />
            </span>
            Github
          </button>
          <button className="border-solid border-2 p-4 rounded-xl border-grape flex justify-center items-center gap-2 max-w-[130px] w-[110px]">
            <span>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-grape text-2xl "
              />
            </span>
            Linkedin
          </button>
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
