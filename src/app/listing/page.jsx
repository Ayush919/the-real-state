"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const ListingPage = () => {
    const router = useRouter();
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Loading state


    useEffect(() => {
        const dataString = localStorage.getItem("properties");
        let data;
        try {
            data = JSON.parse(dataString);
        } catch (e) {
            data = [];
        }

        if (Object.keys(data).length > 0) {
            router.push(`/listing/${data._id}`);
        } else {
            setIsEmpty(true);
        }
    }, [router]);
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <svg
                        className="animate-spin h-8 w-8 text-[#5B8B8B]-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                    <p className="text-gray-500 text-sm">Loading...</p>
                </div>
            </div>
        );
    }

    if (isEmpty) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600 text-lg font-semibold">No property listed yet</p>
            </div>
        );
    }

    return null;
};

export default ListingPage;
