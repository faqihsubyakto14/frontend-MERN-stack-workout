import { useContext } from "react";
import { workoutsContext } from "../context/WorkoutContext";


// Buat Costum Hooks
export const useWorkoutsContext = () => {
    const context = useContext(workoutsContext);

    if (!context) {
        throw Error('useWorkoutsContext must be inside an WorkoutsContextProvider');
    }
    return context;
};

