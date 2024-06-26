import { FaSearch, FaSignInAlt, FaPhone, FaInfoCircle, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <nav className='shadow-md gap-7' style={{ backgroundColor: '#2A2D34', color: '#D4AF37' }}>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-700' style={{ color: '#FFFFFF' }}>RealEstate</span>
            <span className='text-slate-900' style={{ color: '#D4AF37' }}>Connect</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-1 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline hover:underline hover:decoration-white hover:text-white' style={{ color: '#D4AF37' }}>
              <div className="flex items-center gap-2">
                Home<FaHome /> 
              </div>
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline hover:underline hover:decoration-white hover:text-white' style={{ color: '#D4AF37' }}>
              <div className="flex items-center gap-1.5">
                About Us<FaInfoCircle /> 
              </div>
            </li>
          </Link>
          <Link to='/contact'>
            <li className='sm:inline hover:underline hover:decoration-white hover:text-white' style={{ color: '#D4AF37' }}>
              <div className="flex items-center gap-1.5">
                Contact<FaPhone />
              </div>
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img 
                className='rounded-full h-7 w-7 mr-4 object-cover' 
                src={currentUser.avatar} 
                alt='profile' 
                onError={(e) => { e.target.src = 'default-avatar-url'; }} // Fallback for broken image links
              />
            ) : (
              <li className='hover:underline hover:decoration-white hover:text-white' style={{ color: '#D4AF37' }}>
                <div className="flex items-center gap-1.5">
                  Sign In<FaSignInAlt />
                </div>
              </li>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
}
