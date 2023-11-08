export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "Ekrandaki değeri sıfırlar";
export const MEMORY_ADD = "Memory' e total i ekler";
export const MEMORY_RECALL = "Değeri memory e aktarır";
export const MEMORY_CLEAR = "Değeri sıfırlar";

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const addOne = () => {
  return { type: ADD_ONE };
};

export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return {
    type: CHANGE_OPERATION,
    payload: operation,
  };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
