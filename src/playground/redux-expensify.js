import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Get Visible Expenses

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Julia", amount: 200, createdAt: -1000 })
);

// console.log(expenseOne);
// console.log(expenseTwo);

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));

// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: "asddasasdas",
      description: "January Rent",
      note: "This was the final payment for that adress",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
