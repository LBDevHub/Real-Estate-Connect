import {FaSignInAlt} from 'react-icons/fa';

export default function SignIn() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center">
    <div className="flex items-center mb-4">
        <h1 className="text-red-700 font-extrabold text-center mr-2">SIGN IN PAGE</h1>
        <FaSignInAlt className="text-slate-700" />
    </div>
    <div className=" shadow-md rounded-lg p-6 max-w-md mx-auto" style={{ backgroundColor: '#2A2D34', color: '#fff' }}>
        <h2 className="text-white text-center">
          ON WEB DATABASE. <br/> This page ask cutomer to login <br/> with their credentials
        </h2>
      </div>
</div>

  );
}
