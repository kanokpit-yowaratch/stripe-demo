export type ShippingAddress = {
	fullName: string;
	address: string;
	phone: string;
};

export type ShippingAddressError = {
	fullName?: string;
	address?: string;
	phone?: string;
};

export const intitialShippingAddress = {
	fullName: '',
	address: '',
	phone: '',
};

export const intitialShippingAddressError = {};

export type TargetType = EventTarget & {
	name: string;
	value: string;
};
