import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import NowShowing from "./components/NowShowing";
import ComingSoon from "./components/ComingSoon"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 <Header />
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
      <Footer />
    </>
  );
}

export default App;
