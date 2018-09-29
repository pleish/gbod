export const UPDATE_ACTIVE_WORKOUT = 'UPDATE_ACTIVE_WORKOUT_DATA';
export const UPDATE_PROGRAM_SET = 'UPDATE_PROGRAM_SET';

export const updateActiveWorkoutData = (setId, exerciseId) => {
  return {
    type: UPDATE_ACTIVE_WORKOUT,
    setId,
    exerciseId
  };
};