import { writable } from '@intrnl/velvet/store';


export function generateUUIDv4 () {
	return crypto.randomUUID();
}

export const feedbacks = writable([
	{ id: generateUUIDv4(), message: 'The service is great!', score: 10, date: new Date('2022-08-10T06:57:00Z') },
	{ id: generateUUIDv4(), message: 'The service was okay', score: 6, date: new Date('2022-07-20T13:00:00Z') },
]);
