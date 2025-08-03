// src/components/sections/LuxurySection.tsx
import HeadingSection from "@/components/Luxury/HeadingSection";
import ParagraphSection from "@/components/Luxury/ParagraphSection";
import LinkGridSection from "@/components/Luxury/LinkGridSection";
import ExclusiveLifestyleSection from "@/components/Luxury/ExclusiveLifestyleSection";
import MarketValueSection from "@/components/Luxury/MarketValueSection";
import PropertyValuationForm from "@/components/PropertyValuation/PropertyValuationForm";
//"@/components/Property/featuredProperty"
export default function LuxurySection() {
    return (
        <section className="bg-white py-12">
            <div className="max-w-5xl mx-auto text-center">
                <HeadingSection />
                <ParagraphSection  />
                <LinkGridSection />
                <ExclusiveLifestyleSection/>
                <MarketValueSection/>
                <PropertyValuationForm/>
            </div>
        </section>
    );
}
