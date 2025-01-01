import { profileData } from "../data";

const Profile = ({ darkMode }) => {
  return (
    <div className="mx-32 mt-10">
      <h3 className="text-4xl font-bold">Profile</h3>
      <div className="flex gap-48 items-center">
        <div>
          <h4
            className={`font-bold text-3xl text-grape mt-1 mb-8 ${
              darkMode ? "text-lemon" : ""
            }`}
          >
            {profileData.header.title}
          </h4>
          {profileData.details.map((ques, index) => (
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
        <div >
          <h4
            className={`font-bold text-3xl text-grape mt-1 mb-8 ${
              darkMode ? "text-lemon" : ""
            }`}
          >
            {profileData.header.title}
          </h4>
          <p className="w-[550px] mr-32">{profileData.header.description}</p>
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
