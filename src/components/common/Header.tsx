"use client"

import Link from "next/link"
import Image from "next/image"
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
                    <Image src="/hebcodee.png" width="42" height="32" alt="logo" />
                </Link>

                <div className="flex flex-row justify-between gap-3 items-center ml-auto text-[12px] font-semibold">
                    <Link className="relative inline-block text-[var(--foreground)] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:bg-red-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-500 after:delay-100 hover:after:scale-x-100" href="#skills">My Skills</Link>
                    <Link className="relative inline-block text-[var(--foreground) after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:bg-red-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-500 after:delay-100 hover:after:scale-x-100" href="#projects">Project</Link>
                    <Link className="relative inline-block text-[var(--foreground) after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[3px] after:w-full after:bg-red-500 after:origin-center after:scale-x-0 after:transition-transform after:duration-500 after:delay-100 hover:after:scale-x-100" href="#contact">Contact</Link>
                </div>

                <div className="ml-4">
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