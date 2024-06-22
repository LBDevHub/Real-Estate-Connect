import  { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const countries = [
    { code: '+244', name: 'Angola' },
    { code: '+267', name: 'Botswana' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+257', name: 'Burundi' },
    { code: '+237', name: 'Cameroon' },
    { code: '+238', name: 'Cape Verde' },
    { code: '+236', name: 'CAF' },
    { code: '+235', name: 'Chad' },
    { code: '+269', name: 'Comoros' },
    { code: '+242', name: 'Congo' },
    { code: '+243', name: 'DR Congo' },
    { code: '+253', name: 'Djibouti' },
    { code: '+20', name: 'Egypt' },
    { code: '+291', name: 'Eritrea' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+230', name: 'Mauritius' },
    { code: '+212', name: 'Morocco' },
    { code: '+258', name: 'Mozambique' },
    { code: '+264', name: 'Namibia' },
    { code: '+227', name: 'Niger' },
    { code: '+234', name: 'Nigeria' },
    { code: '+968', name: 'Oman' },
    { code: '+962', name: 'Jordan' },
    { code: '+254', name: 'Kenya' },
    { code: '+965', name: 'Kuwait' },
    { code: '+266', name: 'Lesotho' },
    { code: '+231', name: 'Liberia' },
    { code: '+218', name: 'Libya' },
    { code: '+261', name: 'Madagascar' },
    { code: '+265', name: 'Malawi' },
    { code: '+223', name: 'Mali' },
    { code: '+222', name: 'Mauritania' },
    { code: '+961', name: 'Lebanon' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+241', name: 'Gabon' },
    { code: '+220', name: 'Gambia' },
    { code: '+233', name: 'Ghana' },
    { code: '+224', name: 'Guinea' },
    { code: '+245', name: 'Guinea-Bissau' },
    { code: '+964', name: 'Iraq' },
    { code: '+972', name: 'Israel' },
    { code: '+974', name: 'Qatar' },
    { code: '+213', name: 'Algeria' },
    { code: '+27', name: 'South Africa' },
    { code: '+211', name: 'South Sudan' },
    { code: '+249', name: 'Sudan' },
    { code: '+268', name: 'Swaziland' },
    { code: '+255', name: 'Tanzania' },
    { code: '+228', name: 'Togo' },
    { code: '+216', name: 'Tunisia' },
    { code: '+256', name: 'Uganda' },
    { code: '+44', name: 'UK' },
    { code: '+971', name: '(UAE)' },
    { code: '+1', name: 'USA' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabwe' }
];

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
      setFormData(
        {
          ...formData,
          [e.target.id]:e.target.value,
        });

      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
        const res = await fetch('/api/auth/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify( formData),
          });
          const data =await res.json();
          console.log(data);
          if(data.success ===false) {
            setLoading(false);
            setError(data.message);
            return;
          }
         
          setLoading(false);
          setError(null);
          navigate('/sign-in');
        } catch (error) {
          setLoading(false);
          setError(error.message);
          
        }
        
         
      };
 

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to right, #293038, #293038)' }}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-4 flex items-center justify-center" style={{ color: '#293038' }}>
            Register <FaUserPlus className="ml-4" />
          </h1>
          <form  onSubmit={handleSubmit}   className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
              id="username"onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
              id="email"onChange={handleChange}
              required
            />
            <div className="flex border rounded-lg overflow-hidden">
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="p-3 border-r bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Phone"
                className="p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
                id="phone"onChange={handleChange}
                required
              />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c69d33]"
              id="password"onChange={handleChange}
              required
            />
            <button disabled={loading} className="bg-[#c69d33] text-white p-3 rounded-lg uppercase hover:bg-[#293038] transition duration-300">
              {loading ? 'Loading....' : 'Register'}
            </button>
          </form>
          <div className='flex flex-col gap-2 mt-5'>
     <div className='flex gap-2'>
         <p className='text-sm'>Existing User ?</p>
          <Link to='/sign-in'>
           <span className='text-blue-900'>Sign In</span>
          </Link>
     </div>
       {error && <p className='text-sm text-red-500'>{error}</p>}
      </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8" style={{ background: 'linear-gradient(to right, #293038, #293038)', color: 'white' }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Delighted to Welcome New Clients!
            </h2>
            <p>
              Ready to get started? Register now!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
