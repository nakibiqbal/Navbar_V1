import { useState, useEffect } from "react";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import NavbarButton from "./Navbar_Button/NavbarButton";
import NavbarContent from "./Navbar_Content/NavbarContent";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 500);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 500);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const variants = {
        animateHeader: {
            width: isOpen ? (isLargeScreen ? "480px" : "100%") : "100px",
            height: isOpen ? (isLargeScreen ? "650px" : "480px") : "40px",
            top: isOpen ? "-25px" : 0,
            right: isOpen ? "-25px" : 0,
            transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                delay: isOpen ? 0 : 0.35
            }
        },
    };


    return (
        <header className="navbar">
            <motion.div variants={variants} animate="animateHeader" className="navbarMainDiv">

                <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />

                <AnimatePresence>
                    {isOpen && <NavbarContent />}
                </AnimatePresence>

            </motion.div>
        </header>
    );
};

export default Navbar;
