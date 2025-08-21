import Image from 'next/image';

export default function ContactSlider() {
    return (
        <section className="relative h-[400px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
                src="https://demo09.houzez.co/wp-content/uploads/revslider/50.jpg" // Use actual image path from /public
                alt="Contact"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-5xl font-serif">Contact Us</h1>
                <p className="mt-2 text-lg uppercase">Bay Shop 18, Ground floor, Motia Guildford Square
                    Airport Road, Zirakpur</p>
            </div>
        </section>
    );
}
