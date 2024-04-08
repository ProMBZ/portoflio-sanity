"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const portfolioContent = [
  {
    title: "Web Development Projects",
    description:
      "Explore my web development projects and see how I can bring your ideas to life. With expertise in modern web technologies, I create responsive and visually appealing websites tailored to your needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web Development Projects
      </div>
    ),
  },
  {
    title: "UI/UX Design Showcase",
    description:
      "Discover my UI/UX design portfolio showcasing innovative designs crafted to enhance user experience and drive engagement. From wireframes to interactive prototypes, I deliver designs that resonate with your audience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <p>UI/UX Design Showcase</p>
      </div>
    ),
  },
  {
    title: "Version Control Management",
    description:
      "Experience seamless version control management for your projects. With my expertise, you can ensure that your projects are always up-to-date, eliminating the hassle of manual updates. Stay organized, stay efficient.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version Control Management
      </div>
    ),
  },
  {
    title: "Content Creation",
    description:
      "Need engaging content for your website or project? I specialize in creating compelling content that captivates your audience. From blog posts to social media content, I ensure your message stands out.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Content Creation
      </div>
    ),
  },
];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={portfolioContent}/>
    </div>
  )
}

export default WhyChooseUs