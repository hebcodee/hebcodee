"use client"

import { useTheme } from "next-themes";
import Image from "next/image"
import Link from "next/link"
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { Button } from "../ui/button";

const Footer = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex flex-row items-center">
            <Link href="/" className="flex flex-col">
                <Image src="/hebcodee.png" width="42" height="32" alt="logo" />
            </Link>
            <div className="ml-3">
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

            <div className="flex flex-row justify-between gap-3 text-[#979797] text-[10px] items-center ml-auto">
                <a href="">Github</a>
                <a href="">Linkedin</a>
                <a href="">Instagram</a>
            </div>

        </div>
    )
}

export default Footer