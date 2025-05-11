"use client";

import AcmeLogo from "@/app/assets/logo-acme.png";
import QuantumLogo from "@/app/assets/logo-quantum.png";
import EchoLogo from "@/app/assets/logo-echo.png";
import CelestialLogo from "@/app/assets/logo-celestial.png";
import PulseLogo from "@/app/assets/logo-pulse.png";
import ApexLogo from "@/app/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: "-50%",
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {/*First Set of Logos for animation*/}
                        <Image
                            src={AcmeLogo}
                            alt="Acme Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={QuantumLogo}
                            alt="QuantumLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={EchoLogo}
                            alt="EchoLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={CelestialLogo}
                            alt="CelestialLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={PulseLogo}
                            alt="PulseLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={ApexLogo}
                            alt="ApexLogo Logo"
                            className="logo-ticker-image"
                        />

                        {/*Second set of Logos for animation*/}
                        <Image
                            src={AcmeLogo}
                            alt="Acme Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={QuantumLogo}
                            alt="QuantumLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={EchoLogo}
                            alt="EchoLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={CelestialLogo}
                            alt="CelestialLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={PulseLogo}
                            alt="PulseLogo Logo"
                            className="logo-ticker-image"
                        />
                        <Image
                            src={ApexLogo}
                            alt="ApexLogo Logo"
                            className="logo-ticker-image"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
