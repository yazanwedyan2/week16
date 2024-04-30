// src/pages/Exercises.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Fetch exercises from MockAPI when the component mounts
    axios.get('https://mockapi.io/exercises')
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => {
        console.error('Error fetching exercises:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      {/* Display list of exercises */}
      <h2>Exercises</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercises;
