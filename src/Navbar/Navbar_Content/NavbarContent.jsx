/* eslint-disable react/prop-types */
import "./NavbarContent.css"
import { motion } from "framer-motion";

const NavbarContent = ({ isLargeScreen }) => {
    const navPages = [
        { page: "home" },
        { page: "about" },
        { page: "service" },
        { page: "works" },
        { page: "contact" },
    ];
    const navLinks = [
        { link: "Facebook" },
        { link: "Instagram" },
        { link: "Twitter" },
        { link: "LinkedIn" }
    ];
    const animateContent = {
        initial: {
            opacity: 0,
            rotateX: isLargeScreen ? 140 : 100, translateX: isLargeScreen ? -60 : -40, translateY: isLargeScreen ? 120 : 80,
        },
        initial2: { opacity: 0 },
        animate: (index) => ({
            opacity: 1,
            rotateX: 0, translateX: 0, translateY: 0,
            transition: {
                delay: 0.5 + (index * 0.1),
                duration: 0.65,
                ease: [.215, .61, .355, 1]
            }
        }),
        exit: (index) => ({ opacity: 0, transition: { delay: (index * 0.1) }, ease: [0.76, 0, 0.24, 1] }),
    };

    return (
        <div className="navbarContent">
            <div className="navPages">
                {navPages.map((pages, index) => {
                    return <div key={index} className="perspective">
                        <motion.div custom={index}
                            animate="animate" initial="initial" exit="exit"
                            variants={animateContent}
                            className="persAnimate">
                            <a href="#">
                                {pages.page}
                            </a>
                        </motion.div>
                    </div>
                })}
            </div>
            <div className="navLinks">
                {navLinks.map((links, index) => {
                    return <motion.a
                        href="#"
                        key={index}
                        custom={index}
                        variants={animateContent}
                        animate="animate" initial="initial2" exit="exit"
                    >
                        {links.link}
                    </motion.a>
                })}
            </div>
        </div>
    )
}

export default NavbarContent

