import React from "react";
import image1 from "../Images/sport_and_entertainment/karere.jpg"
import image2 from "../Images/vegetable.jpg"
import image3 from "../Images/karere3.jpg"
import image4 from "../Images/homepage.jpg"
import image5 from "../Images/homepage.jpg"
import image6 from "../Images/status/social.jpg"

export default function Gallery() {
  return (
<div class="row mx-md-5 mx-2">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 p-20 ">
    <img
      src={image1}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={image4}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={image6}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={image3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={image2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={image5}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
  );
}
