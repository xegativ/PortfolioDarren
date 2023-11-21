import "./App.css";

function App() {
    const handleClick = (e: any, targetId: any) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="main">
                <div className="main-left">
                    <div className="bio-wrap">
                        <h1>Darren Lai</h1>
                        <h2>Mechatronic Systems Engineering Student @ SFU</h2>
                        <h3>
                            Striving to create a positive community around
                            myself for others, while also doing what makes me
                            happy: inventing.
                        </h3>
                    </div>

                    <div className="tob-wrap">
                        <p>
                            <a
                                href="#projects"
                                onClick={(e) => handleClick(e, "projects")}
                            >
                                Projects
                            </a>
                        </p>
                        <p>
                            <a
                                href="#experience"
                                onClick={(e) => handleClick(e, "experience")}
                            >
                                Experience
                            </a>
                        </p>
                        <p>
                            <a
                                href="#involvement"
                                onClick={(e) => handleClick(e, "involvement")}
                            >
                                Involvement
                            </a>
                        </p>
                    </div>

                    <div className="socials-wrap">
                        <p>
                            <a
                                href="https://www.linkedin.com/in/andrew-lai-8b3969190/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://github.com/xegativ"
                                target="_blank"
                            >
                                Github
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.instagram.com/andrew._lai/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
                <div className="main-right">
                    <div className="left-space"></div>
                    <div className="right-info">
                        <div id="projects" className="projects-wrap">
                            <p>Projects</p>
                            <div className="project-box">
                                <p>SubVision Robotics ROV</p>
                                <p>Description</p>
                                <div className="project-tags">
                                    <p>ROS1</p>
                                    <p>Python</p>
                                    <p>Raspberry Pi</p>
                                    <p>Linux</p>
                                    <p>SolidWorks</p>
                                </div>
                            </div>
                            <div className="project-box">
                                <p>Arduino Projects</p>
                            </div>
                            <div className="project-box">
                                <p>Robot Soccer</p>
                            </div>
                            <div className="project-box">
                                <p>Sumo Robot</p>
                            </div>
                            <div className="project-box">
                                <p>Lua Game Development</p>
                            </div>
                        </div>
                        <div id="experience" className="experience-wrap">
                            <p>Experience</p>
                        </div>
                        <div id="involvement" className="involvement-wrap">
                            <p>Involvement</p>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </>
    );
}

export default App;
