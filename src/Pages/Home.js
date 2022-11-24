import React from 'react'
// Import LifeCycle react
import { useEffect } from "react";
// Import State Hooks
// import { useState } from "react";

// Import Component detail 
import WorkoutDetail from '../Compnents/WorkoutDetail';
import WorkoutForm from '../Compnents/WorkoutForm';

// Import CustomHooks
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext';


const Home = () => {

    const { workouts, Dispatch } = useWorkoutsContext();
    // console.log(workouts);

    useEffect(() => {
        // fetching Data
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json(); // bentuk keluaran json nya adalah Object

            if (response.ok) return Dispatch({ type: "SET_WORKOUTS", payload: json });

        }
        fetchWorkouts();
    }, [Dispatch]) // dependencies
    // Kalau misalnya di kasih dependencis, nah misal ada perubahan di data nya nanti langsung render ulang otomatis

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetail key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home