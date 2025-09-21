import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Site</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        EZ Grow Infra, with 5 years of trusted experience in real estate, specializes in residential, commercial, and industrial properties.
                        We prioritize transparency, integrity, and customer satisfaction to make your property journey smooth and hassle-free.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                        <li>📍 Bay Shop 18, Ground floor, <br/>
                            Motia Guildford Square, Airport Road, Zirakpur</li>
                        <li>
                            📧{" "}
                            <a
                                href="mailto:email@email.com"
                                className="text-[#5B8B8B] hover:underline"
                            >
                                ezgrowinfra@gmail.com
                            </a>
                        </li>
                        <li>
                            <div
                                className="text-[#5B8B8B] hover:underline"
                            >
                                <span role="img" aria-label="call">📞</span> 79885 00047, 96468 33095
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Socials Right Side */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: "Facebook", href: "https://www.facebook.com/share/1HqCDwgf3X/?mibextid=wwXIfr" },
                            { label: "Instagram", href: "https://www.instagram.com/ezgrowinfra?igsh=MXM1NXJoYmRidW80dw%3D%3D&utm_source=qr" },
                            { label: "Map", href: "https://maps.app.goo.gl/4YgtmSa2ZTv6VPbq7?g_st=ipc" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#5B8B8B] hover:underline"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
                © Houzez - All rights reserved
            </div>
        </footer>
    );
}
