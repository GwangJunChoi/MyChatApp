import { Firestore } from 'firebase/firestore';

export const getFirestore = jest.fn((): Firestore => ({} as Firestore));