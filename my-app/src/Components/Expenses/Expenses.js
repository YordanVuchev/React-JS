import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          date={props.expenses[3].date}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
        />
      </Card>
    </div>
  );
}

export default Expenses;
