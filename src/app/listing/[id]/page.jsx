// app/property/[id]/page.js
import PropertyPageClient from "./PropertyPageClient";
import { notFound } from "next/navigation";

export default async function PropertyPage({ params: { id } }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/properties/?id=${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) return notFound();

    const { data: property } = await res.json();

    return <PropertyPageClient property={property} />;
}
