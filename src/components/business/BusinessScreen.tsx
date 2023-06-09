import React, { useEffect, useState } from "react";
import LogoIcon from "../../assets/Logo";
import "../../App.css";
const BusinessScreen = (props: any) => {
  const [isHeadingChanged, setIsHeadingChanged] = useState(false);

  useEffect(() => {
    setIsHeadingChanged(true);
    const timer = setTimeout(() => {
      setIsHeadingChanged(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [props.heading]);
  return (
    <>
      <div className="flex flex-col bg-white cursor-pointer md:w-96 md:h-[650px] h-screen w-screen px-5 overflow-hidden">
        <div className="flex flex-col h-[60%] w-full pt-24">
          <div className="flex justify-between items-center w-full">
            <LogoIcon />
            <LogoIcon />
          </div>
          <div className="flex flex-col">
            <h1
              className={`text-4xl font-bold mt-3 ease-linear origin-left ${
                isHeadingChanged ? "slide-left-to-right" : "fade-out"
              }`}
            >
              {props.heading || "Access to a wider customer base"}
            </h1>
            <p
              className={`mt-2 text-lg font-normal text-fray-400 ease-linear origin-left
        ${isHeadingChanged ? "slide-left-to-right" : ""}
    `}
            >
              {props.phrase}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center items-center bg-transparent h-[20%]">
          <button className="text-center m-auto justify-center items-center text-white bg-blue-500 h-fit font-semibold text-lg w-full py-3">
            Get started
          </button>
        </div>
        {/* <div className="absolute bottom-0">{View}</div> */}
      </div>
    </>
  );
};

export default BusinessScreen;
