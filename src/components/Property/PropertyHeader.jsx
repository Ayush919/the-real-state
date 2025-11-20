// components/PropertyHeader.js
"use client";

export default function PropertyHeader({property}) {
    const imageUrl = property.images?.[0]
        ? property.images[0].startsWith("http")
            ? property.images[0]
            : `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${property.images[0]}`
        : "/fallback.jpg";


    return (
        <>
            <section
                className="relative w-full h-[300px] sm:h-[450px] md:h-[580px] lg:h-[620px] overflow-hidden bg-black">

                <img
                    src={imageUrl}
                    alt="Property Image"
                    className="w-full h-full object-contain"

                />

                {/* Overlay */}
                <div className="absolute inset-0 z-10"></div>

            </section>
            <div className="relative z-20 p-6 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-4xl font-bold mb-2">{property.title}</h2>
                <address className="text-lg italic">
                    📍 {property.location}
                </address>
                <p className="text-[#5b8b8b] text-2xl font-bold">
                    ₹{property.price?.toLocaleString()}
                    {property.type === "rent" && <span className="text-base font-normal">/mo</span>}
                </p>
            </div>
        </>
    );
}
