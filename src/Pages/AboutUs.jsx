import { FaInfoCircle} from 'react-icons/fa';

export default function AboutUs() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center">
    <div className="flex items-center mb-4">
        <h1 className="text-red-700 font-extrabold text-center mr-2">About Page</h1>
        < FaInfoCircle className="text-slate-700" />
    </div>
    <div className="shadow-md rounded-lg p-6 max-w-md mx-auto" style={{ backgroundColor: '#2A2D34', color: '#fff' }}>
  <h2 className="text-white text-center">
    Kojo lb is my name. <br/> I am passionate about design with code, <br/> even though Iam still learning, but I can do wonders. Check my first project below.
  </h2>
  <div className="text-center mt-4">
    <a href="https:/milkywaysolargh.com" className="inline-block px-4 py-2 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors duration-300">
      CHECK HERE
    </a>
  </div>
</div>

</div>

  );
}

