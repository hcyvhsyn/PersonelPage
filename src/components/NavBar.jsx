import { navBarData } from "../data";

const NavBar = ({ darkMode }) => {
  return (
    <div
      className={`flex justify-between items-center ${
        darkMode ? "bg-black text-white" : ""
      }`}
    >
      <div className="mx-32">
        <button
          className="bg-grape p-4 rounded-full text-[#3a3] animate-spin"
          onClick={(e) => {
            e.preventDefault();
            console.log("Button clicked!");
          }}
        >
          H
        </button>
      </div>
      <nav className="flex gap-14 mx-32 items-center">
        {navBarData.map((part,index)=>(
        <a key={index}
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
