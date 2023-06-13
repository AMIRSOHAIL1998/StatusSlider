import React, { useEffect, useState, useRef } from "react";
import LogoIcon from "../../assets/Logo";
import "../../App.css";
import { ReuseButton } from "@locoworks/reusejs-react-button";
import DropdownIcon from "../../assets/DropdownIcon";

const BusinessScreen = (props: any) => {
  const [isHeadingChanged, setIsHeadingChanged] = useState<boolean>(false);
  const [dropdownOption, setDropdownOption] = useState<string>(
    props.slideOption
  );
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const dropdownOptions = ["Business", "Banker/Partner"];

  useEffect(() => {
    setIsHeadingChanged(true);
    const timer = setTimeout(() => {
      setIsHeadingChanged(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [props.heading]);
  useEffect(() => {
    if (selectRef.current) {
      const textWidth =
        selectRef.current.options[selectRef.current.selectedIndex].text.length +
        3;
      selectRef.current.style.width = textWidth + "ch";
    }
  }, [dropdownOption]);

  return (
    <>
      <div className="flex flex-col bg-white cursor-pointer md:w-96 md:h-[650px] h-screen w-screen px-5 overflow-hidden">
        <div className="flex flex-col h-[60%] w-full pt-24">
          <div className="flex justify-between items-center w-full">
            <LogoIcon />
            <div
              className="relative flex flex-col fit"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownToggle(true);
              }}
            >
              <div className="flex px-4 w-36 py-1 justify-between items-center bg-gray-200 rounded-full">
                <span className="text-sm font-normal text-black mr-1">
                  {dropdownOption}
                </span>
                <DropdownIcon />
              </div>
              {dropdownToggle ? (
                <ul
                  className="absolute w-full top-7 z-50 list-none border bg-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {dropdownOptions.map((option: any, index: number) => {
                    return (
                      <li
                        key={index}
                        onClick={(e) => {
                          setDropdownOption(option);
                          setDropdownToggle(false);
                        }}
                        className="flex text-sm font-normal py-2 hover:bg-blue-500 px-2 hover:text-white"
                      >
                        {option}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h1
              className={`text-4xl font-bold mt-3 ease-linear origin-left ${
                isHeadingChanged ? "slide-right-to-left" : "fade-out"
              }`}
            >
              {props.heading || "Access to a wider customer base"}
            </h1>
            <p
              className={`mt-2 text-lg font-normal text-fray-400 ease-linear origin-left
        ${isHeadingChanged ? "slide-right-to-left" : ""}
    `}
            >
              {props.phrase}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center items-center bg-transparent h-[20%]">
          <ReuseButton
            className="z-50 text-center m-auto justify-center items-center text-white bg-blue-500 h-fit font-semibold text-lg w-full py-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Get Started
          </ReuseButton>
        </div>
        {/* <div className="absolute bottom-0">{View}</div> */}
      </div>
    </>
  );
};

export default BusinessScreen;
