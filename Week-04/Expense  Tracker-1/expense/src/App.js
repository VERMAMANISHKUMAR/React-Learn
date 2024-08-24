import "./App.css";
import React from "react";
import ExpenseForm from "./components/Expense Form/ExpenseForm";
import ExpenseInfo from "./components/Expense Info/ExpenseInfo";
import ExpenseList from "./components/Expense List/ExpenseList";

export default function App() {
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm />
        <div className="expenseContainer">
          <ExpenseInfo />
          <ExpenseList />
        </div>
      </div>
    </>
  );
}