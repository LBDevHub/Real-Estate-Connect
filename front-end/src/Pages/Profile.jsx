import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=' p-3  max-w-lg mx-auto '>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col  gap-4'>
        <img
          src={currentUser.avatar}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer  self-center mt-2'
        />
        <input type='text' placeholder='Username' id='username'  className='border p-3 rounded-lg' />
        <input type='email' placeholder='Email' id='email'  className='border p-3 rounded-lg' />
        <input type='password' placeholder='Password' id='password'  className='border p-3 rounded-lg' />
        <button className='bg-slate-800 text-white rounded-lg p-3 uppercase hover:bg-[#333]'>update profile</button>
      </form>
      <div className="flex justify-between mt-5 font-bold">
          <button className="text-red-700 cursor-pointer bg-transparent border border-red-400 rounded-md py-2 px-4 hover:bg-red-700 hover:text-white transition duration-300">Delete Account</button>
          <button className="text-red-700 cursor-pointer bg-transparent border border-red-400 rounded-md py-2 px-4 hover:bg-red-700 hover:text-white transition duration-300">Sign Out</button>
    </div>

    </div>
  );
}
