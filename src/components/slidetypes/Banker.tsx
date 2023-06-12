import React from "react";
import BusinessScreen from "../business/BusinessScreen";

const bankerSlideQoutes = [
  {
    heading: "Access to a wider customer base",
    phrase: "Grow your business with our global platform",
  },
  {
    heading: "Increase revenue streams",
    phrase:
      "Monetize on WiredUp with sessions, webinars and consultations for businesses",
  },
  {
    heading: "Improve customer engagement ",
    phrase:
      "Instantly respond to assigned queries and deals with our in-app chat",
  },
  {
    heading: "Competitive edge and heightened visibility",
    phrase:
      "Stand out by reaching more potential customersMonitor, manage, quote, compare, and conquer market surprises",
  },
];

const bankerSlide: any = [];

bankerSlideQoutes.forEach((element: any, index) => {
  bankerSlide.push(
    <BusinessScreen
      heading={element.heading}
      phrase={element.phrase}
      slideOption={"Banker/Partner"}
    />
  );
});

export default bankerSlide;
