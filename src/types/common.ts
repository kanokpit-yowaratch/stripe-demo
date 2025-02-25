export type ShippingAddress = {
	fullName: string;
	address: string;
	phone: string;
};

export type ShippingAddressError = ShippingAddress & any;

export const intitialShippingAddress = {
	fullName: '',
	address: '',
	phone: '',
};

export const intitialShippingAddressError = {};
