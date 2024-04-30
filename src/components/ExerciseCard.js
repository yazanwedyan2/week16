// src/components/ExerciseCard.js
import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div>
      {/* Display details of a single exercise */}
      <h4>{exercise.name}</h4>
      <p>Description: {exercise.description}</p>
      <p>Category: {exercise.category}</p>
    </div>
  );
}

export default ExerciseCard
;
