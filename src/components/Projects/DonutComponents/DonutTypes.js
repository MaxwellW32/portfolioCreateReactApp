import React from "react";
import tempimage from "../../../raw/DonutStuff/donutjar1.jpeg";

const donutTypesList = [
  {
    donutType: "Cake Donuts",
    description:
      "Our cake donuts are made with a denser, cake-like dough and are available in a variety of flavors, including classic glazed, chocolate frosted, and sprinkles.",
    imageUrl: "",
  },
  {
    donutType: "Raised Donuts",
    description:
      "Our raised donuts are made with a lighter, airier dough and are typically fried before being coated in a sweet glaze or frosting. Choose from flavors like classic glazed, chocolate frosted, and maple bacon.",
    imageUrl: "",
  },
  {
    donutType: "Filled Donuts",
    description:
      "For a special treat, try one of our filled donuts. Made with a light, fluffy dough and filled with a variety of delicious fillings, such as chocolate, jelly, or cream.",
    imageUrl: "",
  },
];

function DonutTypes(props) {
  return (
    <>
      <h1 className="dfTitle">Donut Types</h1>
      <div className="allDonutTypeCont">
        {/* each individual image slide it can make goes here*/}

        {donutTypesList.map((eachItem) => {
          return (
            <div
              key={eachItem.donutType}
              style={{ backgroundImage: `url(${tempimage})` }}
              className="indivTypeCont"
            >
              <h1>{eachItem.donutType}</h1>
              <p>{eachItem.description}</p>

              <div className="donutChevron">
                <p>›</p>
                <p className="chevronLearnMore">Learn more</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DonutTypes;
