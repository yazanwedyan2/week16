// src/API.js
import axios from 'axios';

const BASE_URL = 'https://mockapi.io';

export const getExercises = () => {
  // Function to fetch exercises from MockAPI
  return axios.get(`${BASE_URL}/exercises`);
};

export const getWorkouts = () => {
  // Function to fetch workouts from MockAPI
  return axios.get(`${BASE_URL}/workouts`);
};

export const createWorkout = (workoutData) => {
  // Function to create a new workout on MockAPI
  return axios.post(`${BASE_URL}/workouts`, workoutData);
};

// Similarly, define functions for update and delete operations
