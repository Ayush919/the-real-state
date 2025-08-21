import Image from 'next/image'

export default function AboutPage() {
    return (
        <main className="space-y-20">

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
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center z-10 px-4">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="text-xl mt-2 uppercase">Your Property Journey, Made Simple.</p>
                </div>
            </section>

            {/* Description */}
            <section className="max-w-3xl mx-auto px-4 text-center text-gray-700 text-lg leading-relaxed">
                <p>
                    Welcome to EZ Grow Infra, a trusted name in the Real Estate industry. Whether you're a first-time buyer or an experienced investor,
                    EZ Grow Infra is your partner in achieving your real estate goals. With 5 years of experience, we've established ourselves as a reliable partner for all your property needs.
                    We are here with a mission to provide exceptional services, exceeding client expectations and fostering long-term relationships. At EZ Grow Infra, we specialize in residential,
                    commercial, and industrial properties. We ensure seamless transactions, from property search to possession. We prioritize transparency and integrity.
                    Also, customer satisfaction is our primary concern. We've earned a reputation for delivering high-quality services and building trust with our clients.
                    Our goal is to make your property journey smooth and hassle-free. Let us help you grow with EZ Grow Infra. Contact us today to explore your property options!
                </p>
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
                    <h2 className="text-3xl font-semibold">Assets</h2>
                    <p className="text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet
                        sagittis nibh. Pellentesque fermentum ornare quam, in tempus eros. Ut condimentum,
                        mauris blandit tristique tincidunt, magna dui efficitur libero, eu porta odio
                        diam ac purus.
                    </p>
                </div>
            </section>

            {/* Choice of Listing Templates Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Choice Of Listing Templates",
                            img: "https://demo09.houzez.co/wp-content/uploads/2016/10/icon-8.png",
                            alt: "Listing Templates",
                        },
                        {
                            title: "Advanced Search",
                            img: "https://demo09.houzez.co/wp-content/uploads/2016/10/icon-4.png",
                            alt: "Advanced Search",
                        },
                        {
                            title: "Powerful Filters",
                            img: "https://demo09.houzez.co/wp-content/uploads/2016/10/icon-1.png",
                            alt: "Filters",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow text-center">
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={30}
                                height={30}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis et
                                nisl eget vehicula.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Section */}
            <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 max-w-6xl mx-auto px-4">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet
                        sagittis nibh. Pellentesque fermentum ornare quam, in tempus eros. Ut condimentum,
                        mauris blandit tristique tincidunt, magna dui efficitur libero, eu porta odio
                        diam ac purus.
                    </p>
                </div>
            </section>

        </main>
    )
}
