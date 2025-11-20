import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProperties from "@/components/Property/featuredProperty";
import LuxurySection from "@/components/Luxury/LuxurySection";

export default function Home() {
    return (
        <div className={"mt-18"}>
            <HeroCarousel/>
            <FeaturedProperties/>
            <LuxurySection/>
        </div>
    )
}
