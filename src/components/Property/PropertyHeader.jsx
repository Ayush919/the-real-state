// components/PropertyHeader.js
"use client";

export default function PropertyHeader({ property }) {
    const imageUrl = property.images?.[0]
        ? property.images[0].startsWith("http")
            ? property.images[0]
            : `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${property.images[0]}`
        : "/fallback.jpg";


    return (
        <section
            className="relative w-full h-[500px] flex items-end text-white mb-8"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 transparent bg-opacity-50 z-10"></div>
            <div className="relative z-20 p-6 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{property.title}</h1>
                <address className="text-lg italic mb-4">
                    📍 {property.location}
                </address>
                <p className="text-emerald-400 text-2xl font-bold">
                    ${property.price.toLocaleString()}
                    {property.type === "rent" && <span className="text-base font-normal">/mo</span>}
                </p>
            </div>
        </section>
    );
}
