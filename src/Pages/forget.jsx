import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import bg from '../assets/bg.jpeg';
import logoImg from '../assets/logo.png';
import { forgotPassword, clearPasswordMessages } from '../store/slices/authSlice';
import {
  selectForgotPasswordLoading,
  selectForgotPasswordMessage,
  selectForgotPasswordError,
  selectForgotPasswordSuccess,
} from '../store/selectors/authSelectors';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const loading = useSelector(selectForgotPasswordLoading);
  const message = useSelector(selectForgotPasswordMessage);
  const error = useSelector(selectForgotPasswordError);
  const success = useSelector(selectForgotPasswordSuccess);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) validateEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) return;

    dispatch(forgotPassword(email));
  };

  // Auto-redirect on success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/userlogin');
        dispatch(clearPasswordMessages());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate, dispatch]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[500px] bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 p-8 md:p-12 text-center">
        <div className="flex justify-center mb-8">
          <img src={logoImg} alt="Logo" className="w-40 h-auto" />
        </div>

        <h2 className="text-3xl font-black text-[#2F357D] mb-2 tracking-tight">
          Forgot Password?
        </h2>
        <p className="text-[#2F357D] text-sm mb-7 leading-relaxed">
          No problem! Enter your email below and we will send you an official link to reset
          your password.
        </p>

        {message && (
          <div className="bg-green-100 border border-green-200 text-green-700 p-3 rounded-lg mb-4 text-sm font-medium">
            {message}
            <p className="text-xs mt-2">Redirecting to login in 5 seconds...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-200 text-red-700 p-3 rounded-lg mb-4 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#2F357D] ml-1 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
              disabled={loading || success}
              className={`w-full px-4 py-3 rounded-xl bg-white/60 border shadow-sm focus:ring-2 outline-none text-sm transition-all ${
                emailError
                  ? 'border-red-300 focus:ring-red-400'
                  : 'border-gray-100 focus:ring-blue-400'
              }`}
            />
            {emailError && <p className="text-xs text-red-600 mt-1">{emailError}</p>}
          </div>

          <button
            type="submit"
            disabled={loading || success || !email}
            className="w-full py-4 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 "
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⚙️</span> Processing...
              </span>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={() => {
              navigate('/userlogin');
              dispatch(clearPasswordMessages());
            }}
            disabled={loading}
            className="text-[#2F357D] text-xs font-bold uppercase tracking-widest hover:underline disabled:opacity-50"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;