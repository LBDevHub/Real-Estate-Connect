import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign In form submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to right, #293038, #293038)' }}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: '#293038' }}>
            Sign In <FaUserAlt className="ml-4" />
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username or Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
              id="username"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
              id="password"
              required
            />
            <button type="submit" className="bg-[#c69d33] text-white p-3 rounded-lg uppercase hover:bg-[#293038] transition duration-300">
              Sign In
            </button>
          </form>
          <div className='flex gap-2 mt-5'>
            <p>New User ?</p>
            <Link to='/sign-up'>
                <span className='text-blue-900'>Create Account</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8" style={{ background: 'linear-gradient(to right, #293038, #293038)', color: 'white' }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              HAPPY TO SEE YOU AGAIN!
            </h2>
            <p>
            Connecting You to Potential Buyers and Renters—No more hustle.😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
