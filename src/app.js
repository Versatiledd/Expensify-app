import React from "react";
import AppRouter from "./routes/AppRoutes";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { setTextFilter } from "./actions/filters";
import "./firebase/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
