import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className="min-h-screen bg-gray-100 py-12">
				<div className="container mx-auto px-4 md:px-12 lg:px-36">
					<h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Integrating Stripe in Next.js</h1>

					<p className="text-lg text-gray-700 text-center mb-10">
						Learn how to seamlessly integrate Stripe for payments in your Next.js application.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">1. Setting up Stripe</h2>
							<p className="text-gray-600 mb-4">
								<span className="font-semibold">ต้องเตรียมอะไรบ้าง? </span>Learn how to create a Stripe
								account, get your API keys, and install the Stripe SDK.
							</p>
							<Link href="/setting-up-stripe" className="text-blue-500 hover:underline">
								Start with Configuration &rarr;
							</Link>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">2. Creating a Checkout Session</h2>
							<p className="text-gray-600 mb-4">
								<span className="font-semibold">ใช้งานที่ไหน ยังไง? </span>Guide on creating a checkout
								session using Stripe API in Next.js API Routes.
							</p>
							<Link href="/implement" className="text-blue-500 hover:underline">
								Where is Stripe used in apps? &rarr;
							</Link>
						</div>

						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								3. Handling Payment Success/Failure
							</h2>
							<p className="text-gray-600 mb-4">
								<span className="font-semibold">หลังจากการทำรายการไปแล้ว ต้องเช็คอะไรบ้าง? </span>Implementing
								success and cancel pages to manage payment outcomes.
							</p>
							<Link href="/handle-result" className="text-blue-500 hover:underline">
								Handle Result &rarr;
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
