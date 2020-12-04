export interface Product {
	id: number;
	image?: string;
	imageUri?: string;
	type?: string;
	size?: string;
	name?: string;
	category?: string;
	ingredient?: string;
	description?: string;
	price?: number;
	createdAt?: Date;
}