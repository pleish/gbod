import { UPDATE_ACTIVE_WORKOUT } from '../actions/setButtonActions';
import { FINISH_WORKOUT } from '../actions/finishButtonActions';

export default function activeWorkout(state = {}, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_WORKOUT:
      return updateActiveWorkout(state, action.setId, action.exerciseIndex);
    case FINISH_WORKOUT:
      return nextWorkout(state, action);
    default:
      return state;
  }
}

const nextWorkout = (state, action) => {

};

const updateActiveWorkout = (state, setId, exerciseIndex) => {
  const setState = toggleSetComplete(state, setId);
  const exerciseState = updateExerciseComplete(setState, exerciseIndex);
  const currentExerciseState = updateCurrentExercise(exerciseState, exerciseIndex);
  return currentExerciseState;
};

const toggleSetComplete = (state, setId) => {
  const setCompleteVal = state.sets[setId].complete;
  const newState = {
    ...state,
    sets: state.sets.map((set, index) => {
      if (index === setId) {
        return { ...set, ...{ complete: !setCompleteVal } };
      }
      return set;
    }),
  };
  return newState;
};

const updateExerciseComplete = (state, exerciseIndex) => {
  const sets = state.sets;
  const currentSets = sets.filter(set => {
    return set.exercise === exerciseIndex;
  });
  const exerciseComplete = currentSets.every((set) => {
    return set.complete === true;
  });
  const newState = {
    ...state,
    exercises: state.exercises.map((exercise, index) => {
      if (index === exerciseIndex) {
        return { ...exercise, ...{ complete: exerciseComplete } };
      }
      return exercise;
    }),
  };
  return newState;
};

const updateCurrentExercise = (state, currentExercise) => {
  const exercises = state.exercises;
  const exerciseComplete = state.exercises[currentExercise].complete;

  let updatedActiveExercise = currentExercise;

  if (exerciseComplete) {
    const allExercisesComplete = exercises.every((exercise) => {
      return exercise.complete === true;
    });

    if (!allExercisesComplete) {
      let foundExercise = false;
      let index = (currentExercise === exercises.length - 1 ? 0 : currentExercise + 1);

      for (let i = index; i < exercises.length; i++) {
        if (!exercises[i].complete) {
          updatedActiveExercise = i;
          foundExercise = true;
          break;
        }
      }
      if (!foundExercise) {
        for (let i = 0; i < exercises.length; i++) {
          if (!exercises[i].complete) {
            updatedActiveExercise = i;
            foundExercise = true;
            break;
          }
          if (i === currentExercise) {
            break;
          }
        }
      }
    }
  }
  const newState = {
    ...state,
    currentExercise: updatedActiveExercise,
  };
  return newState;
};