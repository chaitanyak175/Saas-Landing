"use client";

import ArrowRight from "@/app/assets/arrow-right.svg";
import CogImage from "@/app/assets/cog.png";
import CylinderImage from "@/app/assets/cylinder.png";
import NoodleImage from "@/app/assets/noodle.png";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";

import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    useMotionValueEvent(translateY, "change", (latestValue) =>
        console.log(latestValue)
    );

    return (
        // <section className="pt-8 pb-20 bg-radial-[ellipse_150%_80%_at_bottom_left] from-[#183EC2] to-[EAEEFE_66%]">
        <section
            ref={heroRef}
            className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
        >
            <div className="container">
                <div className="md:flex items-center lg:gap-50">
                    <div className="md:w-[478px]">
                        <div className="tag">Version 2.0 is here</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                            Pathway to productivity
                        </h1>
                        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your successes.
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                            <motion.button
                                whileHover={{
                                    translateY: -4,
                                }}
                                transition={{
                                    duration: 0.15,
                                }}
                                className="btn btn-primary hover:bg-black/75"
                            >
                                Get for free
                            </motion.button>
                            <motion.button
                                whileHover="hover"
                                initial="initial"
                                variants={{}}
                                className="btn btn-text gap-1"
                            >
                                <span>Learn more</span>
                                <motion.img
                                    src={ArrowRight.src}
                                    alt="Right Arrow"
                                    className="h-5 w-5"
                                    width={16}
                                    height={16}
                                    variants={{
                                        initial: { x: 0 },
                                        hover: { x: 10 },
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                        damping: 15,
                                    }}
                                />
                            </motion.button>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <motion.img
                            src={CogImage.src}
                            alt="Cog Image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                            width={1200}
                            height={1200}
                            animate={{
                                translateY: [-30, 30],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 3,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src={CylinderImage.src}
                            alt="Cylinder Image"
                            className="hidden md:block -top-8 -left-32 md:absolute"
                            width={220}
                            height={220}
                            style={{
                                translateY: translateY,
                            }}
                        />
                        <motion.img
                            src={NoodleImage.src}
                            alt="Noodle Image"
                            className="hidden lg:block absolute top-[524px] left-[448px]"
                            width={220}
                            height={220}
                            style={{
                                rotate: 30,
                                translateY: translateY,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
