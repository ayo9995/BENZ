
import { useState } from "react";
import Slider from "../components/Slider";
import NowShowing from "../components/NowShowing";
import ComingSoon from "../components/ComingSoon";

function Home() {
  return (
    <>
      <Slider />
      <NowShowing />
      <ComingSoon />
    </>
  );
}

export default Home;
