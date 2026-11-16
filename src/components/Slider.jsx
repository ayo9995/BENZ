import Carousel from 'react-bootstrap/Carousel';
 

import Benz1 from "../assets/slider/Benz1.jpg"
import Benz2 from "../assets/slider/Benz2.png"
import Benz3 from "../assets/slider/Benz3.jpg"
import Benz4 from "../assets/slider/Benz4.jpg"
import Benz5 from "../assets/slider/Benz5.jpg"
import Benz6 from "../assets/slider/Benz6.jpg"
import Benz7 from "../assets/slider/Benz7.webp"
import Benz8 from "../assets/slider/Benz8.jpg"



function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Benz1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Benz2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Benz3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Benz4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Benz5} alt="" />
      </Carousel.Item>
       <Carousel.Item>
        <img src={Benz6} alt="" />
      </Carousel.Item>
       <Carousel.Item>
        <img src={Benz7} alt="" />
      </Carousel.Item>
       <Carousel.Item>
      <img src={Benz8} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;