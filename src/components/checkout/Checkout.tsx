'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { ShoppingBag, MapPin, Mail, Phone } from 'lucide-react';
import {
	intitialShippingAddress,
	intitialShippingAddressError,
	ShippingAddress,
	ShippingAddressError,
	TargetType,
} from '@/types/common';
import { formatNumber } from '@/utils/common';
import { loadStripe } from '@stripe/stripe-js';
import NextImage from 'next/image';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!).then((stripe) => {
	if (!stripe) {
		throw new Error('Stripe failed to load');
	}
	return stripe;
});

const CheckoutDetails = () => {
	const [formData, setFormData] = useState<ShippingAddress>(intitialShippingAddress);
	const [errors, setErrors] = useState<ShippingAddressError>(intitialShippingAddressError);
	const [isFormValid, setIsFormValid] = useState(false);
	const [loading, setLoading] = useState(false);

	const cartItems = [
		{
			id: 1,
			name: 'Keychron Gaming Keyboard',
			price: 3000.0,
			quantity: 1,
			image: '/images/keyboard.png',
		},
		{
			id: 2,
			name: 'Laptop and tablet stand',
			price: 750.0,
			quantity: 2,
			image: '/images/laptop-and-tablet-stand.png',
		},
	];

	const validateForm = () => {
		const newErrors: ShippingAddressError = {};
		if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
		if (!formData.address.trim()) newErrors.address = 'Address is required';
		if (!/^\+?\d{1,10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	useEffect(() => {
		const isValid = validateForm();
		setIsFormValid(isValid);
	}, [formData]);

	const handleInputChange = (e: ChangeEvent<TargetType>) => {
		const { name, value } = e.target;
		setFormData((prev: ShippingAddress) => ({
			...prev,
			[name]: value,
		}));
	};

	const calculateSubtotal = () => {
		return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
	};

	const subtotal = calculateSubtotal();
	const shipping = 25.0;
	const total = subtotal + shipping;

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		setLoading(true);
		try {
			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items: cartItems }),
			});

			const { sessionId } = await response.json();
			const stripe = await stripePromise;
			await stripe.redirectToCheckout({ sessionId });
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<form onSubmit={handleSubmit}>
				<div className="max-w-7xl mx-auto sm:mx-8 md:mx-12 lg:mx-24">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
							<h2 className="text-2xl font-bold mb-6 flex items-center">
								<MapPin className="mr-2" /> Shipping Address
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
										Full name
									</label>
									<div className="mt-1 relative rounded-md shadow-xs">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<Mail className="text-gray-400" />
										</div>
										<input
											type="text"
											name="fullName"
											value={formData.fullName}
											onChange={handleInputChange}
											className={`pl-10 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-blue-500 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
											placeholder="Enter name"
										/>
									</div>
									{errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
								</div>
								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
										Tel
									</label>
									<div className="mt-1 relative rounded-md shadow-xs">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<Phone className="text-gray-400" />
										</div>
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className={`pl-10 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
											placeholder="Enter phone"
										/>
									</div>
									{errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
								</div>
							</div>
							<div>
								<label htmlFor="address" className="block text-sm font-medium text-gray-700">
									Address
								</label>
								<textarea
									name="address"
									value={formData.address}
									onChange={handleInputChange}
									className={`mt-1 block w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : ''}`}
									placeholder="Enter address"
								/>
								{errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg p-6">
							<h2 className="text-2xl font-bold mb-6 flex items-center">
								<ShoppingBag className="mr-2" /> Order Summary
							</h2>
							<div>
								{cartItems.map((item) => (
									<div key={`${item.id}-${item.name}`} className="flex items-center gap-2 py-1 border-b">
										<NextImage
											src={item.image}
											alt={item.name}
											width={50}
											height={50}
											className="w-8 h-8 object-cover rounded-lg"
										/>
										<div className="flex-1">
											<h3 className="font-medium">{item.name}</h3>
										</div>
										<div>
											<p className="text-gray-500">Quantity: {item.quantity}</p>
										</div>
										<div>
											<p className="font-medium">{formatNumber(item.price)} ฿</p>
										</div>
									</div>
								))}

								<div className="space-y-1 mt-2">
									<div className="flex justify-between text-gray-600">
										<span>Subtotal</span>
										<span>{formatNumber(subtotal)} ฿</span>
									</div>
									<div className="flex justify-between text-gray-600">
										<span>Shipping</span>
										<span>{shipping.toFixed(2)} ฿</span>
									</div>
									<div className="flex justify-between text-xl font-bold pt-4 border-t">
										<span>Total</span>
										<span>{formatNumber(total)} ฿</span>
									</div>
								</div>

								<button
									type="submit"
									disabled={!isFormValid}
									className={`w-full py-2 mt-4 bg-sky-500 px-4 text-white rounded-md transition-colors cursor-pointer ${isFormValid ? 'bg-sky-500 hover:bg-sky-600' : 'bg-gray-400 cursor-not-allowed'}`}>
									{loading ? "Loading..." : "Checkout"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CheckoutDetails;
