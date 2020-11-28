export interface User {
	id: number;
	lastName: string;
	firstName: string;
	email: string;
	password: string;
	address: string;
	zipcode: string;
	country: string;
	createdAt?: Date;
}