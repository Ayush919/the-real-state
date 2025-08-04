"use client";

import { useState } from "react";
import {toast} from "react-toastify";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                toast.success("Message sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send message. Please try again!");
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred.");
        }
    };

    return (
        <div className="bg-gray-100 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-7 bg-[#eef2f2] p-8 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Enter First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Enter Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded-md"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                name="message"
                                className="w-full p-3 border border-gray-300 rounded-md"
                                rows={5}
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="md:col-span-5 bg-[#eef2f2] p-10 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-4xl font-serif font-semibold mb-6">Headquarters</h2>
                    <p className="text-lg mb-6">
                        1584 Biscayne Boulevard<br />
                        Miami FL, 33176
                    </p>

                    <div className="mb-6">
                        <p className="text-lg font-semibold">Amy Miller</p>
                        <p className="text-base">Public Relations Manager</p>
                        <p className="text-base">774 NE 84th St Miami, FL 33879</p>
                        <p className="text-base">amy.miller@houzez.com</p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold">Kyle Parker</p>
                        <p className="text-base">Public Relations Associate</p>
                        <p className="text-base">774 NE 84th St Miami, FL 33879</p>
                        <p className="text-base">kyle.parker@houzez.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
