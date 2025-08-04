'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    const handleLogin = async (e) => {
        setIsLoading(true)
        e.preventDefault();

        const res = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({email, password}),
        });

        if (res.ok) {
            const data = await res.json()
            const token = data.token

            // Save it in localStorage (or cookie)
            localStorage.setItem('token', token)
            router.push('/admin/properties');
        } else {
            const data = await res.json();
            localStorage.removeItem("token");
            setError(data.message || 'Login failed');
        }
        setIsLoading(false)

    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
             style={{backgroundImage: "url(https://demo09.houzez.co/wp-content/uploads/revslider/27.jpg)"}}>
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex justify-center w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
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
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
