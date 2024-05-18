import React from 'react'
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from 'react'
const items = [
  {
    id: crypto.randomUUID(),
    title: "WEB APPLICATION: Tufting spot",
    img: "proiect1.png",
    desc: "Objective: Development of a web application ”tufting spot”, in which I learned and applied the knowledge gained in the programming languages HTML, CSS, JavaScript and PHP. ",
    link: "https://github.com/DragosPantiru/AI.git"
  },
  {
    id: crypto.randomUUID(),
    title: "COMMUNICATIONS IN CONTROL SYSTEMS ",
    img: "proiect1.png",
    desc: " Objective: Gained expertise in the organization, functionality, and utilization of data communications across various layers of industrial control network management. Key Responsibilities: <br /> 1. Communication channel access technique (MAC): master/slave or token. <br /> 2. Node identification method. ",
    link: "https://github.com/DragosPantiru/AI.git"
  },



]
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", " 300"])
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>See The Code</a></button>
          </motion.div>
        </div>



      </div>

    </section>
  );

}
function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressBar">

        </motion.div>

      </div> {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}

    </div>
  )
}

export default Portfolio
