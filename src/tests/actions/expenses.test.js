import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should set up edit expense action object", () => {
  const action = editExpense("123abcd", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abcd",
    updates: {
      note: "New note value"
    }
  });
});

test("should set up add expence action with provided values", () => {
  const expenseDate = {
    description: "Rent",
    amount: 50000,
    note: "This was last months rent",
    createdAt: 1000
  };
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      ...expenseDate,
      id: expect.any(String)
    }
  });
});

test("should set up add expence action with default values", () => {
  const expenseDefaultValue = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      ...expenseDefaultValue,
      id: expect.any(String)
    }
  });
});
