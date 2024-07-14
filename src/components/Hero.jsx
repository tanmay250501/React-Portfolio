import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/tanmayRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 overflow-x-hidden w-full">
            <div className="flex flex-wrap w-full">
                <div className="w-full lg:w-1/2 px-4">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-10 text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight lg:mt-16"
                        >
                            Tanmay Sawwalakhe
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-5 px-4">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="rounded-2xl max-w-full h-auto"
                            src={profilePic}
                            alt="profile Pic"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
