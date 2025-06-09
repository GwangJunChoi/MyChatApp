import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { auth } from './config';

export const sendLoginLink = async (email: string, actionCodeSettings: { url: string; handleCodeInApp: boolean }): Promise<void> => {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
};

export const checkEmailLink = (url: string): boolean => {
  return isSignInWithEmailLink(auth, url);
};

export const signInWithEmail = async (email: string, url: string): Promise<User> => {
  const result = await signInWithEmailLink(auth, email, url);
  return result.user;
};

export const signOut = async (): Promise<void> => {
  await firebaseSignOut(auth);
};

export type { User };