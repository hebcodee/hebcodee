"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { Button } from "../ui/button";

const Header = () => {
    const { theme, setTheme } = useTheme()
    return (

        <>
            <div className="flex flex-row justify-between items-center">
                <Link href="/" className="flex flex-col">
                    <p>heb</p>
                    <p>codee</p>
                </Link>

                <div className="flex flex-row justify-between gap-3 items-center ml-auto ">
                    <a href="#skills">My Skills</a>
                    <a href="#projects">Project</a>
                    <a href="#contact">Contact</a>
                </div>

                <div>
                    <Button
                        variant="ghost"
                        className="flex items-center" size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? (
                            <FiSun className="size-6" />
                        ) : (
                            <FiMoon className="size-6" />
                        )}
                    </Button>
                </div>

            </div>
        </>
    )
}

export default Header