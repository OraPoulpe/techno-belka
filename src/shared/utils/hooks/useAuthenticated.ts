import { getAccessToken } from '../getAccessToken';

export const useAuthenticated = (): boolean => {
  const accessToken = getAccessToken();
  return !!accessToken;
};
