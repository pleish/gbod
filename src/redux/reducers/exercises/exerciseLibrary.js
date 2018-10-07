export const newExercise = (
  state,
  name,
  oneRepMax,
  category,
  bodyPart,
  favorite
) => {
  const endIndex = state.exerciseLibrary.length;
  const newItem = {
    id: endIndex,
    name: name,
    bodyPart: bodyPart,
    category: category,
    favorite: favorite,
    oneRepMax: oneRepMax
  }
  const newState = {
    ...state,
    exerciseLibrary: [
      ...state.exerciseLibrary,
      newItem
    ]
  };
  return newState;
};

export const updateSelectedBodyPart = (state, bodyPartId) => {
  const newState = {
    ...state,
    selectedBodyPart: bodyPartId
  };
  return newState;
};

export const updateSelectedExerciseCategory = (state, categoryId) => {
  const newState = {
    ...state,
    selectedExerciseCategory: categoryId
  };
  return newState;
};

export const updateExerciseData = (
  state,
  libraryId,
  oneRepMax,
  name,
  category,
  bodyPart,
  favorite
) => {
  const newState = {
    ...state,
    exerciseLibrary: state.exerciseLibrary.map(exercise => {
      if (exercise.id === libraryId) {
        return {
          ...exercise,
          oneRepMax,
          name,
          category,
          bodyPart,
          favorite
        };
      }
      return exercise;
    })
  };
  return newState;
};

export const deleteExercise = (state, libraryId) => {
  let newLibrary = state.exerciseLibrary.filter(exercise => {
    return exercise.id !== libraryId;
  });

  let removedExerciseId;

  let newPrograms = state.programs;

  newPrograms.forEach(program => {

    let newExercises = program.exercises.filter(exercise => {
      if (exercise.libraryId === libraryId) {
        removedExerciseId = exercise.id;
      }
      return exercise.libraryId !== libraryId;
    });

    let newSets = program.sets.filter(set => {
      return set.exercise !== removedExerciseId;
    });
    newSets.forEach((set, index) => {
      set.id = index;
    });

    newExercises.forEach((exercise, index) => {
      newSets.forEach(set => {
        if (set.exercise === exercise.id) {
          set.exercise = index;
        }
      });
      exercise.id = index;

      let tmpLibId = newLibrary.findIndex(e => e.id === exercise.libraryId);
      exercise.libraryId = tmpLibId;
    });

    program.sets = newSets;
    program.exercises = newExercises;
  });

  newLibrary.forEach((exercise, index) => {
    exercise.id = index;
  });

  const newState = {
    ...state,
    activeWorkout: {
      ...state.activeWorkout,
      set: 0,
      currentExercise: 0
    },
    programs: newPrograms,
    exerciseLibrary: newLibrary
  };
  return newState;
};