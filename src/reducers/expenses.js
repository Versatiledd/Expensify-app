// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expens => {
        if (expens.id === action.id) {
          return {
            ...expens,
            ...action.updates
          };
        } else {
          return expens;
        }
      });
    default:
      return state;
  }
};
