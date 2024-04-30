// src/components/WorkoutDetails.js
import React from 'react';

const WorkoutDetails = ({ workout }) => {
  return (
    <div>
      {/* Display details of a single workout */}
      <h3>{workout.name}</h3>
      <p>Description: {workout.description}</p>
      <p>Duration: {workout.duration} minutes</p>
    </div>
  );
}

export default WorkoutDetails;
