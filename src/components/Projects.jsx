import { projectsData } from "../data";
import { toast } from "react-toastify";
import { projectsDataTr } from "../dataTr";

const Projects = ({ darkMode, language }) => {
  return (
    <div className="lg:mx-32 mt-10 mb-20">
      <h5 className="text-4xl font-bold">Projects</h5>
      <div className="flex justify-between gap-8 flex-wrap">
        {language === "en"
          ? projectsData.map((project) => (
              <div key={project.id} className="w-[350px] mt-8">
                <img
                  height={200}
                  width={350}
                  src={project.image}
                  alt={project.title}
                />
                <h6
                  className={`text-2xl text-grape mt-4 ${
                    darkMode ? "text-lemon" : ""
                  }`}
                >
                  {project.title}
                </h6>
                <p className="mt-4 font-thin text-start">
                  {project.description}
                </p>
                <div className="flex gap-10 mt-9">
                  {project.technologies.map((tech, index) => (
                    <p
                      key={index}
                      className={`border-2 rounded-md px-4 py-2 border-grape text-grape w-[80px] text-center ${
                        darkMode ? "border-lemon text-lemon " : ""
                      }`}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <a
                    href={project.github}
                    className={`underline text-grape ${
                      darkMode ? "text-lemon" : ""
                    }`}
                  >
                    Github
                  </a>
                  <a
                    href="#"
                    className={`underline text-grape ${
                      darkMode ? "text-lemon" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      toast.success("Siteye yönlendiriliyorsunuz");
                      setTimeout(() => {
                        window.open(project.liveSite, "_blank");
                      }, 3000);
                    }}
                  >
                    {language === "tr" ? "Göster" : "View"}
                  </a>
                </div>
              </div>
            ))
          : projectsDataTr.map((project) => (
              <div key={project.id} className="w-[350px] mt-8">
                <img
                  height={200}
                  width={350}
                  src={project.image}
                  alt={project.title}
                />
                <h6
                  className={`text-2xl text-grape mt-4 ${
                    darkMode ? "text-lemon" : ""
                  }`}
                >
                  {project.title}
                </h6>
                <p className="mt-4 font-thin text-start">
                  {project.description}
                </p>
                <div className="flex gap-10 mt-9">
                  {project.technologies.map((tech, index) => (
                    <p
                      key={index}
                      className={`border-2 rounded-md px-4 py-2 border-grape text-grape w-[80px] text-center ${
                        darkMode ? "border-lemon text-lemon " : ""
                      }`}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <a
                    href="#"
                    className={`underline text-grape ${
                      darkMode ? "text-lemon" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      toast.success("Githuba yönlendiriliyorsunuz");
                      setTimeout(() => {
                        window.open(project.github, "_blank");
                      }, 3000);
                    }}
                  >
                    Github
                  </a>
                  <a
                    href="#"
                    className={`underline text-grape ${
                      darkMode ? "text-lemon" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      toast.success("Siteye yönlendiriliyorsunuz");
                      setTimeout(() => {
                        window.open(project.liveSite, "_blank");
                      }, 3000);
                    }}
                  >
                    {language === "tr" ? "Göster" : "View"}
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Projects;
