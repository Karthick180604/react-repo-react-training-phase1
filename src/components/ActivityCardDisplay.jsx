import React from "react";

const ActivityCardDisplay = ({
  activity,
  description,
  duration,
  gainPercentage,
}) => {
  return (
    <div className="card">
      <h1 className="card-activity">{activity}</h1>
      <p className="card-desc">{description}</p>
      <p className="card-duration">{duration}</p>
      <p className="card-percentage">Gain percentage: {gainPercentage}</p>
    </div>
  );
};

export default ActivityCardDisplay;
