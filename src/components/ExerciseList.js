// src/components/ExerciseList.js
import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      {/* Display list of exercises */}
      <h3>Exercise List</h3>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
