import Stripe from 'stripe';
import { NextRequest } from 'next/server';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
	const url = new URL(req.url);
	const origin = url.origin;

	try {
		const { items } = await req.json();

		const lineItems = items.map((item: { name: string; price: number; quantity: number }) => ({
			price_data: {
				currency: 'thb',
				product_data: {
					name: item.name,
				},
				unit_amount: item.price * 100, // Convert to cents
			},
			quantity: item.quantity,
		}));

		const session = await stripe.checkout.sessions.create({
			// payment_method_types: ['card'],
			line_items: lineItems,
			mode: 'payment',
			success_url: `${origin}/success`,
			cancel_url: `${origin}/cancel`,
		});

		return Response.json({ sessionId: session.id });
	} catch (error) {
		if (error instanceof Error) {
			return Response.json({ error: error.message }, { status: 500 });
		} else {
			return Response.json({ error: 'An unknown error occurred' }, { status: 500 });
		}
	}
}
