export const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);

    default:
      return state;
  }
};