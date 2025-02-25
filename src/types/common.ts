export type ShippingAddress = {
	fullName: string;
	address: string;
	phone: string;
	email: string;
};

export type ShippingAddressError = ShippingAddress & any;

export const intitialShippingAddress = {
	fullName: '',
	address: '',
	phone: '',
	email: '',
};

export const intitialShippingAddressError = {};
