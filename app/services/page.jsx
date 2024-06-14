"use client"
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: "Web Development",
    description: "We develop web applications using the latest technologies.",
    href: "/services/web-development",
  },
  {
    num: '02',
    title: "UI/UX Design",
    description: "We create intuitive and engaging user interfaces with a focus on user experience design.",
    href: "/services/web-design",
  },
  {
    num: '03',
    title: "Logo Design",
    description: "We create visually appealing logos that reflect your brand identity.",
    href: "/services/web-design",
  },
  {
    num: '04',
    title: "SEO",
    description: "We optimize your website for search engines to increase your visibility.",
    href: "/services/web-design",
  },
];

import { motion } from 'framer-motion'

function Services() {
  return (
    <section className=' min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1, 
          transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}  
          }}
          
        >
          {services.map((service, index)=>{
            return <div key={index}>
              <div>
                <div>{service.num}</div>
              </div>
            </div>
          })}
        </motion.div>
      </div>
      
    </section>
  )
}

export default Services