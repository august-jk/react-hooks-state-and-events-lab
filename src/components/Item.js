import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  function toggleIsInCart() {
    setIsInCart(current => !current)
  }
  const liClass = isInCart ? "in-cart" : "";
  const buttonClass = isInCart ? "remove" : "add";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleIsInCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
