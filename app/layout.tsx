import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Light Saas Landing Page",
    description: "Made by Chaitanya Karmalkar",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    dmSans.className,
                    "antialiased bg-[#EAEEFE] min-h-screen flex flex-col"
                )}
            >
                {children}
            </body>
        </html>
    );
}
