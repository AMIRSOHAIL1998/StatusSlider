import React, { useState, useEffect, useRef } from "react";
import Progress from "./Progress";
import { statusInterface } from "../interfaces";
import LottieComponent from "./business/LottieComponent";

const StatusSlider = ({
  count = 2000,
  statusArray,
  progressColor,
  progressContainerColor,
  progressContainerStyles,
  footer,
  loop,
}: statusInterface) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [isScrollPaused, setScrollPaused] = useState(false);
  const [remainingPauseTime, setRemainingPauseTime] = useState<any>(null);
  const [preIndex, setPreIndex] = useState<number>();
  const [lastTime, setLastTime] = useState<number>(0);
  const [slideChange, setSlideChange] = useState<boolean>(false);
  const [lottie, setLottie] = useState<string>("");

  const intervalRef = useRef<any>(null);
  const currentStatus = statusArray[currentStatusIndex];

  let remainingTime =
    preIndex == currentStatusIndex && lastTime > 0 ? count - lastTime : 2000;

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    if (!isScrollPaused && loop) {
      setCurrentStatusIndex((preindex) => {
        const nextIndex = preindex == statusArray.length - 1 ? 0 : preindex + 1;
        return nextIndex;
      });
      setLottie("next");
    } else if (!isScrollPaused && !loop) {
      if (currentStatusIndex < statusArray.length - 1) {
        setCurrentStatusIndex((preindex) => {
          const nextIndex = preindex + 1;
          return nextIndex;
        });
      } else if (currentStatusIndex == statusArray.length - 1) {
        setCurrentStatusIndex(currentStatusIndex);
      }
      if (currentStatusIndex != statusArray.length - 1) {
        setLottie("next");
      }
    }
  };

  const handlePrevStatus = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setScrollPaused(true);
    remainingTime = 2000;
    loop
      ? setCurrentStatusIndex(
          currentStatusIndex > 0
            ? currentStatusIndex - 1
            : statusArray.length - 1
        )
      : setCurrentStatusIndex(
          currentStatusIndex > 0 ? currentStatusIndex - 1 : 0
        );
    setSlideChange(true);
    if ((currentStatusIndex != 0 && !loop) || loop) {
      setLottie("previous");
    }
  };

  const handleNextStatus = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setScrollPaused(true);
    remainingTime = 2000;
    loop
      ? setCurrentStatusIndex(
          currentStatusIndex < statusArray.length - 1 && loop
            ? currentStatusIndex + 1
            : 0
        )
      : setCurrentStatusIndex(
          currentStatusIndex < statusArray.length - 1
            ? currentStatusIndex + 1
            : statusArray.length - 1
        );
    setSlideChange(true);
    if ((currentStatusIndex != statusArray.length - 1 && !loop) || loop) {
      setLottie("next");
    }
  };

  const handleScrollResume = () => {
    clearInterval(intervalRef.current);
    setScrollPaused(false);
    setSlideChange(false);
    setRemainingPauseTime(0);
    intervalRef.current = setInterval(() => {
      if (!isScrollPaused) {
        startAutoScroll();
      }
    }, remainingTime);
  };

  const handleScrollPause = () => {
    clearInterval(intervalRef.current);
    setRemainingPauseTime(Date.now());
    setPreIndex(currentStatusIndex);
    setScrollPaused(true);
  };

  useEffect(() => {
    if (!isScrollPaused) {
      handleScrollResume(); // Initial resume
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isScrollPaused, currentStatusIndex, remainingPauseTime]);

  const handleStatusClick = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const halfWidth = rect.width / 2;
    if (clickPosition < halfWidth) {
      handlePrevStatus();
    } else {
      handleNextStatus();
    }
  };

  useEffect(() => {
    const lottieTimer = setInterval(() => {
      setLottie("pause");
    }, 300);

    return () => {
      clearInterval(lottieTimer);
    };
  }, []);

  return (
    <div className="flex relative bg-white cursor-pointer md:w-96 md:h-fit h-screen w-screen overflow-hidden no-touch-highlight">
      <div className="absolute w-full">
        <div className="flex justify-between items-center px-6">
          {statusArray.map((item: any, index: number) => (
            <Progress
              key={index}
              setLastTime={setLastTime}
              lastTime={lastTime}
              index={index}
              activeSlide={currentStatusIndex}
              count={count}
              slideChange={slideChange}
              progressColor={progressColor}
              progressContainerColor={progressContainerColor}
              progressContainerStyles={progressContainerStyles}
              active={
                index == currentStatusIndex
                  ? 2
                  : index < currentStatusIndex
                  ? 1
                  : 0
              }
              isScrollPaused={isScrollPaused}
            />
          ))}
        </div>
      </div>

      <div
        className="flex flex-col w-full"
        onClick={handleStatusClick}
        onMouseEnter={handleScrollPause}
        onMouseLeave={handleScrollResume}
        onTouchStart={handleScrollPause}
        onTouchEnd={handleScrollResume}
        onTouchCancel={handleScrollResume}
      >
        {currentStatus}
        {footer ? (
          <div className="flex h-[20%] z-50 w-full justify-center items-center">
            {footer}
          </div>
        ) : (
          <div className="absolute -bottom-16 sm:-bottom-20 left-0 right-0">
            <LottieComponent
              lottie={lottie}
              loop={loop}
              statusArrayLength={statusArray.length}
              activeSlide={currentStatusIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusSlider;
