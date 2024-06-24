"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "I'm a full stack developer with a passion for creating user-friendly and efficient web applications.",
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
  ],
};
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",
  description:
    "I'm a full stack developer with a passion for creating user-friendly and efficient web applications.",
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
    },
  ],
};
const education = {
  icon: "assets/resume/cap.svg",
  title: "My education",
  description:
    "I'm a full stack developer with a passion for creating user-friendly and efficient web applications.",
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
  ],
};
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
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {experience.itens.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col gap-1 
                        justify-center items-center lg:items-start"
                        >
                          <span className="text-rb">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] bg-rb rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {education.itens.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col gap-1 
                        justify-center items-center lg:items-start"
                        >
                          <span className="text-rb">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] bg-rb rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent className="w-full h-full" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className=" text-6xl group-hover:text-rb-hover transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent><p className="capitalize">{skill.name}</p></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* AboutMe */}
            <TabsContent className="w-full" value="aboutme">
              AboutMe
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Services;
