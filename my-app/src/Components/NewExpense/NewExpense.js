import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormClickHandler = () => {
    setShowForm(true);
  };

  const hideFormClickHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormClickHandler}
        />
      ) : (
        <button onClick={showFormClickHandler}>Add New Expense </button>
      )}
    </div>
  );
};

export default NewExpense;
