const Skills = ({darkMode}) => {
  return (
    <div className=" mx-32 mt-40">
      <h2 className={`text-4xl font-bold ${darkMode ? 'text-white ' : ""}`}>Skills</h2>
      <div className="flex mt-8 justify-between ">
        <div>
          <h2 className={`font-bold text-3xl text-grape ${darkMode ? 'text-darkgrape ' : ""} `}>Java Script</h2>
          <p className={`mt-10 text-xs  w-[400px] mx-w-[400px] text-gray-600 ${darkMode ? 'text-gray-200' : ""}`}>
          I have a solid foundation in JavaScript, enabling me to build dynamic, interactive web applications. My experience includes working with modern JavaScript features such as ES6+ syntax, asynchronous programming, and DOM manipulation. I am also skilled in frameworks like React, which helps me create user-friendly interfaces. Continuously learning and improving, I enjoy solving problems and writing clean, efficient code to bring ideas to life.
          </p>
        </div>
        <div>
          <h2 className={`font-bold text-3xl text-grape ${darkMode ? 'text-darkgrape ' : ""} `}>React JS</h2>
          <p className={`mt-10 text-xs  w-[400px] mx-w-[400px] text-gray-600 ${darkMode ? 'text-gray-200' : ""}`}>
          I have hands-on experience with React, building dynamic and user-friendly web applications. My skills include using React hooks, managing state with tools like Context API or useState, and creating reusable components. I’m proficient in JSX and understand the lifecycle of React components. I focus on writing clean, modular code and continuously improving my knowledge of React and modern JavaScript to deliver high-quality projects.
          </p>
        </div>
        <div>
          <h2 className={`font-bold text-3xl text-grape ${darkMode ? 'text-darkgrape ' : ""} `}>HTML CSS</h2>
          <p className={`mt-10 text-xs  w-[400px] mx-w-[400px] text-gray-600 ${darkMode ? 'text-gray-200' : ""}`}>
          I have a strong foundation in HTML and CSS, creating responsive, visually appealing, and user-friendly web designs. My skills include semantic HTML, advanced CSS techniques like Flexbox and Grid, and implementing accessibility standards. I am proficient in crafting clean and modular code, ensuring compatibility across different browsers and devices. Continuously improving my skills, I enjoy turning ideas into functional and elegant web interfaces.
          </p>
        </div>
        
      </div>
      <hr className={`border-1 mt-10 ${darkMode ? 'border-white ' : 'border-grape'}`} />
    </div>
  );
};

export default Skills;
