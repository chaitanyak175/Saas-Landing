"use client";

import React, { useEffect, useState } from "react";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { CallToAction } from "./sections/CallToAction";
import { Footer } from "./sections/Footer";
import Lenis from "lenis";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const lenis = new Lenis({
            duration: 1.5, // Adjust duration for the easing effect
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const animationId = requestAnimationFrame(raf);

        // Cleanup function
        return () => {
            lenis.destroy();
            cancelAnimationFrame(animationId);
        };
    }, []);
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <LogoTicker />
            <ProductShowcase />
            <Pricing />
            <Testimonials />
            <CallToAction />
            <Footer />
        </React.Fragment>
    );
}
