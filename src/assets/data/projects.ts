import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    title: "Ping - Social Media Platform",
    description:
      "Ping is a social media platform that enables users to connect with others, share posts, and engage in conversations. It provides an interactive space for building connections and staying updated with friends and communities.",
    links: [{ type: "Github", link: "https://github.com/yashil-singh/ping" }],
    tools: ["React.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Uthau - Final Year Project",
    description:
      "Uthau is a mobile application that helps users on their fitness journey by providing useful features for achieving gains. With a fully functional admin panel, it also enables gyms to manage their daily operations efficiently.",
    links: [
      { type: "Github", link: "https://github.com/yashil-singh/uthau_app" },
    ],
    tools: ["React.js", "React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    description: "Built my portfolio website which you are currently viewing.",
    links: [
      { type: "Github", link: "https://github.com/yashil-singh/portfolio" },
      { type: "Live Site", link: "https://yashil-singh.vercel.app/" },
    ],
    tools: ["React.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Tidy Tasks - Todo App",
    description:
      "Tidy Tasks helps users track and organize tasks by category. It was built with vanilla JavaScript, Vite, and JSON Server for data storage.",
    links: [
      { type: "Github", link: "https://github.com/yashil-singh/tidytask" },
      {
        type: "Live Site",
        link: "https://yashil-singh.github.io/tidytask/login",
      },
    ],
    tools: ["HTML", "CSS", "JavaScript", "JSON Server", "TailwindCSS"],
  },
  {
    title: "PassGen - Password Generator",
    description:
      "Passgen allows users to generate and copy a random password. It displays the password's security level and provides options to customize the included characters.",
    links: [
      { type: "Github", link: "https://github.com/yashil-singh/passgen" },
      {
        type: "Live Site",
        link: "https://yashil-singh.github.io/passgen/",
      },
    ],
    tools: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Workout Tracker",
    description:
      "A simple web app for tracking exercises. Users can create accounts, sign in, and manage their own unique list of exercises by adding or deleting them.",
    links: [
      {
        type: "Github",
        link: "https://github.com/yashil-singh/workout-react-app",
      },
    ],
    tools: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export default projects;
