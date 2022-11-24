import React from 'react'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext';
import { formatDistanceToNow } from 'date-fns';


// Create Deleting Data
const WorkoutDetail = ({ workout }) => {
    const { Dispatch } = useWorkoutsContext();
    console.log(new Date(workout.createdAt));

    const handleclick = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: "DELETE"
        });

        const json = await response.json();
        if (response.ok) return Dispatch({ type: "DELETE_WORKOUTS", payload: json });
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleclick}>Delete</span>
        </div>
    )
}

export default WorkoutDetail