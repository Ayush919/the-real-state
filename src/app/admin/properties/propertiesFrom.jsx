'use client';

import {useEffect, useState} from 'react';
import axios from 'axios';

export default function PropertyForm({fetchProperties, editing, setEditing}) {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        description: '',
        image: '',
    });

    useEffect(() => {
        if (editing) {
            setFormData(editing);
        } else {
            setFormData({
                title: '',
                location: '',
                price: '',
                description: '',
                image: '',
            });
        }
    }, [editing]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await axios.put(`/api/properties?id=${editing._id}`, formData);
            setEditing(null);
        } else {
            await axios.post('/api/properties', formData);
        }
        fetchProperties();
        setFormData({title: '', location: '', price: '', description: '', image: ''});
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="border p-2"
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="border p-2"
                required
            />
            <input
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="border p-2"
                required
            />
            <input
                type="text"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                className="border p-2"
                required
            />
            <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="col-span-2 border p-2"
                required
            />
            <button type="submit" className="col-span-2 bg-green-600 text-white px-4 py-2 rounded">
                {editing ? 'Update Property' : 'Add Property'}
            </button>
        </form>
    );
}
