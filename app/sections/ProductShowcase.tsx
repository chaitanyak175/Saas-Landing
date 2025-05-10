import ProductImage from "@/app/assets/product-image.png";
import PyramidImage from "@/app/assets/pyramid.png";
import TubeImage from "@/app/assets/tube.png";

import Image from "next/image";

export const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Boost your productivity</div>
                    </div>
                    <h2 className="section-title mt-5">
                        A more effective way to track progress
                    </h2>
                    <p className="section-descripton mt-5">
                        Effortlessly turn your ideas into a fully functional,
                        responsive Saas website in just minutes with this
                        template.
                    </p>
                </div>
                <div className="relative">
                    <Image
                        src={ProductImage}
                        alt="Product Image"
                        className="mt-10"
                    />
                    <Image
                        src={PyramidImage}
                        alt="Pyramid Image"
                        height={262}
                        width={262}
                        className="hidden md:block md:absolute -right-36 -top-32"
                    />
                    <Image
                        src={TubeImage}
                        alt="Tube Image"
                        height={248}
                        width={248}
                        className="hidden md:block md:absolute bottom-24 -left-36"
                    />
                </div>
            </div>
        </section>
    );
};
