import React from 'react'

// import useState (Hook react) 
import { useState } from "react";
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext';

const WorkoutForm = () => {

    // UseContext
    const { Dispatch } = useWorkoutsContext();

    // use useState
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');

    // Error state
    const [Error, setError] = useState(null);

    // EmptyFields 
    const [emptyFields, setEmptyFields] = useState([]);


    // Function HandleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json(); // Keluaran Dari json adalah object
        console.log(json);

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.EmptyFields);
        }

        if (response.ok) {
            setLoad('');
            setTitle('');
            setReps('');
            setError(null);
            console.log('new workout added', json);
            Dispatch({ type: "CREATE_WORKOUTS", payload: json });
        };
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Work</h3>
            <label>Exercise Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''} />
            <label>Load (in Kg)</label>
            <input type="text" onChange={(e) => setLoad(e.target.value)} value={load} className={emptyFields.includes('load') ? 'error' : ''} />
            <label>Reps</label>
            <input type="text" onChange={(e) => setReps(e.target.value)} value={reps} className={emptyFields.includes('reps') ? 'error' : ''} />
            <button>Add Workout</button>
            {Error &&
                <div className="error">{Error}</div>
            }
        </form>
    )
}

export default WorkoutForm