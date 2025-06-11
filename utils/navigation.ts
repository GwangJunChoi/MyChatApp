import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const goToMain = (router: AppRouterInstance): void => {
  router.push('/');
};

export const goToLogin = (router: AppRouterInstance): void => {
  router.push('/auth/login');
};

export const goToChat = (router: AppRouterInstance): void => {
  router.push('/chat');
};

export const goToProfile = (router: AppRouterInstance): void => {
  router.push('/profile');
};