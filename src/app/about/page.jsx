'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <main className="space-y-20 mt-18">

            {/* Hero Section */}
            <section className="relative h-[400px]">
                <Image
                    //demo09.houzez.co/wp-content/uploads/revslider/54.jpg
                    src="https://demo09.houzez.co/wp-content/uploads/revslider/54.jpg"
                    alt="About Us Banner"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    priority
                />
                <div
                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center z-10 px-4">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="text-xl mt-2 uppercase">Your Property Journey, Made Simple.</p>
                </div>
            </section>

            {/* Description */}
            <section className="w-full flex justify-center">
                <div className="w-full max-w-7xl md:w-4/5 leading-relaxed text-gray-700 text-lg">
                    <p>
                        Welcome to EZ Grow Infra, a trusted name in the Real Estate industry. Whether you're a
                        first-time buyer or an experienced investor,
                        EZ Grow Infra is your partner in achieving your real estate goals. With 5 years of experience,
                        we've established ourselves as a reliable partner for all your property needs.
                        We are here with a mission to provide exceptional services, exceeding client expectations and
                        fostering long-term relationships. At EZ Grow Infra, we specialize in residential,
                        commercial, and industrial properties. We ensure seamless transactions, from property search to
                        possession. We prioritize transparency and integrity.
                        Also, customer satisfaction is our primary concern. We've earned a reputation for delivering
                        high-quality services and building trust with our clients.
                        Our goal is to make your property journey smooth and hassle-free. Let us help you grow with EZ
                        Grow Infra. Contact us today to explore your property options!
                    </p>
                </div>
            </section>

            {/* Assets Section */}
            <section className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4">
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://demo09.houzez.co/wp-content/uploads/2019/03/Screen-Shot-2019-03-12-at-4.00.48-PM.png"
                        alt="Assets"
                        width={250}
                        height={250}
                        className="rounded-xl"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-semibold">Our Real Estate Assets</h2>
                    <p className="text-gray-700 text-lg">
                        Explore a diverse portfolio of properties on our website, including premium residential
                        apartments, commercial spaces, and industrial plots. Each listing features detailed information,
                        high-quality images, and virtual tours to help you make informed decisions. Our platform is
                        designed to make your property search seamless, secure, and transparent.
                    </p>
                </div>
            </section>

            {/* Choice of Listing Templates Section */}
            <section className="flex justify-center w-full bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 justify-center">
                    {[
                        {
                            title: "Choice Of Listing Templates",
                            img: "https://demo09.houzez.co/wp-content/uploads/2016/10/icon-8.png",
                            alt: "Listing Templates",
                            href:'/listing',
                            // onClick: () => window.location.href = "/listing",
                            description: "Browse a variety of property listing templates tailored for residential, commercial, and industrial real estate. Find the perfect layout to showcase your property."
                        },
                        {
                            title: "Powerful Filters",
                            img: "https://demo09.houzez.co/wp-content/uploads/2016/10/icon-1.png",
                            alt: "Filters",
                            href:'/contact',
                            // onClick: () => window.location.href = "/contact",
                            description: "Easily narrow down your property search with advanced filters for location, price, type, and more. Discover properties that match your exact needs."
                        },
                    ].map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="bg-white p-6 rounded-xl shadow text-center cursor-pointer transition hover:shadow-lg"
                            // onClick={item.onClick}
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={30}
                                height={30}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-3">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Value Section */}
            <section
                className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 max-w-6xl mx-auto px-4">
                {/*<div className="w-full md:w-1/2">*/}
                <Image
                    src="https://demo09.houzez.co/wp-content/uploads/2019/03/Screen-Shot-2019-03-12-at-4.00.40-PM.png"
                    alt="Value"
                    width={400}
                    height={250}
                    className="rounded-xl"
                />
                {/*</div>*/}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-semibold">Value</h2>
                    <p className="text-gray-700 text-lg">
                        Discover a wide range of real estate solutions on our website, including residential,
                        commercial, and industrial properties. Our platform offers detailed listings, high-resolution
                        images, and virtual tours to help you make informed decisions. We are committed to providing a
                        seamless, secure, and transparent property experience, ensuring you find the perfect property to
                        match your needs.
                    </p>
                </div>
            </section>

        </main>
    )
}
