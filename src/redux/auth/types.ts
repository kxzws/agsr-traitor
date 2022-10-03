export interface AuthState {
  accessToken: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: Error | null;
}
