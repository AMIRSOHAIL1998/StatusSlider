import React from "react";
import "../App.css";

const DefaultSliderComponent = (props: any) => {
  return (
    <div className="relative bg-white cursor-pointer md:w-96 md:h-[650px] h-screen w-screen px-5 overflow-hidden">
      <img src={props.url} alt="SliderImage" className="flex h-full w-full" />
    </div>
  );
};

export default DefaultSliderComponent;
