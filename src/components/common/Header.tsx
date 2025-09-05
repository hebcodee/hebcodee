import Link from "next/link"
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

const Header = () => {
    return (

        <>
            <div className="flex flex-row justify-between items-center">
                <Link href="/" className="flex flex-col">
                    <p>heb</p>
                    <p>codee</p>
                </Link>

                <div className="flex flex-row justify-between gap- items-center ml-auto ">
                    <a href="#skills">My Skills</a>
                    <a href="#projects">Project</a>
                    <a href="#contact">Contact</a>
                </div>

                <div>icon</div>

            </div>
        </>
    )
}

export default Header