import React, { useContext } from "react";
import { ProgressWrapperInterface } from "../interfaces";

const ProgressWrapper = (props: ProgressWrapperInterface) => {
  return (
    <div
      key={"overlay" + props.index}
      className={`flex h-2 rounded-md mx-1 mt-10 grow z-10
      ${props.progressContainerStyles}
       ${
         props.progressContainerColor
           ? props.progressContainerColor
           : "bg-gray-400"
       }`}
      style={{ ...styles.progress }}
    >
      {props.children}
    </div>
  );
};

const styles = {
  progress: {
    maxWidth: "100%",
  },
};

export default ProgressWrapper;
