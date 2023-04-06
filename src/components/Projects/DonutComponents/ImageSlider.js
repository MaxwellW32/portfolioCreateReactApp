import React, { useEffect } from "react";
import { useState } from "react";

import donut1 from "../../../raw/DonutStuff/donut1.jpeg";
import donut2 from "../../../raw/DonutStuff/donut2.jpeg";
import donut3 from "../../../raw/DonutStuff/donut3.jpeg";
import donut4 from "../../../raw/DonutStuff/donut4.jpeg";
import donut5 from "../../../raw/DonutStuff/donut5.jpeg";

function ImageSlider(props) {
  //accept array of objects
  const slides = [
    {
      url: `${donut1}`,
      title: "D1",
    },
    {
      url: `${donut2}`,
      title: "D2",
    },
    {
      url: `${donut3}`,
      title: "D3",
    },
    {
      url: `${donut4}`,
      title: "D4",
    },
    {
      url: `${donut5}`,
      title: "D5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); //track image show number
  const [userClicked, setUserClicked] = useState(false); //track image show number
  const [xValue, setXValue] = useState(0); //can either be - 100 or + 100 when detected switch image

  //get full amout possible from array size , then go to last element if less than 0, if greater than 0 use normal count -1
  const safeLeft = () => {
    const arraySize = slides.length; //5 safe index last is 4
    let currentLeft = currentIndex - 1;
    if (currentLeft < 0) {
      return arraySize - 1;
    }
    return currentLeft;
  };

  const safeRight = () => {
    const arraySize = slides.length; //5 safe index last is 4
    let currentRight = currentIndex + 1;
    if (currentRight > arraySize - 1) {
      return 0;
    }
    return currentRight;
  };

  //need to make sure current Index actually updates to active array position

  const containerStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  function userGoRight() {
    //reset animation speed to 0
    //then just increment counter
    const innerDivClasses = Array.from(
      document.getElementsByClassName("innerDivOf3")
    );

    innerDivClasses.forEach(setElementToSmallTimer);

    setCurrentIndex((prev) => {
      let newRight = prev + 1;

      if (newRight > slides.length - 1) {
        newRight = 0;
      }

      return newRight;
    });
  }

  function userGoLeft() {
    //reset animation speed to 0
    //then just increment counter
    const innerDivClasses = Array.from(
      document.getElementsByClassName("innerDivOf3")
    );

    innerDivClasses.forEach(setElementToSmallTimer);

    setCurrentIndex((prev) => {
      let newLeft = prev - 1;

      if (newLeft < 0) {
        newLeft = slides.length - 1;
      }

      return newLeft;
    });
  }

  function setElementToBigTimer(element) {
    element.style.transitionDuration = "4s";
  }

  function setElementToSmallTimer(element) {
    element.style.transitionDuration = "0s";
  }

  function goToTheRight() {
    const innerDivClasses = Array.from(
      document.getElementsByClassName("innerDivOf3")
    );
    innerDivClasses.forEach(setElementToBigTimer);
    setXValue((prev) => prev - 100);

    //reset test

    setTimeout(() => {
      //duration
      innerDivClasses.forEach(setElementToSmallTimer);
      setXValue((prev) => prev + 100);

      //logic to bounce it to the bounds of 0 and 4
      setCurrentIndex((prev) => {
        let newRight = prev + 1;

        if (newRight > slides.length - 1) {
          newRight = 0;
        }

        return newRight;
      });
    }, 4000);
  }

  function goToTheLeft() {
    const innerDivClasses = Array.from(
      document.getElementsByClassName("innerDivOf3")
    );
    innerDivClasses.forEach(setElementToBigTimer);

    setXValue((prev) => prev + 100);

    //reset test

    setTimeout(() => {
      //duration
      innerDivClasses.forEach(setElementToSmallTimer);
      setXValue((prev) => prev - 100);

      setCurrentIndex((prev) => {
        let newLeft = prev - 1;

        if (newLeft < 0) {
          newLeft = slides.length - 1;
        }

        return newLeft;
      });
    }, 4000);
  }

  function setSpecific(id) {
    const offset = id - currentIndex;

    setCurrentIndex((prev) => {
      let newNum = prev + offset;

      if (newNum < 0) {
        newNum = slides.length + offset;
      } else if (newNum > slides.length - 1) {
        newNum = 0 + offset;
      }

      return newNum;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToTheRight();
    }, 5000);

    if (userClicked) {
      clearInterval(interval);

      setTimeout(() => {
        setUserClicked(false);
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [userClicked]);

  return (
    <>
      <div className="donutFrameContainer">
        <div style={containerStyle} className="ImgSContainer">
          <div
            className="donutImageArrow"
            onClick={() => {
              setUserClicked(true);
              userGoLeft();
            }}
          >
            ‹
          </div>
          <div
            className="donutImageArrow"
            onClick={() => {
              setUserClicked(true);
              userGoRight();
            }}
          >
            ›
          </div>

          <div //left
            style={{
              backgroundImage: `url(${slides[safeLeft()].url})`,
              translate: `${xValue - 100}%`,
            }}
            className="innerDivOf3"
          ></div>

          <div //middle
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              translate: `${xValue}%`,
            }}
            className="innerDivOf3"
          ></div>

          <div //right
            style={{
              backgroundImage: `url(${slides[safeRight()].url})`,
              translate: `${xValue + 100}%`,
            }}
            className="innerDivOf3"
          ></div>
        </div>
        <div className="donutFrame"></div>
      </div>

      <div className="imgDotsContainer">
        {slides.map((slide, slideIndex) => {
          if (slideIndex >= 5) {
            return;
          }
          return (
            <div
              className="imgDots"
              style={{
                scale: slideIndex == currentIndex ? "1" : "0.7",
                color:
                  slideIndex == currentIndex ? "#FFF" : "rgba(0, 0, 0, 0.200)",
              }}
              onClick={() => {
                setSpecific(slideIndex);
                setUserClicked(true);
              }}
              key={slideIndex}
            >
              ●
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImageSlider;
