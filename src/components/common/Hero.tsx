import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="mt-20">
            <div className="flex items-center gap-1.5 w-4/6 mb-8">
                <div className="flex border-t border-2 border-[var(--colorforeground)] w-24"></div>
                <Link href="www.github.com/hebcodee"><FaGithub color="var(--colorforeground)" /></Link>
                <Link href="www.github.com/hebcodee"><FiLinkedin color="var(--colorforeground)" /></Link>
                <Link href="www.github.com/hebcodee"><FaInstagram color="var(--colorforeground)" /></Link>
            </div>
            <h1 className="ml-5 mb-6 text-[20px] font-semibold">
                Hi there, l'm Herberth. <br />
                Full Stack <span className="text-red-600">Developer</span>, <br />
                Student, and intern at IBM.
            </h1>

            <div className="w-full h-40 mb-8">
                <Image className=" rounded-full ml-2" src="/Profile_image.jpg" width={160} height={160} alt="Profile Image"></Image>
            </div>

            <div className="space-y-6 text-[12px] text-[#979797] w-5/6">
                <p>I’m a 20-year-old student at Nassau University currently studying web development and design.</p>
                <p>As l've grown as a developer. l've worked alongside senior designers and developers who have raised my standards for whats expected of any web application. </p>
                <p>Through these experiences, l've had the opportunity to create memoroble products that are not only enjoyable to use but are written in code that's maintainable and easy to understand.</p>
            </div>
        </section>
    )
}

export default Hero