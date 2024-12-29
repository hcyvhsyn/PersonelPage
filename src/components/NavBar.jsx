const NavBar = ({ darkMode }) => {
  return (
    <div
      className={`flex justify-between items-center ${
        darkMode ? "bg-black text-white" : ""
      }`}
    >
      <div className="mx-32">
        <button className="bg-grape p-4 rounded-full text-[#3a3] animate-spin">
          H
        </button>
      </div>
      <nav className="flex gap-14 mx-32 items-center">
        
        <a
          href=""
          className={`border-none border-2 p-2 max-w-[120px] min-w-[100px] text-center border-grape rounded-md text-grape ${
            darkMode ? "border-white text-white" : ""
          } hover:border-solid`}
        >
          Skills
        </a>
        <a
          href=""
          className={`border-none border-2 p-2 max-w-[120px] min-w-[100px] text-center border-grape rounded-md text-grape ${
            darkMode ? "border-white text-white" : ""
          } hover:border-solid`}
        >
          Projects
        </a>
        <a
          href=""
          className={`border-none border-2 p-2 max-w-[120px] min-w-[100px] text-center border-grape rounded-md text-grape ${
            darkMode ? "border-white text-white" : ""
          } hover:border-solid`}
        >
          Hire Me
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
