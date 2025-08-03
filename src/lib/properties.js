
export const fetchProperties = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/fetchProperty`, {
            cache: 'no-store', // optional, avoid stale cache
        });

        if (!res.ok) throw new Error('Failed to fetch properties');

        return res.json();
    } catch (err) {
        console.error(err);
        return [];
    }
};
