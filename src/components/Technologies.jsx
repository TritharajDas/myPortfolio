import React from 'react'
import { SiMongodb } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import { animate, motion, transform } from "motion/react";

const iconVariants = (duration) => ({
    inital: {y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <motion.div
        whileInView={{ opacity:1, x: 0 }}
        initial={{ opacity:0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(1.5)}
            initial = "inital"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial = "inital"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial = "inital"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial = "inital"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies
