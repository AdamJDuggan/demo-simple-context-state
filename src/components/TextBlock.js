import React from "react";

export default function TextBlock(props) {
  return (
    <div className="mb-20">
      <div className="text-3xl font-bold border-b border-grey-800 mb-6">
        {props.title}
      </div>
      <div className="text-xl"> {props.children}</div>
    </div>
  );
}
