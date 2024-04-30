// src/pages/Workouts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch workouts from MockAPI when the component mounts
    axios.get('https://mockapi.io/workouts')
      .then(response => {
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      {/* Display list of workouts */}
      <h2>Workouts</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
