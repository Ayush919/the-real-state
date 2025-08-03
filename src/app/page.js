import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProperties from "@/components/Property/featuredProperty";
import LuxurySection from "@/components/Luxury/LuxurySection";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
    return (
        <>
            <HeroCarousel/>
            <FeaturedProperties/>
            <LuxurySection/>
            <ToastContainer />
        </>
    )
}
