/* eslint-disable react/prop-types */
import "./NavbarButton.css";
import { motion } from "framer-motion";

const NavbarButton = ({ setIsOpen, isOpen }) => {

    const variants = {
        animate: { y: isOpen ? "-100%" : "0" },
    };

    return (
        <div className="navbarMainButtonDiv">
            <motion.div
                onClick={() => setIsOpen(!isOpen)}
                variants={variants}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
                animate="animate"
                className="navbarWrapper"
            >
                <div className="navButton">
                    <Button label="menu" />
                </div>

                <div className="navButton">
                    <Button label="close" />
                </div>
            </motion.div>
        </div>

    )
}

export default NavbarButton


const Button = ({ label }) => {
    return <div className="navP">
        <p>{label}</p>
        <p>{label}</p>
    </div>
};