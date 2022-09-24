import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "John", text: "Learning React" },
  { id: "q2", author: "Jorj", text: "Hello" },
  { id: "q3", author: "Petko", text: "Learning how to ride a 2 stroke" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
