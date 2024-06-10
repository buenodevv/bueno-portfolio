import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/rodrigojbueno' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com/in/rodrigojbueno' },
    { icon: <FaYoutube />, path: 'https://youtube.com/rodrigojbueno' },
    { icon: <FaTwitter />, path: 'https://twitter.com/rodrigojbueno' },
]

function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials