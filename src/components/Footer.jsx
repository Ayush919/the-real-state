import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Site</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Houzez is a premium WordPress theme for real estate where modern
                        aesthetics are combined with tasteful simplicity.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                        <li>📍 774 NE 84th St Miami, FL 33879</li>
                        <li>
                            📧{" "}
                            <a
                                href="mailto:email@email.com"
                                className="text-[#5B8B8B] hover:underline"
                            >
                                email@email.com
                            </a>
                        </li>
                        <li>
                            <Link
                                href="http://localhost:3000/contact"
                                className="text-[#5B8B8B] hover:underline"
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Socials Right Side */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: "Facebook", href: "https://facebook.com/Favethemes" },
                            { label: "Twitter", href: "https://twitter.com/favethemes" },
                            { label: "Instagram", href: "https://instagram.com" },
                            { label: "Linkedin", href: "https://linkedin.com" },
                            { label: "Youtube", href: "#" },
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
