"use client";

import { useState } from "react";
import {toast} from "react-toastify";
// import { toast } from "react-hot-toast";

export default function PropertyValuationForm() {
    const [formData, setFormData] = useState({
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
        zipCode: "",
        city: "",
        bedrooms: "",
        budget: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formBody = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
                formBody.append(key, value);
            });

            const res = await fetch("https://formsubmit.co/ajax/${process.env.EMAIL_ID}", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody.toString(),
            });

            if (res.ok) {
                toast.success("Property request sent successfully!");
                setFormData({
                    salutation: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    type: "",
                    zipCode: "",
                    city: "",
                    bedrooms: "",
                    bathrooms: "",
                    budget: "",
                });
            } else {
                toast.error("Failed to send your request. Please try again!");
            }
        } catch (error) {
            toast.error("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm"
        >
            <h2 className="text-xl flex-start font-semibold mb-4 font-[Prata]">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select
                    name="salutation"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                    value={formData.salutation}
                    required
                >
                    <option value="">Select</option>
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="ms">Ms</option>
                </select>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 col-span-1 md:col-span-2"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                />
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-6 font-[Prata]">Property Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select
                    name="type"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                    value={formData.type}
                    required
                >
                    <option value="">Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                </select>
                <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                />
                <input
                    type="number"
                    name="bedrooms"
                    placeholder="N. of bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                />
                <input
                    type="number"
                    name="bathrooms"
                    placeholder="N. of bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                />
                <input
                    type="text"
                    name="budget"
                    placeholder="Your budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-6 bg-[#5B8B8B] text-white font-medium py-3 rounded-md hover:opacity-90 flex justify-center items-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
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
                ) : null}
                {isLoading ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
