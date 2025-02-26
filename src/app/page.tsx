import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className="min-h-screen bg-gray-100 py-12">
				<div className="container mx-auto px-4 md:px-12 lg:px-36">
					<h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Integrating Stripe in Next.js</h1>

					<p className="text-lg text-gray-700 text-center mb-4">
						Learn how to seamlessly integrate Stripe for payments in your Next.js application.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
						<div className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">1. Setting up Stripe</h2>
							<p className="text-gray-600 mb-6">
								<span className="font-semibold">ต้องเตรียมอะไรบ้าง? </span>Learn how to create a Stripe
								account, get your API keys, and install the Stripe SDK.
							</p>
							<Link
								href="/setting-up-stripe"
								className="absolute inset-x-0 left-6 bottom-3 text-blue-500 hover:underline">
								Start with Configuration &rarr;
							</Link>
						</div>

						<div className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">2. Creating a Checkout Session</h2>
							<p className="text-gray-600 mb-6">
								<span className="font-semibold">ใช้งานที่ไหน ยังไง? </span>Guide on creating a checkout
								session using Stripe API in Next.js API Routes.
							</p>
							<Link
								href="/implement"
								className="absolute inset-x-0 left-6 bottom-3 text-blue-500 hover:underline">
								Where is Stripe used in apps? &rarr;
							</Link>
						</div>

						<div className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">3. Checkout and Redirect page</h2>
							<p className="text-gray-600 mb-6">
								<span className="font-semibold">ต้องสร้างทั้งหมดกี่หน้า มีอะไรบ้าง? </span>Guide to send order
								and redirect
							</p>
							<Link
								href="/all-ui-pages"
								className="absolute inset-x-0 left-6 bottom-3 text-blue-500 hover:underline">
								All UI pages &rarr;
							</Link>
						</div>
					</div>

					<Link href={`/checkout`} className="text-blue-500 hover:none">
						Checkout
					</Link>
				</div>
			</div>
		</div>
	);
}
