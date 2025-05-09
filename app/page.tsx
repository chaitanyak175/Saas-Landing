import React from "react";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import { ProductShowcase } from "./sections/ProductShowcase";

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <LogoTicker />
            <ProductShowcase />
        </React.Fragment>
    );
}
