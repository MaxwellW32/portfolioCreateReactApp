import { useState, useContext } from "react";
import tempimage from "../../../raw/DonutStuff/donutjar1.jpeg";

import { ActDInvenContext } from "./ActDInvenContext";

function DonutCart(props) {
  const [activeDonutInventory, setActiveDonutInventory] =
    useContext(ActDInvenContext);
  //   console.log(activeDonutInventory);

  const [showCart, setShowCart] = useState(false);

  function handleCartVis() {
    setShowCart((prev) => !prev);
  }
  const unroundedTotal = activeDonutInventory.reduce(
    (runningTotal, currentPrice) => runningTotal + currentPrice.runningTotal,
    0
  );

  const total = Math.round((unroundedTotal + Number.EPSILON) * 100) / 100;

  //get all info from the inventory here
  //name
  //desc
  //image url
  //quantity
  //price

  return (
    <>
      <div className="cartIconContainer">
        <svg
          className="cartIcon"
          onMouseEnter={handleCartVis}
          onClick={handleCartVis}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      </div>
      <div
        style={{ display: showCart ? "block" : "none" }}
        className="cartListContainer"
      >
        {activeDonutInventory.map((eachDonutItem, incr) => {
          return (
            <div key={incr} className="indivCartItemContainer">
              <img src={tempimage} />
              <p>
                {eachDonutItem.quantity} {eachDonutItem.flavor} -$
                {eachDonutItem.runningTotal}
              </p>
            </div>
          );
        })}

        {total !== 0 ? (
          <>
            <p>Total is ${total}</p>
            <button>Checkout</button>
          </>
        ) : (
          <>
            <p>Cart empty</p>
            <p>You should totes buy stuff yo</p>
          </>
        )}
      </div>
    </>
  );
}

export default DonutCart;
