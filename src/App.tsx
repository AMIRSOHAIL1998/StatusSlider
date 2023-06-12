import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import StatusSlider from "./components/StatusSlider";
import DefaultSliderComponent from "./components/DefaultComponent";
import businessSlide from "./components/slidetypes/Business";
import bankerSlide from "./components/slidetypes/Banker";

const App = () => {
  const defaultSlideListItems = [
    "https://cdn.statusqueen.com/imagestatus/thumbnail/image_status-270.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/attitude_image-269.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/Attitude_Status-268.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/fakelove-267.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/Hindi_Whatsapp_image_status-266.jpg",
  ];
  const defaultList: any = [];

  defaultSlideListItems.forEach((slide: any, index: number) => {
    defaultList.push(<DefaultSliderComponent url={slide} key={index} />);
  });

  const statusList: any = [];
  defaultSlideListItems.forEach((element: any, index: number) => [
    statusList.push(<DefaultSliderComponent url={element} />),
  ]);

  return (
    <div className="flex justify-between w-screen">
      <div className="flex items-center justify-center h-screen w-screen bg-gray-200 no-touch-highlight">
        {/* <div className="flex w-screen h-fit justify-center items-center flex-col"> */}
        {/* <div className="relative h-full"> */}
        {/* StatusSlider takes Props
              1. count in millisecond for slide time
              2. StatusArray as Array of Component 
              3. progressColor as Color of the progressBar
              4. progressContainerColor as color of the progress Container
              5. progressContainerStyles as height of the Progress Bar
          */}
        {/* <StatusSlider
              count={2000}
              statusArray={businessSlide}
              progressColor={"bg-black"}
              progressContainerColor={"bg-gray-300"}
              progressContainerStyles={`h-2`}
              footer={""}
              loop={false}
            /> */}
        {/* </div> */}
        {/* </div> */}
        <div className="flex w-screen h-fit justify-center items-center flex-col">
          <div className="relative h-full">
            {/* StatusSlider takes Props
              1. count in millisecond for slide time
              2. StatusArray as Array of Component 
              3. progressColor as Color of the progressBar
              4. progressContainerColor as color of the progress Container
              5. progressContainerStyles as height of the Progress Bar
          */}
            <StatusSlider
              count={2000}
              statusArray={bankerSlide}
              progressColor={"bg-black"}
              progressContainerColor={"bg-gray-300"}
              progressContainerStyles={`h-2`}
              footer={""}
              loop={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
