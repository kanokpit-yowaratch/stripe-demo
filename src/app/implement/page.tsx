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
						<div className="text-md font-semibold text-gray-800 mb-1">
							เริ่มต้นด้วยการสร้าง Session ที่ฝั่ง API ก่อนเพื่อรองรับการทำงานในขั้นตอนต่างๆ โดยใน Session
							ประกอบด้วย
						</div>
						<ol className="list-decimal list-inside pl-4 mb-3">
							<li>
								payment_method_types คือ ประเภทของการชำระเงิน ตรงนี้หากไม่ได้กำหนด จะมี payment method
								ให้เลือกในหน้า UI
							</li>
							<li>line_items คือ รายละเอียดของออเดอร์ เช่น สินค้า จำนวน ราคารวม</li>
							<li>mode คือ ประเภทของ session เช่น payment</li>
							<li>success_url คือ link ของหน้า UI สำหรับการจ่ายเงินสำเร็จ</li>
							<li>cancel_url คือ link ของหน้า UI เมื่อผู้ใช้มีการยกเลิก</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Implementation;
