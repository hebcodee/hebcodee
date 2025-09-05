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

                <div className="flex flex-row justify-between gap-3 items-center ml-auto">
                    <a href="">Home</a>
                    <a href="">My Skills</a>
                    <a href="">Project</a>
                    <FiMoon />
                </div>


            </div>
        </>
    )
}

export default Header