import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className="min-h-screen bg-gray-100 py-12">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
						Integrating Stripe in Next.js
					</h1>

					<p className="text-lg text-gray-700 text-center mb-10">
						Learn how to seamlessly integrate Stripe for payments in your Next.js application.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Topic 1: Setting up Stripe */}
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Setting up Stripe
							</h2>
							<p className="text-gray-600 mb-4">
								Learn how to create a Stripe account, get your API keys, and install the Stripe SDK.
							</p>
							<Link href="/checkout" className="text-blue-500 hover:underline">
								Start with Configuration &rarr;
							</Link>
						</div>

						{/* Topic 2: Creating a Checkout Session */}
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Creating a Checkout Session
							</h2>
							<p className="text-gray-600 mb-4">
								Guide on creating a checkout session using Stripe API in Next.js API Routes.
							</p>
							{/* <Link href="/checkout" className="text-blue-500 hover:underline">
								Create Checkout Session &rarr;
							</Link> */}
						</div>

						{/* Topic 3: Handling Payment Success and Failure */}
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Handling Payment Success/Failure
							</h2>
							<p className="text-gray-600 mb-4">
								Implementing success and cancel pages to manage payment outcomes.
							</p>
							{/* <Link href="/checkout" className="text-blue-500 hover:underline">
								Handle Result &rarr;
							</Link> */}
						</div>

						{/* Topic 4: Building the Checkout UI */}
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Building the Checkout UI
							</h2>
							<p className="text-gray-600 mb-4">
								Implement a good UI for user to complete information and order summary.
							</p>
							{/* <Link href="/checkout" className="text-blue-500 hover:underline">
								Checkout UI &rarr;
							</Link> */}
						</div>

						{/* Topic 5: Using next.js api routes */}
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Using next.js api routes
							</h2>
							<p className="text-gray-600 mb-4">
								Learn to create and use next.js api routes for stripe integration.
							</p>
							{/* <Link href="/checkout" className="text-blue-500 hover:underline">
								API Route &rarr;
							</Link> */}
						</div>

						{/* Topic 6: Displaying Order Summary */}
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Displaying Order Summary
							</h2>
							<p className="text-gray-600 mb-4">
								Show the user Order summary, total amount in a good UI.
							</p>
							{/* <Link href="/checkout" className="text-blue-500 hover:underline">
								Order summary &rarr;
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
