import {BrowserRouter, Routes, Route }from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar/Navbar'

export default function App() {
  return <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
  
}
