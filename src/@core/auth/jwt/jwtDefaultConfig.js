// ** Auth Endpoints
export default {
  authBaseURL: import.meta.env.VITE_AUTH_BASE_URL,
  apiBaseURL: import.meta.env.VITE_API_BASE_URL,
  loginEndpoint: '/Auth/login',
  registerEndpoint: '/Auth/register',
  refreshEndpoint: '/Auth/refresh-token',
  logoutEndpoint: '/jwt/logout',
  forgotPasswordEndPoint: '/Users/ForgotPassword',
  changePasswordEndPoint: '/Users/ChangePassword',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
  storageUserData: 'userData'
}
