import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import bg from '../assets/bg.jpeg';
import logoImg from '../assets/logo.png';
import { resetPassword, clearPasswordMessages } from '../store/slices/authSlice';
import {
  selectResetPasswordLoading,
  selectResetPasswordMessage,
  selectResetPasswordError,
  selectResetPasswordSuccess,
} from '../store/selectors/authSelectors';

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');

  const loading = useSelector(selectResetPasswordLoading);
  const message = useSelector(selectResetPasswordMessage);
  const error = useSelector(selectResetPasswordError);
  const success = useSelector(selectResetPasswordSuccess);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState({});

  const validatePasswords = () => {
    const errors = {};

    if (!newPassword) {
      errors.newPassword = 'Password is required';
    } else if (newPassword.length < 6) {
      errors.newPassword = 'Password must be at least 6 characters';
    } else if (!/(?=.*[A-Z])/.test(newPassword)) {
      errors.newPassword = 'Password must contain at least one uppercase letter';
    } else if (!/(?=.*[a-z])/.test(newPassword)) {
      errors.newPassword = 'Password must contain at least one lowercase letter';
    } else if (!/(?=.*\d)/.test(newPassword)) {
      errors.newPassword = 'Password must contain at least one number';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setPasswordErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePasswords()) return;

    dispatch(resetPassword({ oobCode, newPassword }));
  };

  // Auto-redirect on success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/userlogin');
        dispatch(clearPasswordMessages());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate, dispatch]);

  // Check if link is invalid
  if (!oobCode) {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[40px] text-center shadow-2xl border border-white/80 max-w-[500px]">
          <div className="flex justify-center mb-6">
            <img src={logoImg} alt="Logo" className="w-32 h-auto" />
          </div>
          <h2 className="text-2xl font-black text-[#2F357D] mb-4">Invalid Link</h2>
          <p className="text-[#2F357D] mb-6 text-sm">
            This password reset link is invalid or expired.
          </p>
          <button
            onClick={() => navigate('/forget')}
            className="py-3 px-6 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
          >
            Get New Link
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[500px] bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 p-8 md:p-12">
        <div className="flex justify-center mb-8">
          <img src={logoImg} alt="Logo" className="w-40 h-auto" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-black text-[#2F357D] mb-2 tracking-tight">
            Reset Password
          </h2>
          <p className="text-[#2F357D] text-sm mb-8">
            Set a strong password to secure your account.
          </p>
        </div>

        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm font-medium border border-green-200">
            {message}
            <p className="text-xs mt-2">Redirecting to login...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm font-medium border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#2F357D] ml-1 uppercase tracking-wider">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onBlur={validatePasswords}
                disabled={loading || success}
                className={`w-full px-4 py-3 rounded-xl bg-white/60 border shadow-sm focus:ring-2 outline-none text-sm transition-all pr-10 ${
                  passwordErrors.newPassword
                    ? 'border-red-300 focus:ring-red-400'
                    : 'border-gray-100 focus:ring-blue-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
  {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
              </button>
            </div>
            {passwordErrors.newPassword && (
              <p className="text-xs text-red-600 mt-1">{passwordErrors.newPassword}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#2F357D] ml-1 uppercase tracking-wider">
              Confirm Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validatePasswords}
              disabled={loading || success}
              className={`w-full px-4 py-3 rounded-xl bg-white/60 border shadow-sm focus:ring-2 outline-none text-sm transition-all ${
                passwordErrors.confirmPassword
                  ? 'border-red-300 focus:ring-red-400'
                  : 'border-gray-100 focus:ring-blue-400'
              }`}
            />
            {passwordErrors.confirmPassword && (
              <p className="text-xs text-red-600 mt-1">{passwordErrors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || success || !newPassword || !confirmPassword}
            className="w-full py-4 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-6"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⚙️</span> Resetting...
              </span>
            ) : (
              'Update Password'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;