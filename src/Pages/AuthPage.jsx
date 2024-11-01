// src/Pages/AuthPage.js (or wherever your AuthPage is located)
import { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4">
      {isLogin ? (
        <form onSubmit={handleLogin} className=" w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4  text-black">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="text-black w-full px-3 py-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className=" text-black w-full px-3 py-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <p className="mt-4 text-black">
            Dont have an account?{' '}
            <button 
              type="button" 
              onClick={() => setIsLogin(false)} 
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4  text-black">Register</h2>
          <input
            type="text"
            placeholder="Username"
            className="text-black w-full px-3 py-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="text-black w-full px-3 py-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="text-black w-full px-3 py-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">
            Sign Up
          </button> 
          <p className="mt-4  text-black">
            Already have an account?{' '}
            <button 
              type="button" 
              onClick={() => setIsLogin(true)} 
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;