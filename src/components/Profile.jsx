import { profileData } from "../data";
import { profileDataTr } from "../dataTr";

const Profile = ({ darkMode, language }) => {
  return (
    <div className="lg:mx-32 mt-10">
      <h3 className="text-4xl font-bold">
        {language === "tr" ? "Profil" : "Profile"}
      </h3>
      <div className="flex gap-36 items-center justify-between ">
        <div>
          <h4
            className={`font-bold text-3xl text-grape mt-1 mb-8 ${
              darkMode ? "text-lemon" : ""
            }`}
          >
            {language === "tr"
              ? profileDataTr.header.title
              : profileData.header.title}
          </h4>
          {language === "en"
            ? profileData.details.map((ques, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <div className="flex gap-10 w-[200px]">
                    <p className="font-bold">{ques.question}</p>
                  </div>
                  <div>
                    <p className="font-light  w-[200px]">{ques.answer}</p>
                  </div>
                </div>
              ))
            : profileDataTr.details.map((ques, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <div className="flex gap-10 w-[200px]">
                    <p className="font-bold">{ques.question}</p>
                  </div>
                  <div>
                    <p className="font-light  w-[200px]">{ques.answer}</p>
                  </div>
                </div>
              ))}
        </div>
        <div>
          <h4
            className={`font-bold text-3xl text-grape mt-1 mb-8 ${
              darkMode ? "text-lemon" : ""
            }`}
          >
            {language === "tr"
              ? profileDataTr.header.subtitle
              : profileData.header.subtitle}
          </h4>
          <p className="w-[450px] font-thin mr-14">
            {language === "tr"
              ? profileDataTr.header.description
              : profileData.header.description}
          </p>
        </div>
      </div>
      <hr
        className={`border-1 mt-10 ${
          darkMode ? "border-white" : "border-grape"
        }`}
      />
    </div>
  );
};

export default Profile;
