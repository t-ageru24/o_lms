import React from 'react';

function Login() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Login</h2>
      <form className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-3 border rounded-md" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full p-3 border rounded-md" required />
        </div>
        <button type="submit" className="bg-[#44318D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2b246a] transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
