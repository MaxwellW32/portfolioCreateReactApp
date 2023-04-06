import React from "react";

function Test() {
  function manageCount(limit, name) {
    let count = 0;

    function increaseCount() {
      count++;
      console.log(`count ${name} raised to 2 is ${count ** 2}`);
      if (count >= limit) {
        console.log(`count ${name} finished at ${count ** 2}`);
      } else {
        increaseCount();
      }

      return count;
    }

    return increaseCount();
  }

  const my1 = manageCount(90, "maxCount");
  const my2 = manageCount(10, "minCount");

  console.log(`my1 is ${my1} my2: ${my2}`);
  return <div id="testMainDiv">testing here!</div>;
}

export default Test;
