import "./NavbarContent.css"
import { motion } from "framer-motion";

const NavbarContent = () => {
    const navPages = [
        { page: "home" },
        { page: "about" },
        { page: "service" },
        { page: "works" },
        { page: "contact" },
    ];
    const navLinks = [
        { link: "FACEBOOK" },
        { link: "INSTAGRAM" },
        { link: "TWITTER" },
        { link: "LINKEDIN" }
    ];
    const animateContent = {
        initial: { opacity: 0, rotateX: 40, translateX: -50, translateY: 80 },
        animate: (index) => ({
            opacity: 1,
            rotateX: 0,
            translateX: 0,
            translateY: 0,
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
                    return <motion.a
                        key={index}
                        href="#"
                        custom={index}
                        animate="animate" initial="initial" exit="exit"
                        variants={animateContent}
                    >
                        {pages.page}
                    </motion.a>
                })}
            </div>
            <div className="navLinks">
                {navLinks.map((links, index) => {
                    return <motion.a
                        href="#"
                        key={index}
                        custom={index}
                        variants={animateContent}
                        animate="animate" initial="initial" exit="exit"
                    >
                        {links.link}
                    </motion.a>
                })}
            </div>
        </div>
    )
}

export default NavbarContent