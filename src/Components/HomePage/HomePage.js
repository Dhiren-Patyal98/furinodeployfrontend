import React from "react";

import Banner from "./Banner.js";

import BannerTwo from "./BannerrTwo.js";
import BannerFive from "./BannerFive.js";
import BannerProducts from "./BannerProducts.js";
import BannerFour from "./BannerFour.js";

export default function HomePage() {
  return (
    <div>
      
      <Banner/>
      <BannerTwo/>
      <BannerProducts/>
      <BannerFour/>
      <BannerFive/>
      
    </div>
  );
}
