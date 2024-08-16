import React from "react";
import ContentCell from "./content-cell";

const GroupContent = () => {
  return (
    <div>
      {[1, 2, 3].map((num) => (
        <ContentCell key={num} />
      ))}
    </div>
  );
};

export default GroupContent;
