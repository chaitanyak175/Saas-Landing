import Logo from "@/app/assets/logosaas.png";
import SocialX from "@/app/assets/social-x.svg";
import SocialInstagram from "@/app/assets/social-insta.svg";
import SocialLinkedin from "@/app/assets/social-linkedin.svg";
import SocialPin from "@/app/assets/social-pin.svg";
import SocialYoutube from "@/app/assets/social-youtube.svg";

import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
            <div className="container">
                <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
                    <Image
                        src={Logo}
                        alt="SaaS Image"
                        height={40}
                        width={40}
                        className="relative"
                    />
                </div>
                <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <a href="#" className="hover:text-white">
                        About
                    </a>
                    <a href="#" className="hover:text-white">
                        Features
                    </a>
                    <a href="#" className="hover:text-white">
                        Customers
                    </a>
                    <a href="#" className="hover:text-white">
                        Pricing
                    </a>
                    <a href="#" className="hover:text-white">
                        Help
                    </a>
                    <a href="#" className="hover:text-white">
                        Careers
                    </a>
                </nav>
                <div className="flex justify-center gap-6 mt-6">
                    <Image
                        src={SocialX}
                        alt="SocialX Image"
                        className="cursor-pointer"
                    />
                    <Image
                        src={SocialInstagram}
                        alt="SocialInstagram Image"
                        className="cursor-pointer"
                    />
                    <Image
                        src={SocialLinkedin}
                        alt="SocialLinkedin Image"
                        className="cursor-pointer"
                    />
                    <Image
                        src={SocialPin}
                        alt="SocialPin Image"
                        className="cursor-pointer"
                    />
                    <Image
                        src={SocialYoutube}
                        alt="SocialYoutube Image"
                        className="cursor-pointer"
                    />
                </div>
                <p className="mt-6">
                    &copy; 2025 Chaitanya's Company Inc. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};
