import React from 'react';
import Link from 'next/link';

function AllUIPages() {
	return (
		<div className="min-h-screen bg-gray-100 py-12">
			<div className="container mx-auto px-4 sm:px-8 md:px-36">
				<h1 className="text-4xl font-bold text-gray-800 text-center mb-8">All UI Pages</h1>
				<Link href="/" className="text-blue-500 hover:underline">
					กลับหน้าหลัก
				</Link>
				<div className="grid grid-cols-1">
					<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
						<div className="text-md font-semibold text-gray-800 mb-1">
							โดยพื้นฐานจะมีหน้า UI ที่จำเป็นอยู่ 3 หน้า ประกอบด้วย
						</div>
						<ol className="list-decimal list-inside pl-4 mb-3">
							<li>หน้า Checkout หรือ Place Order</li>
							<li>หน้า Payment success</li>
							<li>หน้า Payment cancel</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllUIPages;
