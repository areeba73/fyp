// Forgot Password Selectors
export const selectForgotPasswordLoading = (state) => state.auth.forgotPassword.loading;
export const selectForgotPasswordMessage = (state) => state.auth.forgotPassword.message;
export const selectForgotPasswordError = (state) => state.auth.forgotPassword.error;
export const selectForgotPasswordSuccess = (state) => state.auth.forgotPassword.success;

// Reset Password Selectors
export const selectResetPasswordLoading = (state) => state.auth.resetPassword.loading;
export const selectResetPasswordMessage = (state) => state.auth.resetPassword.message;
export const selectResetPasswordError = (state) => state.auth.resetPassword.error;
export const selectResetPasswordSuccess = (state) => state.auth.resetPassword.success;

// General Auth Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserRole = (state) => state.auth.role;
export const selectUser = (state) => state.auth.user;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;