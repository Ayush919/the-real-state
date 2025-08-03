'use client';

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        image: "https://demo09.houzez.co/wp-content/uploads/revslider/27.jpg",
        title: "Discover Luxury Homes",
        subtitle: "EQUESTRIAL / HISTORIC / WATERFRONT",
    },
    {
        image: "https://demo09.houzez.co/wp-content/uploads/revslider/49.jpg",
        title: "Buy and Sell Amazing Places",
        subtitle: "EQUESTRIAL / HISTORIC / WATERFRONT",
    },
    {
        image: "https://demo09.houzez.co/wp-content/uploads/revslider/46.jpg",
        title: "Explore Unique Lifestyles",
        subtitle: "EQUESTRIAL / HISTORIC / WATERFRONT",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-[80vh] transition-opacity duration-[1200ms] ease-in-out ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    {/* Background Image */}
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                    />

                    {/* Overlay with black 35% */}
                    <div className="absolute inset-0 bg-black/35 z-10" />

                    {/* Text Layer */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                        <h2 className="text-white text-[32px] sm:text-[52px] leading-tight font-[Prata] mb-4">
                            {slide.title}
                        </h2>
                        <p className="text-white text-[20px] sm:text-[24px] leading-snug font-light font-[Lato]">
                            {slide.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            {/* Arrow Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black/70 z-30"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black/70 z-30"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
