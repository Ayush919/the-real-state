'use client';

import { useEffect, useState } from 'react';
import { FaBath, FaBed, FaRulerCombined } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const FeaturedProperties = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [filter, setFilter] = useState("all");
    const router = useRouter();
    let currentPath = typeof window !== 'undefined' ? window.location.pathname : "";

    useEffect(() => {
        fetchProperties();
    }, []);

    useEffect(() => {
        applyFilter(filter);
    }, [filter, properties]);

    const fetchProperties = async () => {
        const res = await fetch("/api/properties");
        const data = await res.json();
        setProperties(data.data);
        setFilteredProperties(data.data);
        const indexMap = {};
        data.data.forEach((p) => (indexMap[p._id] = 0));
        setCurrentImageIndex(indexMap);
    };

    const applyFilter = (type) => {
        if (type === "all") {
            setFilteredProperties(properties);
        } else {
            setFilteredProperties(properties.filter(p => p.type === type));
        }
    };

    const handlePrev = (id, total) => {
        setCurrentImageIndex((prev) => ({
            ...prev,
            [id]: prev[id] === 0 ? total - 1 : prev[id] - 1,
        }));
    };

    const handleNext = (id, total) => {
        setCurrentImageIndex((prev) => ({
            ...prev,
            [id]: prev[id] === total - 1 ? 0 : prev[id] + 1,
        }));
    };

    return (
        <section className="px-6 py-12">
            {/* Heading */}
            <div className="text-center mb-6 mt-10">
                <h2 className="text-3xl font-bold mb-2 font-[Prata]">
                    {currentPath === "/listing" ? "All Available Properties" : "Featured Luxury Property"}
                </h2>
                {currentPath !== "/listing" && (
                    <p className="text-gray-500 font-[Prata]">
                        Create property listings with all the features you’d expect
                    </p>
                )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["all", "sale", "rent"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-5 py-2 rounded-lg border font-medium transition-all duration-200 
                            ${filter === type
                            ? "bg-[#5B8B8B] text-white border-emerald-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {type === "all" ? "All" : type === "sale" ? "For Sale" : "For Rent"}
                    </button>
                ))}
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties
                    ?.filter((_, index) => currentPath === "/listing" || index < 9)
                    .map((property) => {
                        const currentIndex = currentImageIndex[property._id] || 0;
                        const images = property.images || [];

                        return (
                            <div
                                key={property._id}
                                className="bg-white rounded-lg shadow-md overflow-hidden relative" // reduced border radius
                                onClick={() => router.push(`/listing/${property._id}`)}
                            >
                                {/* Image Section */}
                                <div className="relative h-[250px] group">
                                    <div className="absolute top-2 left-2 flex gap-2 z-10">
                                        <span className="bg-yellow-800 text-white text-xs font-bold px-2 py-1 rounded">
                                            FEATURED
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2 flex gap-2 z-10">
                                        <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                                            {property.type === "sale" ? "FOR SALE" : "FOR RENT"}
                                        </span>
                                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                            HOT OFFER
                                        </span>
                                    </div>

                                    {images.length > 0 && (
                                        <img
                                            src={images[currentIndex]}
                                            alt={property.title}
                                            className="w-full h-full object-cover transition duration-300"
                                        />
                                    )}

                                    {images.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handlePrev(property._id, images.length);
                                                }}
                                                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 z-10"
                                            >
                                                <MdChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleNext(property._id, images.length);
                                                }}
                                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 z-10"
                                            >
                                                <MdChevronRight size={24} />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Info Section */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-1 font-[Prata]">
                                        {property.title}
                                    </h3>

                                    {/* Retail price (if present and higher) */}
                                    {property.retailPrice && property.retailPrice > property.price && (
                                        <p className="text-gray-400 text-sm line-through">
                                            {property.retailPrice.toLocaleString()}
                                        </p>
                                    )}

                                    <p className="text-emerald-700 font-bold text-md mb-3">
                                        {property.price?.toLocaleString()}
                                        {property.type === "rent" && (
                                            <span className="text-sm font-normal">/mo</span>
                                        )}
                                    </p>

                                    <div className="flex justify-between text-sm text-gray-500 font-[Lato]">
                                        <span className="flex items-center gap-1">
                                            <FaBed /> {property.rooms}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaBath /> {property.bathrooms}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaRulerCombined /> {property.size} Sq Ft
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default FeaturedProperties;
