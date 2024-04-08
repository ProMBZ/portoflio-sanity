'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";


const instructors = [
     {
        id: 1,
        name: "Muhammad Bin Zohaib",
        designation: "Backend Developer",
        image: '/My Web Pic.jpeg'
     },
     {
        id: 2,
        name: "Syeda Hafsa",
        designation: "Full Stack Developer ",
        image: '/syedahafsa.jpeg'
     },
         {
        id: 3,
        name: "Abu Bakar",
        designation: "Frontend Developer",
        image: '/abubakar.png'
     },
]

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex
    items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto
        flex flex-col items-center justify-center h-full">
             <h2 className="text-2xl md:text-4xl lg:text-7xl
             text-white font-bold text-center mb-8">Meet Our Instructors</h2>
             <p className="text-base md:text-lg text-white
             text-center mb-4">Discover the talented professionals who will
                guide your all the things.
             </p>
             <div className="flex flex-row items-center
             justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
             </div>
        </WavyBackground>
        </div>
  )
}

export default Instructor