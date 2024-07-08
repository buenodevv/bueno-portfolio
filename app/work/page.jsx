"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  BsArrowDownRight,
  BsArrowUp,
  BsArrowUpRight,
  BsGithub,
} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit. lorem ipsum dolor sit amet.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "project 2",
    description:
      "lorem ipsum dolor sit amet sslorem ipsum dsdfolor sit. lorem ipsum dolor sit amet.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "lorem ipsum dofsdflor sit amsdet lorem ipsum dolor sit. lorem ipsum dolor sit amet.",
    stack: [{ name: "Next.js" }, { name: " Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

function Work() {
  const [projec, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get the current slide index
    const currentIndex = swiper.activeIndex;
    // Update the project state with the current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } 
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projec.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-rb-hover transition-all duration-500 capitalize">
                {projec.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{projec.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {projec.stack.map((stack, index) => {
                  return (
                    <li className="text-xl text-rb">
                      {stack.name}
                      {index !== projec.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border-b border-white/20"></div>
              {/* buttons */}
              <div className="flex gap-4 items-center">
                {/* live project button */}
                <Link href={projec.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-rb-hover" />
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* project github */}
                <Link href={projec.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-rb-hover" />
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative-group flex justify-center top-0 bottom-0 items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute w-full h-full bg-black/10 group-hover:bg-black/50 z-10">

                      </div>
                      {/* image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slid buttons */}
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
