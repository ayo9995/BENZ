import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import NowShowingpage from './pages/NowShowingpage'
import ComingSoonPage from './pages/ComingSoonPage'

import Cinemas from './pages/Cinemas'
import Showtimes from './pages/Showtimes'
import MyAccount from './pages/MyAccount'
import Login from './pages/Login'
import HelpCenter from './pages/HelpCenter'
import FAQs from './pages/FAQs'
import ContactUs from './pages/ContactUs'
import BookTickets from './pages/BookTickets'
import Bookings from './pages/Bookings'
import BookingAssistance from './pages/BookingAssistance'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
<Route  path='/' element={<Home />} />
<Route  path='/nowshowing' element={< NowShowingpage />} />
<Route  path='/comingsoon' element={<ComingSoonPage/>} />
<Route  path='/cinemas' element={<Cinemas/>} />
<Route  path='/showtimes' element={<Showtimes/>} />
<Route  path='/myaccount' element={<MyAccount/>} />
<Route  path='/login' element={<Login/>} />
<Route  path='/helpcenter' element={<HelpCenter/>} />
<Route  path='/faqs' element={<FAQs/>} />
<Route  path='/contactus' element={<ContactUs/>} />
<Route  path='/booktickets' element={<BookTickets/>} />
<Route  path='/bookings' element={<Bookings/>} />
<Route  path='/bookingassistance' element={<BookingAssistance/>} />
<Route  path='/aboutus' element={<AboutUs/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
