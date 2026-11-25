import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import NowShowingpage from './pages/NowShowingpage'
import ComingSoonpage from './pages/ComingSoonpage'
import AboutUs from './pages/AboutUs'
import AllVehicles from './pages/AllVehicles'
import Booking from './pages/Booking'
import BookNow from './pages/BookNow'
import BuildYourOwn from './pages/BuildYourOwn'
import Careers from './pages/Careers'
import CertifiedPreOwned from './pages/CertifiedPreOwned'
import ContactUs from './pages/ContactUs'
import CoupesConvertibles from './pages/CoupesConvertibles'
import CurrentOffers from './pages/CurrentOffers'
import ElectricVehicles from './pages/ElectricVehicles'
import FinanceLease from './pages/FinanceLease'
import FindaDealer from './pages/FindaDealer'
import Maintenance from './pages/Maintenance'
import MercedesAMG from './pages/MercedesAMG'
import MercedesMaybach from './pages/MercedesMaybach'
import Movies from './pages/Movies'
import OurStory from './pages/OurStory'
import OwnerSupport from './pages/OwnerSupport'
import PressMedia from './pages/PressMedia'
import Sedans from './pages/Sedans'
import ServiceParts from './pages/ServiceParts'
import SUVsWagons from './pages/SUVsWagons'
import Warranty from './pages/Warranty'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
<Route  path='/' element={<Home />} />
<Route  path='/nowshowing' element={<NowShowingpage />} />
<Route  path='/comingsoon' element={<ComingSoonpage/>} />
<Route  path='/aboutus' element={<AboutUs/>} />
<Route  path='/allvehicles' element={<AllVehicles/>} />
<Route  path='/booking' element={<Booking/>} />
<Route  path='/booknow' element={<BookNow/>} />
<Route  path='/Buildyourown' element={<BuildYourOwn/>} />
<Route  path='/careers' element={<Careers/>} />
<Route  path='/certifiedpreowned' element={<CertifiedPreOwned/>} />
<Route  path='/contactus' element={<ContactUs/>} />
<Route  path='/coupesconvertibles' element={<CoupesConvertibles/>} />
<Route  path='/currentoffers' element={<CurrentOffers/>} />
<Route  path='/electricvehicles' element={<ElectricVehicles/>} />
<Route  path='/financelease' element={<FinanceLease/>} />
<Route  path='/findadealer' element={<FindaDealer/>} />
<Route  path='/maintenance' element={<Maintenance/>} />
<Route  path='/mercedesamg' element={<MercedesAMG/>} />
<Route  path='/mercedesMaybach' element={<MercedesMaybach/>} />
<Route  path='/movies' element={<Movies/>} />
<Route  path='/ourstory' element={<OurStory/>} />
<Route  path='/ownersupport' element={<OwnerSupport/>} />
<Route  path='/pressmedia' element={<PressMedia/>} />
<Route  path='/sedans' element={<Sedans/>} />
<Route  path='/serviceparts' element={<ServiceParts/>} />
<Route  path='/suvswagons' element={<SUVsWagons/>} />
<Route  path='/warranty' element={<Warranty/>} />



    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
