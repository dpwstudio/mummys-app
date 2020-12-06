export interface Order {
	id?: number;
	clientName: string;
	localization: string;
	total: number;
	carts: string;
	status: string;
	createdAt?: Date;
	userId: number;
}