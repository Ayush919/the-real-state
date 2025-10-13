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
            console.log("NEXT_PUBLIC_EMAIL_ID :: ",process.env.NEXT_PUBLIC_EMAIL_ID)

            const res = await fetch(`https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_EMAIL_ID}`, {
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
                        Bay Shop 18, Ground floor, Motia Guildford Square<br/>
                        Airport Road, Zirakpur
                    </p>

                    <div className="mb-6">
                        <p className="text-lg font-semibold">Mr. Deepak Sethi</p>
                        <p className="text-base">79885 00047</p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold">Mr. Jatin Dua</p>
                        <p className="text-base">96468 33095</p>
                    </div>
                    <div className="mt-6">
                        <a
                            href="https://maps.app.goo.gl/4YgtmSa2ZTv6VPbq7?g_st=ipc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.149574234781!2d76.83335797519752!3d30.644047474614568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febf78f68f557%3A0x3e05e44c7b42e14f!2sMotia%20Guildford%20Square%2C%20Zirakpur!5e0!3m2!1sen!2sin!4v1724259255123!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{border: 0, pointerEvents: "none"}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow"
                            ></iframe>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
