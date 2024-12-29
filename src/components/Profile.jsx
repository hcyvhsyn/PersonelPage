const Profile = ({darkMode}) => {
  return (
    <div className="mx-32 mt-10">
      <h3 className="text-4xl font-bold">Profile</h3>
      <div className="flex gap-96 items-center">
        <div>
          <h4 className={`font-bold text-3xl text-grape mt-1 mb-8 ${darkMode ? 'text-darkgrape' : ""}`}>Profile</h4>
          <div className="flex gap-10 items-center">
            <div>
              <p className="font-bold flex gap-10 ">Birth Date</p>
              <p className="font-bold flex gap-10 ">City of Residence</p>
              <p className="font-bold flex gap-10 ">Educational Background</p>
              <p className="font-bold flex gap-10 ">Preferred Role</p>
            </div>
            <div>
              <p className="font-light">28.01.2000</p>
              <p className="font-light">Izmir</p>
              <p className="font-light">
                Master's Degree at Dokuz Eylül University
              </p>
              <p className="font-light">Full Stack</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className={`font-bold text-3xl text-grape mt-1 mb-8 ${darkMode ? 'text-darkgrape' : ""}`}>About Me</h4>
          <p className="w-[800px]">
            After graduating from Karadeniz Technical University with a degree
            in Maritime Transportation and Management Engineering, I completed a
            one-year internship at Turkey's leading companies. Later, I started
            my master's program at Dokuz Eylül University in Maritime Safety and
            Environmental Management. During this period, I also began a
            Full-Stack Development training program at Workintech, where I am
            currently enhancing my skills to become a Full-Stack Web Developer.
          </p>
        </div>
      </div>
      <hr className={`border-1 mt-10 ${darkMode ? 'border-white' : 'border-grape'}`} />
    </div>
  );
};

export default Profile;
