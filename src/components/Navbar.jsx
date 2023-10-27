import React, { useState } from "react";
import TypingAnimation from "./TypingAnimation"
var t="Menu";
function CollapsibleNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        
        if (isOpen) {
           t = "Menu";
        }
        else{
            t ="Close"
        }
    };

    return (
        <div>
            <nav className="navbar">
                {/* <h1 id="myname">Espi Sharoon Raj</h1> */}
                <TypingAnimation class="myname" text={"Espi Sharoon Raj"} c="myname" wordsPerMinute={30} />
                <button onClick={toggleNavbar}>{t}</button>
                <div className={`navbar-content ${isOpen ? "show" : "hide"}`}>
                    <a href="https://www.linkedin.com/in/sharoonrajespi/">
                        Linked In
                    </a>
                    <a href="https://github.com/Raju1310/personal-projects">
                        Projects Portfolio
                    </a>
                    <a href="mailto:Rajuespi13@gmail.com">Email me</a>
                </div>
            </nav>

        </div>
    );
}

export default CollapsibleNavbar;
