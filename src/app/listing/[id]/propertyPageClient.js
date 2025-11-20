"use client";

import { useState } from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import PropertyHeader from "@/components/Property/PropertyHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PropertyPageClient({ property }) {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOpen = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === property.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? property.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="mt-18">
            <PropertyHeader property={property} />

            <section className="container mx-auto p-6">
                {/* LABELS */}
                <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-yellow-700 text-white text-xs font-bold px-2 py-1 rounded">
            FEATURED
          </span>

                    <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
            {property.type === "sale" ? "FOR SALE" : "FOR RENT"}
          </span>

                    {property.tags?.includes("hot offer") && (
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              HOT OFFER
            </span>
                    )}
                </div>

                {/* DESCRIPTION */}
                <section className="w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">Description</h2>

                    <p className="text-gray-700 text-lg leading-relaxed text-justify w-full max-w-4xl md:w-4/5">
                        {property.description}
                    </p>
                </section>

                {/* DETAILS, FEATURES, ETC... */}

                {/* GALLERY */}
                <section className="my-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {property.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Property image ${idx + 1}`}
                                onClick={() => handleOpen(idx)}
                                className="w-full h-48 object-cover rounded shadow cursor-pointer hover:opacity-80 transition"
                            />
                        ))}
                    </div>
                </section>
            </section>

            {/* MODAL */}
            <Modal open={open} onClose={handleClose}>
                <div className="fixed inset-0 bg-black flex items-center justify-center z-[9]">

                    {/* Close Button - Top Right Corner */}
                    <button
                        onClick={handleClose}
                        className="fixed top-6 right-6 z-[10000] w-14 h-14 cursor-pointer rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors"
                    >
                        <Close className="text-white" fontSize="large" />
                    </button>

                    {/* Main Image */}
                    <img
                        src={property.images[currentIndex]}
                        alt={`Property image ${currentIndex + 1}`}
                        className="max-h-[80vh] max-w-[90vw] object-contain"
                    />

                    {/* Image Counter - Bottom Center Above Buttons */}
                    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[10000] bg-black/80 px-5 py-2 rounded-full">
                        <span className="text-white font-semibold text-lg">
                            {currentIndex + 1} / {property.images.length}
                        </span>
                    </div>

                    {/* Navigation Buttons - Bottom Center */}
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-[10000]">
                        {/* Previous Button */}
                        <button
                            onClick={prevImage}
                            className="w-16 h-16 rounded-full bg-white/90 cursor-pointer hover:bg-white flex items-center justify-center transition-all hover:scale-110"
                        >
                            <ArrowBackIos className="text-black ml-2" fontSize="medium" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="w-16 h-16 rounded-full bg-white/90 cursor-pointer hover:bg-white flex items-center justify-center transition-all hover:scale-110"
                        >
                            <ArrowForwardIos className="text-black" fontSize="medium" />
                        </button>
                    </div>

                </div>
            </Modal>


        </div>
    );
}
