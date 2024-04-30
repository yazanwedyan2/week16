// src/components/WorkoutForm.js
import React, { useState } from 'react';

const WorkoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form for adding a new workout */}
      <label>
        Workout Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
