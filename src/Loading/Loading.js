import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className={"loading__container"}>
      <div className="lds__ellipsis">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;
