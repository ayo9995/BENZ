import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Slider/>
      <Footer />
    </>
  );
}

export default App;
