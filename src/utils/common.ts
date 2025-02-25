interface FormatNumberOptions {
	style?: 'decimal' | 'currency' | 'percent';
	currency?: string;
	minimumFractionDigits?: number;
	maximumFractionDigits?: number;
	locale?: string;
}

export function formatNumber(value: number, options: FormatNumberOptions = {}) {
	const {
		style = 'decimal', // "decimal", "currency", "percent"
		currency = 'THB', // Default currency
		minimumFractionDigits = 2,
		maximumFractionDigits = 2,
		locale = 'en-US',
	} = options;

	return new Intl.NumberFormat(locale, {
		style,
		currency,
		minimumFractionDigits,
		maximumFractionDigits,
	}).format(value);
}
