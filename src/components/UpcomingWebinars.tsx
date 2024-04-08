'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {


  const featuredWebinars = [
    {
    "id": 1, 
   "title": "Next.js Developer",
   "link": "https://nextjs.org/",
   "description": "Expert in building fast, scalable web applications using Next.js, leveraging React and server-side rendering for seamless user experiences.",
   "instructor": "Hamzah Syed",
   "isFeatured": true
   },
   {
    "id": 2, 
   "title": "Web Developer",
   "link": "https://www.piaic.org/",
   "description": "Experienced in crafting responsive and dynamic websites, proficient in front-end and back-end technologies to create engaging online experiences tailored to client needs.",
   "instructor": "Ghous Ahmed",
   "isFeatured": true
   },
   {
    "id": 3, 
   "title": "Node.js Developer",
   "link": "https://nodejs.org/en",
   "description": "Specialized in leveraging Node.js to build efficient, scalable, and high-performance server-side applications, adept at asynchronous programming and building APIs.",
   "instructor": "Hamzah Syed",
   "isFeatured": true
   },
   {
    "id": 4, 
   "title": "Typescript Developer",
   "link": "https://www.typescriptlang.org/",
   "description": "Proficient in utilizing TypeScript to develop robust, type-safe applications, enhancing code readability, maintainability, and scalability.",
   "instructor": "Hamzah Syed,Okasha Aijaz",
   "isFeatured": true
   },
      {
    "id": 5, 
   "title": "Graphic Desginer",
   "link": "https://www.canva.com/",
   "description": "Skilled in translating ideas into visually appealing designs, combining creativity with technical proficiency to deliver captivating graphics for various digital and print mediums.",
   "instructor": "Syeda Hafsa",
   "isFeatured": true
   }
]



  return (
    <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">My Skills</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Next.js Journey</p>
            </div>
            <div className="mt-10">
             <HoverEffect 
             items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link : webinar.link
                }
             ))}
             />
            </div>
                  <div className='mt-20 text-center'>
        <Link target="_blank" href={""} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Skills
        </Link>
      </div>
        </div>
        </div>
  )
}

export default UpcomingWebinars