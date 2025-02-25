import React from 'react';
import Link from 'next/link';

function Implementation() {
	return (
		<div className="min-h-screen bg-gray-100 py-12">
			<div className="container mx-auto px-4 sm:px-8 md:px-36">
				<h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Creating a Checkout Session</h1>
				<Link href="/" className="text-blue-500 hover:underline">
					กลับหน้าหลัก
				</Link>
				<div className="grid grid-cols-1">
					<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
						<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-3">
							1. เริ่มต้นด้วยการสร้าง Session ที่ฝั่ง API ก่อนเพื่อรองรับการทำงานในขั้นตอนต่างๆ
						</h2>
						<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-3">
							2. ส่งข้อมูลออเดอร์ไปยัง API
						</h2>
						<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-3">
							3. การจัดการหลังการชำระเงิน
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Implementation;
