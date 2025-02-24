'use client';

import { useState, useEffect } from "react";
import { ShoppingBag, MapPin, Mail, Phone } from 'lucide-react';
import { intitialShippingAddress, ShippingAddress } from "@/types/common";

const CheckoutDetails = () => {
    const [formData, setFormData] = useState<ShippingAddress>(intitialShippingAddress);
    const [errors, setErrors] = useState<ShippingAddress>(intitialShippingAddress);
    const [isFormValid, setIsFormValid] = useState(false);

    const cartItems = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            price: 199.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        }
    ];

    const validateForm = () => {
        const newErrors: ShippingAddress = { fullName: 'null', address: '', email: '', phone: '' };
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const isValid = validateForm();
        setIsFormValid(isValid);
    }, [formData]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev: ShippingAddress) => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const shipping = 10.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted", formData);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Address Details Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <MapPin className="mr-2" /> Shipping Address
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                                <input
                                    type="text"
                                    name="streetAddress"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.address ? 'border-red-500' : ''}`}
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <ShoppingBag className="mr-2" /> Order Summary
                        </h2>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                        onError={(e: any) => {
                                            e.target.src = "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07";
                                        }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                                        <p className="font-medium">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="space-y-2">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold pt-4 border-t">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full py-3 px-4 text-white rounded-md transition-colors ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                            >
                                Continue to Shipping
                            </button>

                            <button
                                type="button"
                                className="w-full mt-2 py-3 px-4 text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                            >
                                Edit Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDetails;