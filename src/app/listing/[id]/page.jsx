import {notFound} from 'next/navigation';
import PropertyHeader from "@/components/Property/PropertyHeader";
import FeaturedProperties from "@/components/Property/featuredProperty";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default async function PropertyPage({params: {id}}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/properties/?id=${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) return notFound();
    const {data: property} = await res.json();


    return (
        <>
            {/* HEADER SECTION */}
            <PropertyHeader property={property}/>

            {/* EXISTING CONTENT */}
            <section className="container mx-auto p-6">
                {/* Labels */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* Uncomment this line if FEATURED logic is needed */}
                    {/* {property.tags?.includes('featured') && ( */}
                    <span className="bg-yellow-700 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                    {/* )} */}
                    <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
            {property.type === 'sale' ? 'FOR SALE' : 'FOR RENT'}
          </span>
                    {property.tags?.includes('hot offer') && (
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">HOT OFFER</span>
                    )}
                </div>

                {/* Description */}
                <section className="my-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Description</h2>
                    <p className="max-w-4xl mx-auto text-center text-gray-700">{property.description}</p>
                </section>

                {/* Details */}
                <section className="my-8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Details</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                        <Detail
                            icon="https://demo09.houzez.co/wp-content/uploads/2016/10/icon-1.png"
                            label="Location"
                            value={property.location}
                        />
                        <Detail
                            icon="https://demo09.houzez.co/wp-content/uploads/2020/02/icon-2.png"
                            label="Bedrooms"
                            value={property.rooms}
                        />
                        <Detail
                            icon="https://demo09.houzez.co/wp-content/uploads/2020/02/icon-3.png"
                            label="Bathrooms"
                            value={property.bathrooms}
                        />
                        <Detail
                            icon="https://demo09.houzez.co/wp-content/uploads/2020/02/icon-4.png"
                            label="Size"
                            value={`${property.size} Sq Ft`}
                        />
                        <Detail
                            icon="https://demo09.houzez.co/wp-content/uploads/2020/02/icon-6.png"
                            label="Garage"
                            value={property?.garage ? `${property.garage} Car` : '1 Car'}
                        />
                    </div>
                </section>

                {/* Gallery */}
                <section className="my-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {property.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Property image ${idx + 1}`}
                                className="w-full h-48 object-cover rounded shadow"
                            />
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="my-12 max-w-12xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Features section */}
                        <div className="flex-1">
                            <div className="mb-4 border-b pb-2">
                                <h2 className="text-2xl font-bold">Features</h2>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-4 gap-3 list-none text-gray-700">
                                {property.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircleIcon sx={{ color: 'grey' }} />

                                        <div className="hover:underline">{feature}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>
            </section>
            {/*<FeaturedProperties/>*/}
        </>
    );
}

function Detail({icon, label, value}) {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src={icon} alt="" width={label === 'Location' ? 35 : 50} height={label === 'Location' ? 30 : 50}/>
            <div className="text-sm text-gray-600">
                <div className="font-semibold">{value}</div>
                <div>{label}</div>
            </div>
        </div>
    );
}
