const links = [
    { label: "Private Brokerage", href: "#" },
    { label: "Business Development", href: "#" },
    { label: "Customer Care", href: "#" },
];

const LinkGridSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="text-[#5B8B8B] hover:underline text-lg font-medium font-[lato]"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
};

export default LinkGridSection;
