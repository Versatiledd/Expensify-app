import { createStore } from "redux";

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = ({ resetBy = 0 } = {}) => ({
  type: "RESET",
  resetBy
});

// Reducers
// 1.Reducers are pure functions
// 2.Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "RESET":
      return {
        count: action.resetBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(resetCount({ resetBy: 0 }));

// store.dispatch({
//   type: "RESET"
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });
