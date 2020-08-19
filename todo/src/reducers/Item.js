export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = [];

export const itemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return [...state, payload];

    case REMOVE_ITEM:
      return state.filter((item) => item.id !== payload);

    case TOGGLE_ITEM:
      return state.map((item) =>
        item.id === payload
          ? { ...item, completed: !item.completed, timeCompleted: !item.completed ? Date.now() : null }
          : item
      );

    case CLEAR_COMPLETED:
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
};
