export const UPDATE_SELECTED_LOG_DATE = "UPDATE_SELECTED_LOG_DATE";
export const ADD_MEASUREMENT = "ADD_MEASUREMENT";
export const UPDATE_MEASUREMENT = "UPDATE_MEASUREMENT";
export const DELETE_MEASUREMENT = "DELETE_MEASUREMENT";
export const EDIT_LOG_NOTES = "EDIT_LOG_NOTES";

export const LOGS_ACTIONS = [
  UPDATE_SELECTED_LOG_DATE,
  ADD_MEASUREMENT,
  UPDATE_MEASUREMENT,
  DELETE_MEASUREMENT,
  EDIT_LOG_NOTES
];

export const editLogNotes = (logId, noteText) => {
  return {
    type: EDIT_LOG_NOTES,
    logId,
    noteText
  };
};

export const deleteMeasurement = (logId, measurementId) => {
  return {
    type: DELETE_MEASUREMENT,
    logId,
    measurementId
  };
};

export const updateMeasurement = (logId, measurementId, ammount) => {
  return {
    type: UPDATE_MEASUREMENT,
    logId,
    measurementId,
    ammount
  };
};

export const addMeasurement = (measurementId, ammount) => {
  return {
    type: ADD_MEASUREMENT,
    measurementId,
    ammount
  };
};

export const updateSelectedLogDate = date => {
  return {
    type: UPDATE_SELECTED_LOG_DATE,
    date
  };
};
