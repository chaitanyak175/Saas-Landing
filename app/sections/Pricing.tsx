"use client";

import CheckIconTsx from "@/app/components/check";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-title">Pricing</h2>
                    <p className="section-descripton mt-5">
                        Free for forever. Upgrade for unlimited tasks, better
                        security, and exclusive features.
                    </p>
                </div>
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(
                        ({
                            title,
                            monthlyPrice,
                            buttonText,
                            popular,
                            inverse,
                            features,
                        }) => (
                            <motion.div
                                className={twMerge(
                                    "card",
                                    inverse === true &&
                                        "border-black bg-black text-white"
                                )}
                                key={title}
                                whileHover={{
                                    scale: 1.06,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                <div className="flex justify-between">
                                    <h3
                                        className={twMerge(
                                            "text-lg font-bold text-black/50",
                                            inverse === true && "text-white/60"
                                        )}
                                    >
                                        {title}
                                    </h3>
                                    {popular === true && (
                                        <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                                            <motion.span
                                                animate={{
                                                    backgroundPositionX: "100%",
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    repeatType: "loop",
                                                }}
                                                className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                                            >
                                                Popular
                                            </motion.span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-1 mt-[30px]">
                                    <span
                                        className={twMerge(
                                            "text-4xl font-bold tracking-tighter leading-none text-black",
                                            popular === true && "text-white"
                                        )}
                                    >
                                        {monthlyPrice}
                                    </span>
                                    <span
                                        className={twMerge(
                                            "tracking-tight font-bold text-black/50",
                                            popular === true && "text-white/50"
                                        )}
                                    >
                                        /month
                                    </span>
                                </div>
                                <button
                                    className={twMerge(
                                        "btn btn-primary w-full mt-[30px] cursor-pointer",
                                        inverse === true &&
                                            "bg-white text-black"
                                    )}
                                >
                                    {buttonText}
                                </button>
                                <ul className="flex flex-col gap-5 mt-[32px]">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="text-sm flex items-center gap-4"
                                        >
                                            <CheckIconTsx
                                                className={twMerge(
                                                    "h-6 w-6 text-black",
                                                    popular === true &&
                                                        "text-white"
                                                )}
                                            />
                                            <span
                                                className={twMerge(
                                                    "text-black",
                                                    popular === true &&
                                                        "text-white"
                                                )}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
