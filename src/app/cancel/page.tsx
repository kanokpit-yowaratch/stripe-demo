import React from 'react';

const CancelPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
			<div className="bg-white p-8 rounded-lg shadow-md text-center">
				<h1 className="text-2xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
				<p className="text-lg text-gray-700">
					Your payment has been cancelled. Please try again later or contact support for assistance.
				</p>
				<a href="/" className="text-blue-500 hover:underline">
					Back to Home
				</a>
			</div>
		</div>
	);
};

export default CancelPage;
