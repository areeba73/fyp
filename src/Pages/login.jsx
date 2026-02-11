import React, { useState } from 'react'; 

import './login.css';

const Auth = () => { const [isLogin, setIsLogin] = useState(true);

return (
     <div className="auth-page">
     <div className="auth-container"> <div className="auth-card">
     <h2>{isLogin ? 'Login to EmoTrack' : 'Create Account'}</h2>
     <form className="auth-form">
     {!isLogin && ( <input type="text" placeholder="Full Name" required /> )}
     <input type="email" placeholder="Email Address" required /> 
     <input type="password" placeholder="Password" required />
     <button type="submit" className="btn-auth">
     {isLogin ? 'Login' : 'Sign Up'} </button> </form>
     <p style={{ marginTop: '20px', cursor: 'pointer', color: '#666' }}
     onClick={() => setIsLogin(!isLogin)} >
     {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"} 
     </p>
     </div>
     </div>
     </div> 
     );
  };

export default Auth;