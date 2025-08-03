import Image from "next/image";
import Link from "next/link";

const lifestyleData = [
    {
        title: "Equestrian",
        properties: 6,
        image: "/images/44.jpg",
        link: " https://demo09.houzez.co/wp-content/uploads/2016/10/37.jpg",
    },
    {
        title: "Historic",
        properties: 13,
        image: "/images/27.jpg",
        link: "https://demo09.houzez.co/wp-content/uploads/2016/10/27.jpg",
    },
    {
        title: "Waterfront",
        properties: 9,
        image: "/images/shutterstock_471499091.jpg",
        link: "https://demo09.houzez.co/wp-content/uploads/2016/10/22.jpg",
    },
];

export default function ExclusiveLifestyleSection() {
    return (
        <section className="py-10 animate-fadeIn">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8 font-[Prata]">
                    Exclusive Life Style
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {lifestyleData.map((item, index) => (
                        <Link href={"#"} key={index}>
                            <div
                                className="relative h-80 md:h-96 w-full bg-cover bg-center rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
                                style={{ backgroundImage: `url(${item.link})` }}
                            >
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                                    <h3 className="text-xl font-bold font-[lato]">{item.title}</h3>
                                    {/*<p className="text-sm">{item.properties} Properties</p>*/}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
