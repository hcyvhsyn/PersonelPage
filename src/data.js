export const aboutMeData = {
  name: "Huseyn Hajiyev",
  title: "React Enthusiast | Crafting User-Friendly Interfaces",
  description:
    "I am a passionate web developer with a strong foundation in modern web technologies such as JavaScript, React, and CSS. I specialize in building responsive, user-friendly websites and applications that prioritize functionality and design. I enjoy solving complex problems and turning ideas into reality through efficient and innovative coding practices. With a keen eye for detail and a commitment to continuous learning, I stay updated on the latest industry trends to deliver high-quality projects. My goal is to create digital experiences that not only meet client expectations but also enhance user engagement and satisfaction.",
};

export const navBarData = [
  {
    section: "Skills",
  },
  {
    section: "Projects",
  },
  {
    section: "Hire Me",
  },
];

export const skillsData = [
  {
    title: "JavaScript",
    description:
      "I have a solid foundation in JavaScript, enabling me to build dynamic, interactive web applications. My experience includes working with modern JavaScript features such as ES6+ syntax, asynchronous programming, and DOM manipulation. I am also skilled in frameworks like React, which helps me create user-friendly interfaces. Continuously learning and improving, I enjoy solving problems and writing clean, efficient code to bring ideas to life.",
  },
  {
    title: "React JS",
    description:
      "I have hands-on experience with React, building dynamic and user-friendly web applications. My skills include using React hooks, managing state with tools like Context API or useState, and creating reusable components. I’m proficient in JSX and understand the lifecycle of React components. I focus on writing clean, modular code and continuously improving my knowledge of React and modern JavaScript to deliver high-quality projects.",
  },
  {
    title: "HTML & CSS",
    description:
      "I have a strong foundation in HTML and CSS, creating responsive, visually appealing, and user-friendly web designs. My skills include semantic HTML, advanced CSS techniques like Flexbox and Grid, and implementing accessibility standards. I am proficient in crafting clean and modular code, ensuring compatibility across different browsers and devices. Continuously improving my skills, I enjoy turning ideas into functional and elegant web interfaces.",
  },
];

export const profileData = {
    header: {
      title: "Profile",
      subtitle: "About Me",
      description: `After graduating from Karadeniz Technical University with a degree
            in Maritime Transportation and Management Engineering, I completed a
            one-year internship at Turkey's leading companies. Later, I started
            my master's program at Dokuz Eylül University in Maritime Safety and
            Environmental Management. During this period, I also began a
            Full-Stack Development training program at Workintech, where I am
            currently enhancing my skills to become a Full-Stack Web Developer.`
    },
    details: [
      {
        question: "Birth Date",
        answer: "28.01.2000",
      },
      {
        question: "City of Residence",
        answer: "Izmir",
      },
      {
        question: "Educational Background",
        answer: "Master's Degree at Dokuz Eylül University",
      },
      {
        question: "Preferred Role",
        answer: "Full Stack Web Developer",
      },
    ],
      
  };


  import Nikewebsite from "./assets/images/Nikewebsite.png";
import PizzaProject from "./assets/images/PizzaProject.png";
import FilmProject from "./assets/images/FilmProject.png";



  export const projectsData = [
    {
      id: 1,
      title: "Nike",
      description:
        "The Nike project is a web application built with React and Tailwind CSS. It offers a responsive, user-friendly design to showcase Nike products. The project includes product listings and detail pages, leveraging React’s modular structure for easy management. It highlights my skills in creating clean and professional web interfaces.",
        image: Nikewebsite,
      technologies: ["react", "tailwind", "axios"],
      github: "https://github.com/hcyvhsyn/Nike",
      liveSite: "https://nike-one-kappa.vercel.app/",
    },
    {
      id: 2,
      title: "Kod Pizza",
      description:
        "The Pizza project is a dynamic web application developed using React, designed to deliver an interactive user experience. The project features a pizza menu that allows users to customize their orders based on preferences. With its modern design and modular structure, it offers both high performance and user-friendliness.",
        image: PizzaProject,
      technologies: ["react", "tailwind", "axios"],
      github: "https://github.com/hcyvhsyn/fsweb-s8-challenge-pizza",
      liveSite: "https://fsweb-s8-challenge-pizza-win4.vercel.app/",
    },
    {
      id: 3,
      title: "Favori Film",
      description:
        "The Favorite Movies project is a web application built with React, designed to let users add and manage their favorite movies. It features a clean, interactive interface where users can create, view, and organize their movie lists. The project combines modern design with functionality, ensuring a seamless user experience.",
        image: FilmProject,
      technologies: ["react", "tailwind", "axios"],
      github: "https://github.com/hcyvhsyn/fsweb-s10g2-redux-filmler-solution",
      liveSite: "https://fsweb-s10g2-redux-filmler-solution-psi.vercel.app/movies",
    },
  ];
  
