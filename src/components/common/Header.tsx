const Header = () => {
    return (

        <>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <p>heb</p>
                    <p>codee</p>
                </div>

                <div className="flex flex-row justify-between gap-3">
                    <a href="#skills">My Skills</a>
                    <a href="#projects">Project</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* <Button
                            variant="ghost"
                            className="flex items-center" size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? (
                                <Sun className="size-6" />
                            ) : (
                                <Moon className="size-6" />
                            )}
                        </Button> */}

            </div>
        </>
    )
}

export default Header