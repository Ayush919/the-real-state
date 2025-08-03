'use client';

import { useEffect, useState } from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {useRouter} from "next/navigation";

const FeaturedProperties = () => {
    const [properties, setProperties] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const router = useRouter();


    useEffect(() => {
        fetchProperties().then();
    }, []);

    const fetchProperties = async () => {
        const res = await fetch("/api/properties");
        const data = await res.json();

        setProperties(data.data);
        localStorage.setItem("properties", JSON.stringify(data.data[0]));
        // Initialize image index per property
        const indexMap = {};
        data.data.forEach((p) => (indexMap[p._id] = 0));
        setCurrentImageIndex(indexMap);
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
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2 font-[Prata]">Featured Luxury Property</h2>
                <p className="text-gray-500 font-[lato]">Create property listings with all the features you’d expect</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties?.map((property) => {
                    const currentIndex = currentImageIndex[property._id] || 0;
                    const images = property.images || [];

                    return (
                        <div key={property._id} className="bg-white rounded-xl shadow-md overflow-hidden relative"
                             onClick={() => router.push(`/listing/${property._id}`)}>
                            <div className="relative h-[250px] group">
                                {/* Badges */}
                                <div className="absolute top-2 left-2 flex gap-2 z-10">
                                    <span className="bg-yellow-800 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                                </div>
                                <div className="absolute top-2 right-2 flex gap-2 z-10">
                                    <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                                        {property.type === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                                    </span>
                                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">HOT OFFER</span>
                                </div>

                                {/* Image */}
                                {images.length > 0 && (
                                    <img
                                        src={images[currentIndex]}
                                        alt={property.title}
                                        className="w-full h-full object-cover transition duration-300"
                                    />
                                )}

                                {/* Nav Arrows */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => handlePrev(property._id, images.length)}
                                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 z-10"
                                        >
                                            <MdChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={() => handleNext(property._id, images.length)}
                                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 z-10"
                                        >
                                            <MdChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1 font-[Prata]">{property.title}</h3>
                                <p className="text-emerald-700 font-bold text-md mb-3">
                                    {property.price.toLocaleString()}
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
