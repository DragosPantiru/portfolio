import React from "react"
import NavbarItem from "./NavbarItem";
import "./Navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

import { v4 as uuidv4 } from 'uuid';

export default function Navbar({ prop }) {
    return (
        <>
            {/* <nav className="navbar">
                <h2 className="title">Portofolio</h2>
                <ul className="menu">
                    {prop.map((i) => {
                        return <NavbarItem  {...i} key={i.id} />
                    })}
                </ul>
            </nav> */}


            <div className="navbar">
                <Sidebar />
                <div className="wrapper">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >Portofolio</motion.span>

                    <div className="social">
                        <a href="#"><img src="Linkedin.png" alt="" /></a>
                        <a href="#"><img src="Github.png" alt="" /></a>
                        <a href="#"><img src="Instagram.png" alt="" /></a>
                        <a href="#"><img src="Linkedin.png" alt="" /></a>
                    </div>
                </div>
            </div>

        </>
    );
}