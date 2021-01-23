import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import { getWorkouts } from './mockData/mockWorkoutsService';

function App() {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    getWorkouts()
      .then(workouts => setWorkouts(workouts))
  }, []);

  return (
    <main className="App">
      {workouts.map((workout, index) => <Card workout={workout} key={index} />) }
    </main>
  );
}

export default App;
