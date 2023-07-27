import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { companyAddress, companyTimings, companyPhoneNo } from "./constant";

export const socialMediaList = [
  {
    icon: <FacebookIcon />,
    url: "https://www.instagram.com/inquisitive.institute/",
  },
  {
    icon: <TwitterIcon />,
    url: "https://www.instagram.com/inquisitive.institute/",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/inquisitive.institute/",
  },
];

export const contactData = [
  {
    icon: <LocationOnIcon />,
    text: companyAddress,
  },
  {
    icon: <AccessTimeIcon />,
    text: companyTimings,
  },
  {
    icon: <LocalPhoneIcon />,
    text: companyPhoneNo,
  },
];

export const courseList = [
  {
    icon: "../images/web-development.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    desciption: `HTML: Learn the fundamental language for web structure and content, using elements to create web pages and enhance accessibility.\n CSS: Discover the language for web page styling, controlling layout, design, and responsiveness for visually appealing websites.\n  JavaScript: Master the versatile programming language for web interactivity, creating dynamic elements and building powerful web applications. Combine HTML, CSS, and JavaScript to become a skilled web developer.`,
    author: "by John doe",
    rating: 5,
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: "../images/frontend-development.webp",
    title: "Frontend development with React",
    desciption:
      "Learn modern web development using React, a powerful JavaScript library. Build interactive user interfaces, manage state, and create reusable components to develop dynamic and responsive websites. Gain hands-on experience in front-end development and become proficient in building web applications with React.",
    author: "by John doe",
    rating: 5,
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: "../images/backend-development.png",
    title: "Backend development with Python",
    desciption:
      "Explore the world of server-side programming using Python. Learn to build robust and scalable web applications, handle data storage, create APIs, and manage server operations. Gain the skills to develop efficient and secure backend systems to power dynamic websites and web applications.",
    author: "by John doe",
    rating: 5,
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: "../images/full-stack-development.jpg",
    title: "Full Stack development (backend + frontend)",
    desciption:
      "Become a versatile web developer by mastering both backend and frontend technologies. Learn to build interactive user interfaces with HTML, CSS, and JavaScript, and develop server-side applications using popular backend languages like Python, Ruby, or Node.js. Acquire the skills to create dynamic, feature-rich web applications from start to finish.",
    author: "by John doe",
    rating: 5,
    duration: "6 Months",
    level: "Beginner",
  },
  {
    icon: "../images/dbAdmin.jpg",
    title: "Database Administrator (DBMS + SQL)",
    desciption:
      "Gain expertise in Database Management Systems (DBMS) and SQL to efficiently manage, optimize, and secure databases. Learn to design, implement, and troubleshoot database systems, ensuring data integrity and availability. Become proficient in SQL queries to retrieve, manipulate, and analyze data for effective decision-making and data-driven applications.",
    author: "by John doe",
    rating: 5,
    duration: "6 Months",
    level: "Beginner",
  },
  {
    icon: "../images/machine-learning.webp",
    title: "Machine Learning with Python and tensorflow",
    desciption:
      "Unlock the power of machine learning using Python and TensorFlow framework. Acquire skills in data preprocessing, model creation, and evaluation for various ML algorithms. Harness deep learning capabilities to build and deploy advanced AI applications, making significant advancements in artificial intelligence and data-driven solutions.",
    author: "by John doe",
    rating: 5,
    duration: "6 Months",
    level: "Beginner",
  },
];

export const learnInfo = [
  {
    icon: "../svgicons/cap-graduation.svg",
    title: "Online Courses",
    subTitle:
      "Dive into our engaging online courses and gain practical IT skills without leaving your house.",
  },
  {
    icon: "../svgicons/record-speaker.svg",
    title: "Learn with Expert",
    subTitle:
      "Benefit from the guidance of industry experts who bring real-world scenarios and practical knowledge into the classroom.",
  },
  {
    icon: "../svgicons/education-graduate.svg",
    title: "Earn A Certificates",
    subTitle:
      "Enhance your professional profile with our prestigious certificates and position yourself as a highly qualified IT professional.",
  },
];

export const footers = [
  {
    title: "Company",
    description: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Courses",
        url: "/courses",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
  },
  // {
  //   title: "Features",
  //   description: [
  //     "Cool stuff",
  //     "Random feature",
  //     "Team feature",
  //     "Developer stuff",
  //     "Another one"
  //   ]
  // },
  // {
  //   title: 'Resources',
  //   description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  // },
  {
    title: "Legal",
    description: [
      {
        name: "Privacy policy",
        url: "/privacy",
      },
      {
        name: "Terms of use",
        url: "/terms",
      },
    ],
  },
];

export const offerList = [
  {
    icon: "../svgicons/interview.svg",
    title: "Mock interview sessions",
  },
  {
    icon: "../svgicons/group-interview.svg",
    title: "Real time projects",
  },
  {
    icon: "../svgicons/checklist-document.svg",
    title: "Resume preparation",
  },
  {
    icon: "../svgicons/certificate.svg",
    title: "Course Completion Certificate",
  },
  {
    icon: "../svgicons/exam.svg",
    title: "Weekly Assignment",
  },
  {
    icon: "../svgicons/career.svg",
    title: "Career guidance",
  },
];
