import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="./products/p1">KTM</Link>
        </li>
        <li>
          <Link to="./products/p2">Beta</Link>
        </li>
        <li>
          <Link to="./products/p3">Honda</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
