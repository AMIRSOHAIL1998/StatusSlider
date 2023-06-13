import React from "react";
import BusinessScreen from "../business/BusinessScreen";

const businessSlideQoutes = [
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

const businessSlide: any = [];

businessSlideQoutes.forEach((element: any, index) => {
  businessSlide.push(
    <BusinessScreen
      heading={element.heading}
      phrase={element.phrase}
      slideOption={"Business"}
    />
  );
});

export default businessSlide;
