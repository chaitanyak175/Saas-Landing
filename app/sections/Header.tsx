"use client";

import ArrowRight from "@/app/assets/arrow-right.svg";
import Logo from "@/app/assets/logosaas.png";
import MenuIcon from "@/app/assets/menu.svg";

import Image from "next/image";

export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-20">
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
                <p className="text-white/60 hidden md:block">
                    Streamline your workflow and boost your productivity
                </p>
                <div className="inline-flex gap-1 items-center">
                    <p>Get started for free</p>
                    <Image
                        src={ArrowRight}
                        alt="Right Arrow"
                        className="invert inline-flex justify-center items-center"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Image
                            src={Logo}
                            alt="Saas Logo"
                            height={40}
                            width={40}
                        />
                        <Image
                            src={MenuIcon}
                            alt="Saas Logo"
                            className="md:hidden"
                            width={20}
                            height={20}
                        />
                        <nav className="hidden md:flex gap-6 text-black/60 items-center">
                            <a href="#" className="hover:text-black">
                                About
                            </a>
                            <a href="#" className="hover:text-black">
                                Features
                            </a>
                            <a href="#" className="hover:text-black">
                                Customers
                            </a>
                            <a href="#" className="hover:text-black">
                                Updates
                            </a>
                            <a href="#" className="hover:text-black">
                                Help
                            </a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                                Get for free
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
