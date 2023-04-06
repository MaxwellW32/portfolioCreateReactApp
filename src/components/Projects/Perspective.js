import React, { useEffect, useMemo, useState, useRef } from "react";

function Perspective(props) {
  const [fillIn, setFillIn] = useState(1);
  const [boxWidth, setBoxWidth] = useState("200px");

  const [boxHeight, setBoxHeight] = useState(null);

  const [perspective, setPerspective] = useState("500px");

  const [currentVidIndex, setCurrentVidIndex] = useState(0);

  const allVideoList = [
    "oihY8GiXXgQ",
    "tcaw6lzYt1Q",
    "ZU038QQW-K4",
    "ktBMxkLUIwY",
    "0gNauGdOkro",
    "3LiDtW0qZbY",
    "_EoEvXJcBuw",
    "wdvwO0e9Ddc",
    "WV38uDXHKz0",
    "EG0Ad6-RzUw",
    "7yyjFudHYuw",
    "-A-MzMaJiCk",
    "v-GXxA-yHzo",
    "qmhreNoVWG4",
    "h5NvTTOlOtI",
    "Gmx-54k3pUk",
    "MEiVnNNpJLA",
    "gQDX-sf89p4",
    "u_5-I0MhUww",
    "G3e-cpL7ofc",
    "3-yRTEFAv6g",
  ];
  const currentItem = allVideoList[currentVidIndex];

  const handleClick = () => {
    setCurrentVidIndex(
      (prevVidIndex) => (prevVidIndex + 1) % allVideoList.length
    );
  };

  const handlePrevClick = () => {
    setCurrentVidIndex(
      (prevVidIndex) =>
        (prevVidIndex - 1 + allVideoList.length) % allVideoList.length
    );
  };

  function changeBox() {
    setFillIn(2);
    setBoxWidth("600px");
    setPerspective("200px");

    setTimeout(() => {
      setFillIn(1);
      setBoxWidth("200px");
      setPerspective("500px");
    }, 4000);
  }

  useEffect(() => {
    const regex = /\d+/g;
    const numbers = boxWidth.match(regex);
    const result = Number(numbers.join(""));

    const aspectRatio = 16 / 9;
    const height = result / aspectRatio;

    setBoxHeight(`${height}px`);
  }, [boxWidth]);

  const videoStyle = {
    width: "100%",
    height: boxHeight,
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
    },
  };

  const [canAnimate, setCanAnimate] = useState(true);
  const [boxStats, setBoxStats] = useState({
    boxRotationX: 0,
    boxRotationY: 0,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "l") {
        handleClick();
      } else if (event.key.toLowerCase() === "k") {
        setCanAnimate((prev) => !prev);
      } else if (event.key.toLowerCase() === "j") {
        handlePrevClick();
      } else if (event.code === "Space") {
        changeBox();
      } else if (event.keyCode === 38) {
        // Handle up arrow key
        setBoxStats((prevStats) => {
          return { ...prevStats, boxRotationX: (prevStats.boxRotationX += 1) };
        });
      } else if (event.keyCode === 40) {
        // Handle down arrow key
        setBoxStats((prevStats) => {
          return { ...prevStats, boxRotationX: (prevStats.boxRotationX -= 1) };
        });
      } else if (event.keyCode === 37) {
        // Handle left arrow key
        setBoxStats((prevStats) => {
          return { ...prevStats, boxRotationY: (prevStats.boxRotationY -= 1) };
        });
      } else if (event.keyCode === 39) {
        // Handle right arrow key
        setBoxStats((prevStats) => {
          return { ...prevStats, boxRotationY: (prevStats.boxRotationY += 1) };
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let video = document.getElementById("mainVidIframe");

    function handleVid() {
      video.currentTime = 0;
      video.play();
    }
    video.addEventListener("ended", handleVid);

    return () => video.removeEventListener("ended", handleVid);
  }, []);

  return (
    <div id="persMainDiv">
      <div style={{ perspective: perspective }} className="persContainer">
        <div
          id="persBox"
          style={{
            "--fillIn": fillIn,
            "--boxWidth": boxWidth,
            "--boxHeight": boxHeight,
            "--canAnimate": canAnimate
              ? " spinBox 50s infinite linear"
              : "none",
            transform: `rotateX(${boxStats.boxRotationX}deg) rotateY(${boxStats.boxRotationY}deg)`,
          }}
        >
          <div
            style={
              {
                // backgroundImage: `url("https://picsum.photos/200")`,
              }
            }
            className="side persFront"
          >
            <iframe
              id="mainVidIframe"
              style={{
                width: "100%",
                aspectRatio: "16/9",
                position: "absolute",
                top: "-1rem",
                left: "0",
              }}
              src={`https://www.youtube.com/embed/${currentItem}?autoplay=1&loop=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div
            style={{
              backgroundImage: `url("https://images.firstpost.com/wp-content/uploads/2019/04/Black-hole-travel_Discover.jpg")`,
            }}
            className="side persBack"
          ></div>
          <div
            style={{
              backgroundImage: `url("https://images.firstpost.com/wp-content/uploads/2019/04/Black-hole-travel_Discover.jpg")`,
            }}
            className="side persLeft"
          ></div>
          <div
            style={{
              backgroundImage: `url("https://images.firstpost.com/wp-content/uploads/2019/04/Black-hole-travel_Discover.jpg")`,
            }}
            className="side persRight"
          ></div>
          <div
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/1098764/pexels-photo-1098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
            className="side persTop"
          ></div>
          <div
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/1098764/pexels-photo-1098764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
            className="side persBottom"
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Perspective;
