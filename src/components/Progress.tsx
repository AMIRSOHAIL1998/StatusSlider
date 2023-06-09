import React, { useState, useEffect, useRef } from "react";
import ProgressWrapper from "./ProgressWrapper";
import { ProgressInterface } from "../interfaces";

const Progress = ({
  index,
  activeSlide,
  count,
  isScrollPaused,
  active,
  setLastTime,
  lastTime,
  slideChange,
  progressColor,
  progressContainerColor,
  progressContainerStyles,
}: ProgressInterface) => {
  const [progress, setProgress] = useState<number>(0);
  let currentProgressRef = useRef<number>(0);

  let interval: any = null;
  const targetProgress = 100;
  const duration = count - 10;
  const increment = (targetProgress / duration) * 12;

  useEffect(() => {
    let intervalId: any;
    if (!isScrollPaused) {
      // setting time from lastTime + 100 in every 100 milisecond using javascript setInterval method
      intervalId = setInterval(() => setLastTime(lastTime + 100), 100);
    }

    if (lastTime >= count - 100) {
      setLastTime(0);
    }

    return () => clearInterval(intervalId);
  }, [isScrollPaused, lastTime]);

  useEffect(() => {
    const updateProgress = () => {
      if (isScrollPaused == false) {
        currentProgressRef.current += increment;
        if (slideChange == false) {
          setProgress(Math.min(currentProgressRef.current, targetProgress));
        } else {
          setProgress(0);
        }
      }

      if (isScrollPaused == true) {
        setProgress(currentProgressRef.current);
      }
    };

    const startProgress = () => {
      interval = setInterval(() => {
        updateProgress();
      }, 10);
    };

    if (progress >= 99) {
      currentProgressRef.current = 0;
      setProgress(0);
    }
    if (slideChange == true) {
      currentProgressRef.current = 0;
      setProgress(0);
    }

    const resetProgress = () => {
      clearInterval(interval);
      setProgress(0);
    };
    resetProgress();
    startProgress();

    return () => {
      clearInterval(interval);
    };
  }, [isScrollPaused, activeSlide]);

  const getProgressStyle = (active: number) => {
    switch (active) {
      case 1:
        return { width: "100%" };

      case 2:
        return { width: `${progress}%` };

      case 0:
        return { width: "0%" };

      default:
        return { width: `0%` };
    }
  };

  return (
    <ProgressWrapper
      progressContainerColor={progressContainerColor}
      progressContainerStyles={progressContainerStyles}
    >
      <div
        key={"base" + index}
        className={`flex h-full rounded-md ${
          progressColor ? progressColor : "bg-white"
        }`}
        style={{
          ...getProgressStyle(active),
        }}
      ></div>
    </ProgressWrapper>
  );
};

export default Progress;
