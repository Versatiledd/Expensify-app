import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary.js";

test("should correctly render expenses summary with one expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={125} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expenses summary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={125456433} />
  );
  expect(wrapper).toMatchSnapshot();
});
