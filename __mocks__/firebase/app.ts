import { FirebaseApp } from 'firebase/app';

export const initializeApp = jest.fn((): FirebaseApp => ({} as FirebaseApp));
export const getApps = jest.fn((): FirebaseApp[] => []);
export const getApp = jest.fn((): FirebaseApp => ({} as FirebaseApp));