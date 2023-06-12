import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import LottieAnimation from "./businessScreenLottie.json";

interface LottieInterface {
  lottie: string;
  loop: boolean;
  activeSlide: number;
  statusArrayLength: number;
}
const LottieComponent = ({
  lottie,
  loop,
  activeSlide,
  statusArrayLength,
}: LottieInterface) => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (lottie == "next") {
      startLottieAnimation();
    } else if (lottie == "previous") {
      stopLottieAnimation();
    } else if (lottie == "pause") {
      pauseLottieAnimation();
    }
  }, [lottie]);

  const startLottieAnimation = () => {
    if (animationRef.current) {
      // animationRef.current.setSubframe(1);
      animationRef.current.setSpeed(1);
      animationRef.current.play();
    }
  };

  const stopLottieAnimation = () => {
    if (animationRef.current) {
      // animationRef.current.setSubframe(-1);
      animationRef.current.setSpeed(-1);
      animationRef.current.play();
    }
  };

  const pauseLottieAnimation = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };
  //   in lotties json line no 118 fr increase and decrease to maintain speed

  return (
    <div className=" h-[20%]">
      <Lottie
        animationData={LottieAnimation}
        loop={true}
        autoplay={false}
        lottieRef={animationRef}
      />
    </div>
  );
};

export default LottieComponent;
