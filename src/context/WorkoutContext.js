import { createContext, useReducer } from "react";

// 1 buat createContext nya
export const workoutsContext = createContext();


// Buat WorkoutReducer 
export const Workoutreducers = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUTS':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUTS':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
};

// Buat Providernya
export const WorkoutsContextProvicer = ({ children }) => {

    const [state, Dispatch] = useReducer(Workoutreducers, {
        workouts: null
    });

    return (
        <workoutsContext.Provider value={{ ...state, Dispatch }}>
            {children}
        </workoutsContext.Provider>
    );
};