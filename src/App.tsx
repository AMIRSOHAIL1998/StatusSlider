import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import StatusSlider from "./components/StatusSlider";
import BusinessScreen from "./components/business/BusinessScreen";
import DefaultSliderComponent from "./components/DefaultComponent";

const App = () => {
  const defaultSlideListItems = [
    "https://cdn.statusqueen.com/imagestatus/thumbnail/image_status-270.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/attitude_image-269.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/Attitude_Status-268.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/fakelove-267.jpg",

    "https://cdn.statusqueen.com/imagestatus/thumbnail/Hindi_Whatsapp_image_status-266.jpg",
  ];
  const List = [
    {
      heading: "Get Real-time Forex Rates with zero delay time",
      phrase: "Monitor, manage, quote, compare, and conquer market surprises",
    },
    {
      heading: "Plan your daily FX operations seamlessly",
      phrase:
        "Quantify risk on your exposures and plan ahead with real-time forex rates 24X5",
    },
    {
      heading: "Plan your daily forex operations seamlessly",
      phrase: "Let the system help you with hedge pickups vs cash rates",
    },
    {
      heading: "Pay-as-you-go model for personalised support",
      phrase:
        "Compute the viability of deals and prepare quotes to win new business",
    },
    {
      heading: "Expand cross border business and never miss a deal",
      phrase: "Pay only when you need us on a per consult basis",
    },
    {
      heading: "Pay-as-you-go model for personalised support",
      phrase:
        "Maximise returns on surplus cash or unutilized bank lines for vendor discounting",
    },
    {
      heading: "Conduct business with zero sales commissions",
      phrase: "Quote, bid, and close deals at ZERO commissions",
    },
  ];

  // const defaultList: any = [];

  // defaultSlideListItems.forEach((slide: any, index: number) => {
  //   defaultList.push(<DefaultSliderComponent url={slide} key={index} />);
  // });

  const statusList: any = [];
  List.forEach((element: any, index: number) => [
    statusList.push(
      <BusinessScreen
        heading={element.heading}
        phrase={element.phrase}
        key={index}
      />
    ),
  ]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200 no-touch-highlight">
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
            statusArray={statusList}
            progressColor={"bg-black"}
            progressContainerColor={"bg-gray-300"}
            progressContainerStyles={`h-3`}
            footer={""}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
