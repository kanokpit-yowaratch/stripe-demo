import Link from 'next/link';
import NextImage from 'next/image';

export default function SettingUpStripe() {
	return (
		<div>
			<div className="min-h-screen bg-gray-100 py-12">
				<div className="container mx-auto px-4 sm:px-8 md:px-36">
					<h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Setting up Stripe</h1>
					<Link href="/" className="text-blue-500 hover:underline">
						กลับหน้าหลัก
					</Link>
					<div className="grid grid-cols-1">
						<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-3">
								<span>Public key & Secret key &rarr;</span>
								<Link
									href="https://dashboard.stripe.com/apikeys"
									target="_BLANK"
									className="text-blue-500 hover:none">
									Stripe API Keys
								</Link>
							</h2>
							<ul className="text-gray-600 mb-4">
								<li>- ถ้าต้องการใช้งานโหมดทดสอบ ให้เอาตัวที่อยู่ในโหมดทดสอบ</li>
								<li>- แต่ถ้าต้องการใช้งานจริง ก็เอาคีย์ หลังจากที่เปิดโหมดใช้งานจริงมา</li>
							</ul>
							<div>
								<h4 className="mb-2">หน้าตาของคีย์ที่อยู่ในโหมดทดสอบ</h4>
								<NextImage
									src={`/images/key-test-mode.png`}
									style={{ objectFit: 'contain' }}
									width={400}
									height={350}
									alt={'key test mode'}
								/>
							</div>
							<div className="mt-4">
								<h4 className="mb-2">หน้าตาของคีย์ที่อยู่ในโหมดใช้งานจริง</h4>
								<NextImage
									src={`/images/key-live-mode.png`}
									style={{ objectFit: 'contain' }}
									width={400}
									height={350}
									alt={'key live mode'}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
