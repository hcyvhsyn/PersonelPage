import { navBarData } from "../data";
import { navBarDataTr } from "../dataTr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ darkMode, language }) => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Huseyn_Hajiyev_CV.pdf";
    link.click();
  };

  return (
    <div
      className={`flex lg:justify-between items-center sm:justify-start ${
        darkMode ? "bg-black text-white" : ""
      }`}
    >
      <div className="lg:mx-32 flex gap-8">
        <button
          className="bg-grape p-4 rounded-full text-white"
          onClick={(e) => {
            e.preventDefault();
            console.log("Button clicked!");
          }}
        >
          H
        </button>
        <button
          onClick={downloadCV}
          className="rounded-full bg-grape p-3 text-white animate-pulse "
        >
          {" "}
          <span>
            <FontAwesomeIcon icon={faDownload} />{" "}
          </span>
          {language === "tr" ? "Özgeçmiş Yükle" : "Download CV"}
          
        </button>
      </div>
      <nav className="flex gap-14 mx-32 items-center">
        {language === "tr"
          ? navBarDataTr.map((part, index) => (
              <a
                key={index}
                href="#"
                className={`border-none border-2 p-2 max-w-[120px] min-w-[100px] text-center border-grape rounded-md text-grape ${
                  darkMode ? "border-white text-white" : ""
                } hover:border-solid`}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {part.section}
              </a>
            ))
          : navBarData.map((part, index) => (
              <a
                key={index}
                href="#"
                className={`border-none border-2 p-2 max-w-[120px] min-w-[100px] text-center border-grape rounded-md text-grape ${
                  darkMode ? "border-white text-white" : ""
                } hover:border-solid`}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {part.section}
              </a>
            ))}
      </nav>
    </div>
  );
};

export default NavBar;
