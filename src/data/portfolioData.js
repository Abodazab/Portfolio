
export const personalInfo = {
  name: "Abdelrahman Alaa Azab",
  skills: [
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Developer ",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "Cyber Security",
  ],
  shortName: "Portfolio",
  title: "Computer Engineering Graduate in 2025, FUE University",
  location: "Cairo, Egypt",
  email: "a2002azab@gmail.com",
  heroImage: "/profile.jpeg", // ✅ works with public
}



export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
];

export const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Responsive Design", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication (JWT)", level: 85 },
      { name: "MVC Architecture", level: 80 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase Firestore", level: 75 },
      { name: "Database Design", level: 85 },
      { name: "NoSQL", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Scikit-learn", level: 80 },
      { name: "Data Preprocessing", level: 85 },
      { name: "Model Training", level: 80 },
      { name: "CNNs", level: 75 },
      { name: "Computer Vision", level: 80 },
    ],
  },
  {
    title: "Computer Engineering",
    items: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "OOP", level: 90 },
      { name: "Software Engineering", level: 85 },
      { name: "Computer Networks", level: 75 },
      { name: "Cybersecurity Basics", level: 80 },
    ],
  },
];

export const tabs = [
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Get In Touch" },
];

export const projects = [
  {
    title: "AI Virtual Clinic System",
    description:
      "Full-stack AI-powered healthcare platform with chatbot for disease analysis, smart search, and appointment booking system using NLP and scalable backend architecture.",
    image: "/projects/Picture1.jpg",
    github: "https://github.com/Abodazab/tameny.gradproject",
    live: "#",
  },
  
  {
    title: "Weather Application",
    description:
      "Real-time weather forecasting app using external APIs with dynamic UI updates and location-based weather data.",
    image: "/projects/Weather-App.png",
    github: "https://github.com/Abodazab/Weather-App",
    live: "#",
  },

  {
    title: "Quiz App (React)",
    description:
      "Interactive quiz application built with React featuring dynamic questions, score tracking, and state management using hooks.",
    image: "/projects/Quiz-App-react.png",
    github: "https://github.com/Abodazab/Quiz-App-react",
    live: "#",
  },

  {
    title: "Search API (Express.js)",
    description:
      "RESTful API built with Express.js handling search operations, routing, and structured backend architecture.",
    image: "/projects/SearchApp.png",
    github: "https://github.com/Abodazab/Api-for-Search-App-Express.js-",
    live: "#",
  },

  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built with React and Tailwind CSS using reusable components and dynamic data rendering.",
    image: "/projects/portfolio.png",
    github: "https://github.com/Abodazab/Portfolio",
    live: "#",
  },

  {
    title: "Traffic Sign Recognition (CNN)",
    description:
      "Deep learning model using Convolutional Neural Networks for multi-class traffic sign classification with image preprocessing and augmentation.",
    image: "/projects/Traffic Sign Recognition (CNN).jpg",
    live: "#",
  },

  {
    title: "Cryptography DES Implementation",
    description:
      "Implemented classical cryptography algorithms including DES with key generation and substitution-permutation network design.",
    image: "/projects/Data_Protection.png",
    live: "#",
  },

  {
    title: "Robot Arm Control System",
    description:
      "Arduino-based robotic arm system with motor drivers supporting directional movement and programmable control logic.",
    image: "/projects/M750product.jpg",
    live: "#",
  },
];

// export const projects = [
//   {
//     title: "AI Virtual Clinic",
//     description:
//       "AI-powered platform for booking medical services with chatbot integration and smart search.",
//     image: "/projects/project-1.svg",
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "AI Virtual Clinic",
//     description:
//       "AI-powered platform for booking medical services with chatbot integration and smart search.",
//     image: "/projects/project-1.svg",
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "AI Virtual Clinic",
//     description:
//       "AI-powered platform for booking medical services with chatbot integration and smart search.",
//     image: "/projects/project-1.svg",
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "AI Virtual Clinic",
//     description:
//       "AI-powered platform for booking medical services with chatbot integration and smart search.",
//     image: "/projects/project-1.svg",
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "AI Virtual Clinic",
//     description:
//       "AI-powered platform for booking medical services with chatbot integration and smart search.",
//     image: "/projects/project-1.svg",
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Traffic Sign Recognition",
//     description:
//       "Deep learning CNN model for multi-class traffic sign classification.",
//     image: "/projects/project-2.svg",
//     github: "#",
//     live: null,
//   },
//   {
//     title: "Portfolio System",
//     description:
//       "Dynamic portfolio built with reusable components and data-driven structure.",
//     image: "/projects/project-3.svg",
//     github: "#",
//     live: "#",
//   },
// ];

export const contactFields = [
  { name: "firstName", placeholder: "First Name", type: "text" },
  { name: "lastName", placeholder: "Last Name", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "phone", placeholder: "Phone", type: "text" },
  { name: "message", placeholder: "Message", type: "textarea"  },
];

export const socialLinks = [
  {
    label: 'Email',
    value: 'a2002azab@gmail.com',
    href: 'mailto:a2002azab@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Abodazab',
    href: 'https://github.com/Abodazab',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdelrahman-alaa-67104530a/',
    href: 'https://www.linkedin.com/in/abdelrahman-alaa-67104530a/',
  },
  {
    label: 'Instagram',
    value: 'instagram.com/3bod.3zab',
    href: 'https://www.instagram.com/3bod.3zab',
  },
  {
    label: 'Facebook',
    value: 'facebook.com/Abdelrahman Azab',
    href: 'https://www.facebook.com/AbdelrahmanAzab',
  },
  {
    label: 'Phone',
    value: '+201005721781',
    href: 'tel:+201005721781',
  },
]
