
import { motion } from "framer-motion"
import { v4 as uuidv4 } from 'uuid';

function EducationBox({ id, name, subTitle, years, text, adress }) {
    return (
        <motion.div className="box"
            // whileHover={{ background: "#d3d3d3", color: "#0c0c1d" }}
            whileHover={{ background: "lightgray", color: "black" }}
        >
            <h2>{name}</h2>
            <h3>{subTitle}</h3>
            <h4>{years}</h4>
            <p>{text}</p>
            <button><a href={adress}>Go</a></button>
        </motion.div>
    )
}

export default EducationBox
