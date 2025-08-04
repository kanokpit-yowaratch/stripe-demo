import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
			<div className="bg-white p-8 rounded-lg shadow-md text-center">
				<CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
				<h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
				<p className="text-gray-600 mb-4">Thank you for your purchase.</p>
				<Link href="/" className="text-blue-500 hover:underline">
					Back to Home
				</Link>
			</div>
		</div>
	);
}
