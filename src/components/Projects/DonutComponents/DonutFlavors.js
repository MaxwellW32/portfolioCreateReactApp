import React, { useEffect } from "react";
import { useState, useContext } from "react";
import tempimage from "../../../raw/DonutStuff/donutjar1.jpeg";
import DonutList from "./DonutList";
import { ActDInvenContext } from "./ActDInvenContext";

function DonutFlavors(props) {
  return (
    <>
      <h1 className="dfTitle">Donut Flavors</h1>
      <div className="allDonutFlavorCont">
        {DonutList.map((eachItem, incr) => {
          return <EachDonut key={incr} id={incr} donutInfo={eachItem} />;
        })}
      </div>
    </>
  );
}

function EachDonut(props) {
  const flavor = props.donutInfo.flavor;
  const description = props.donutInfo.description;
  const rating = props.donutInfo.rating;
  const price = props.donutInfo.price;
  const id = props.id;
  const [quantity, setQuantity] = useState(0);
  const unroundedRunningTotal = price * quantity;
  const runningTotal =
    Math.round((unroundedRunningTotal + Number.EPSILON) * 100) / 100;

  const donutObj = { id, quantity, runningTotal, ...props.donutInfo };
  const [showDesc, setShowDesc] = useState(false);

  function handleDesc() {
    setShowDesc((pre) => !pre);
  }
  const [activeDonutInventory, setActiveDonutInventory] =
    useContext(ActDInvenContext);

  useEffect(() => {
    if (!quantity <= 0) {
      setActiveDonutInventory((prevInven) => {
        let containsId = false;
        let newInven;

        //sets rules on whether to update list amount
        prevInven.map((eachDonutObj) => {
          if (id == eachDonutObj.id) {
            containsId = true;
          }
        });

        //sets rules on updating current info inside the list
        prevInven = prevInven.map((eachDonutObj) => {
          if (eachDonutObj.id == id) {
            return donutObj;
            //replaces specific object at index with updated data
          } else {
            return eachDonutObj;
            //default values
          }
        });

        if (containsId) {
          newInven = [...prevInven];
        } else {
          newInven = [...prevInven, donutObj];
        }

        //if quantity reaches 0
        //reove the item from the arraylist

        return newInven;
      });
    } else if (quantity == 0) {
      //remove obj at quantity 0 from cart
      setActiveDonutInventory((prevInven) => {
        return prevInven.filter((eachDonutObj) => id !== eachDonutObj.id);
      });
    }
  }, [quantity]);

  function updateQuantity(rule) {
    if (rule == "add") {
      setQuantity((prev) => prev + 1);
    } else if (rule == "sub") {
      if (quantity == 0) {
        return;
      }
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <div className="indivFlavorCont">
      <div>
        <h1>{flavor}</h1>
        <p className="indivFlavorPriceText">${price}</p>
        <div className="indivFlavButtonCon">
          <button
            onClick={() => {
              updateQuantity("sub");
            }}
          >
            -
          </button>
          {quantity < 1 ? (
            <button
              onClick={() => {
                updateQuantity("add");
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button>{quantity} Added to Cart</button>
          )}
          <button
            onClick={() => {
              updateQuantity("add");
            }}
          >
            +
          </button>
        </div>
        <p className="IFRating">Rating {rating}/5</p>
      </div>
      <img src={tempimage} />
      <div
        style={{ translate: showDesc ? "0" : "-100%" }}
        className="indivFlavorCoverTextCont"
      >
        <p>{description}</p>
      </div>

      <svg
        onMouseEnter={handleDesc}
        onClick={handleDesc}
        className="IFFloatingToggle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </div>
  );
}

export default DonutFlavors;
