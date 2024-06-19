'use client'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

//about data
const about = {
  title: "About Me",
  description: "I'm a full stack developer with a passion for creating user-friendly and efficient web applications.",
  Info: [
    {
      fieldName: "Name",
      fieldValue: "Rodrigo Bueno",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+55) 15 99701 1809",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "rodrigojbueno",
    },
    {
      fieldName: "Nacionality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Email",
      fieldValue: "buenoevv@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Portuguese",
    },
  ]
};
const experience = {
  icon: 'assets/resume/badge.svg',
  title: "My experience",
  description: "I'm a full stack developer with a passion for creating user-friendly and efficient web applications.",
  itens: [
    {
      company: "Tech Solutions Inc ",
      position: "Full stack developer ",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio ",
      position: "Front-end developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Freelance Web Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Company",
      position: "Junior Developer",
      duration: "2017 - 2018",
    }
  ]
}
const education = {
  icon: 'assets/resume/cap.svg',
  title: "My education",
  description: "I'm a full stack developer with a passion for creating user-friendly and efficient web applications.",
  itens: [
    {
      institution: "Online Course Plataform",
      course: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "CodeAcademy",
      course: "Front-end Tracke",
      duration: "2023",
    },
    {
      institution: "Online Course",
      course: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      course: "Certifield Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      course: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      course: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },

  ]
}
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui, officia deserunt mollit anim id est laborum.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },

  ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";

function Services() {
  return (
    <div>Page resume</div>
  )
}

export default Services