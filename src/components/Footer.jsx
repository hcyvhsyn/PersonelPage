import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Footer = ({darkMode}) => {
  return (
    <div className = {`bg-gray-100 flex justify-between px-32 ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
      <div className="flex flex-col gap-10 p-20">
        <h6 className="text-4xl w-[400px]">Lets work together on your next product</h6>
        <a href="mailto:huseynhajiyev0@gmail.com" className="flex gap-4"><span className="text-purple-600"> <FontAwesomeIcon icon={faHandPointRight} /></span>huseynhajiyev0@gmail.com</a>
      </div>
      <div className="flex gap-10 items-end pb-20">
        <a href="" className="">Personal Blog</a>
        <a href="" className="text-green-700">Github</a>
        <a href="" className="text-blue-500">Linkedin</a>
      </div>
    </div>
  );
};

export default Footer;
