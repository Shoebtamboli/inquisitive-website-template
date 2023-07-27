import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { companyAddress, companyTimings, companyPhoneNo } from "./constant";

export const socialMediaList = [
  <FacebookIcon />,
  <TwitterIcon />,
  <InstagramIcon />,
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
    desciption:
      "As a platform, Angular includes: component-based framework for building scalable web applications. collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
    author: "by John doe",
    rating: 5,
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: "../images/frontend-development.webp",
    title: "Frontend development with React",
    desciption:
      "As a platform, Angular includes: component-based framework for building scalable web applications. collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
    author: "by John doe",
    rating: 5,
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: "../images/backend-development.png",
    title: "Backend development with Python",
    desciption:
      "As a platform, Angular includes: component-based framework for building scalable web applications. collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
    author: "by John doe",
    rating: 5,
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: "../images/full-stack-development.jpg",
    title: "Full Stack development (backend + frontend)",
    desciption:
      "As a platform, Angular includes: component-based framework for building scalable web applications. collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
    author: "by John doe",
    rating: 5,
    duration: "6 Months",
    level: "Beginner",
  },
  {
    icon: "../images/dbAdmin.jpg",
    title: "Database Administrator (DBMS + SQL)",
    desciption:
      "As a platform, Angular includes: component-based framework for building scalable web applications. collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
    author: "by John doe",
    rating: 5,
    duration: "6 Months",
    level: "Beginner",
  },
  {
    icon: "../images/machine-learning.webp",
    title: "Machine Learning with Python and tensorflow",
    desciption:
      "As a platform, Angular includes: component-based framework for building scalable web applications. collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
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
    description: ["Home", "About", "Courses", "Contact"],
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
    description: ["Privacy policy", "Terms of use"],
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
