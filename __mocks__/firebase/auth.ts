import { Auth, User } from 'firebase/auth';

const mockAuth: Partial<Auth> = {
  currentUser: null,
  onAuthStateChanged: jest.fn(),
  signOut: jest.fn(),
};

export const getAuth = jest.fn((): Auth => mockAuth as Auth);

export const sendSignInLinkToEmail = jest.fn();
export const isSignInWithEmailLink = jest.fn();
export const signInWithEmailLink = jest.fn();