const DarkModeBar = ({ toggleDarkMode, darkMode, setLanguage, language }) => {
  return (
    <div className={`dark:bg-black ${darkMode && "dark"}`}>
      <div className="flex gap-10 lg:justify-end lg:mx-32 py-7 dark:bg-black  sm:justify-center sm:items-center sm:mx-0">
        <label className="inline-flex items-center cursor-pointer gap-3 ">
          <input
            onChange={toggleDarkMode}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className=" relative w-11 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-grape"></div>
          <span className="dark:text-white text-sm text-gray-600">
            {darkMode
              ? language === "tr"
                ? "Koyu"
                : "Dark"
              : language === "tr"
              ? "Açık"
              : "Light"}{" "}
            {language === "tr" ? "Mod" : "Mode"}
          </span>
        </label>

        <p className="dark:text-white   ">|</p>
        <button
          className="text-sm text-gray-600 dark:text-gray-200 w-[130px] min-w-[130px] cursor-pointer"
          onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
        >
          <span className="text-grape dark:text-white">
            {language === "tr" ? "Switch to English" : "Türkçeye Geç"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DarkModeBar;
