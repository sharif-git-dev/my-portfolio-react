import "./Style.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const  Scrolltest = () => {
    const { scrollY } = useScroll();

  const text = useTransform(scrollY, [0, 1000], [1, 5]);

  return (
    <span className="section1 bg-white sticky ">
       <motion.div
      style={{
        position: 'sticky',
        top: 0,
        textAlign: 'center',
        fontSize: '2rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      {text}
    </motion.div>
    </span>
  );
};
export default Scrolltest;