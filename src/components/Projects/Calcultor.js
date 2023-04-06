import { useEffect, useRef, useState } from "react";

let pIncre;
function Calcultor(props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const [hasOperations, setHasOperations] = useState(false);

  const [lastSymbol, setLastSymbol] = useState(false);
  const [symbolClicked, setSymbolClicked] = useState(false);
  const [pressedEnter, setPressedEnter] = useState(false);

  //   const [password, setPassword] = useState("((");
  const [password, setPassword] = useState("(((*1234");
  const [passValid, setPassValid] = useState(false);
  const [matchedPass, setMatchedPass] = useState(false);

  const [showSecrets, setShowSecrets] = useState(false);

  //check if input field matches password
  //if input field at any point doesnt match set valid to false -- input length has to be 0 to set back to true

  function pressEnter() {
    setPressedEnter(true);
  }

  useEffect(() => {
    if (input !== "") {
      setResult(() => {
        try {
          if (input) {
            const isMathExpression = /^[\d()+\-*/%.]+$/.test(input);
            const hasOperations = /[+\-*/%]/.test(input); // returns false
            setHasOperations(hasOperations);

            return isMathExpression ? eval(input) : "";
          } else {
            return "";
          }
        } catch (error) {
          return "";
        }
      });
    }
  }, [input]);

  useEffect(() => {
    if (pressedEnter && symbolClicked) {
      setInput(result + lastSymbol);
      setPressedEnter(false);
      setSymbolClicked(false);
    }
  }, [pressedEnter, symbolClicked]);

  const handleClick = (e) => {
    if (input.length == 0) {
      pIncre = 0;
    }

    console
      .log
      //   `password at i seen as ${password[i]}, e.target value ${e.target.value}`
      ();

    if (e.target.value === "ignore" && matchedPass && passValid) {
      setShowSecrets(true);
    }

    //password time
    if (input + e.target.value === password) {
      if (passValid) {
        setMatchedPass(true);
      }
    }

    if (password[pIncre] === e.target.value) {
      setPassValid(true);
    } else {
      setPassValid(false);
    }

    pIncre += 1;

    if (e.target.value !== "ignore") {
      setInput((prevInput) => prevInput + e.target.value);
    }

    let symbolcheck = /[+\-*/]/.test(e.target.value);
    if (symbolcheck) {
      setLastSymbol(e.target.value);
      setSymbolClicked(true);
    } else {
      setSymbolClicked(false);
    }
  };

  function clearAll() {
    setInput("");
    setResult("");
  }

  function subLast() {
    setInput((prevInput) => prevInput.slice(0, -1));
  }

  //implement hidden diary
  //implement brackets
  //implement cursor position

  const secretImages = [
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/7565418/pexels-photo-7565418.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/16110063/pexels-photo-16110063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/16074035/pexels-photo-16074035.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      imgInfo: "",
      imgUrl:
        "https://images.pexels.com/photos/16157377/pexels-photo-16157377.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  let rndI = Math.floor(Math.random() * secretImages.length);
  let rndK = rndI + 2;

  return (
    <div id="calcMainDiv">
      {showSecrets && (
        <div
          id="calcSecrets"
          style={{ display: showSecrets ? "block" : "none" }}
        >
          <p>All my secrets!</p>
          <div id="calcSecretImgCont">
            {secretImages.map((eachImgObj, index) => {
              return (
                <div
                  style={{
                    gridRow:
                      index === rndI || index === rndK ? "span 2" : "initial",
                  }}
                  key={eachImgObj.imgUrl}
                >
                  <img id="calcSecretImg" src={eachImgObj.imgUrl} />
                </div>
              );
            })}
          </div>
          <iframe
            className="toDoMakerVideos"
            src="https://www.youtube.com/embed/wutmQXwZlMA?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div id="calcBody">
        <div id="calcDisplay">
          <div className="settingsCont">
            <p>Calculator</p> <p>Settings</p>
          </div>
          <input
            id="calcInput"
            type="text"
            value={input}
            onChange={(e) => {
              setInput((prevInput) => {
                const pattern = /^[0-9()+*%/-]*$/; // regex pattern to match input
                const input = e.target.value;

                if (pattern.test(input)) {
                  return input;
                } else {
                  return prevInput;
                }
              });
            }}
          />

          <p id="calcResult" type="text">
            {hasOperations ? result : ""}
          </p>
          <div id="calcBttmLine"></div>
        </div>
        <div id="calcButtonsDisplay">
          <button onClick={clearAll} className="calcBttn">
            AC
          </button>
          <button onClick={subLast} className="calcBttn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </button>
          <button value="%" onClick={handleClick} className="calcBttn">
            %
          </button>
          <button
            value="/"
            onClick={handleClick}
            className="calcBttn calcBttnCirc"
          >
            ÷
          </button>
          <button value="7" onClick={handleClick} className="calcBttn">
            7
          </button>
          <button value="8" onClick={handleClick} className="calcBttn">
            8
          </button>
          <button value="9" onClick={handleClick} className="calcBttn">
            9
          </button>
          <button
            value="*"
            onClick={handleClick}
            className="calcBttn calcBttnCirc"
          >
            x
          </button>
          <button value="4" onClick={handleClick} className="calcBttn">
            4
          </button>
          <button value="5" className="calcBttn" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick} className="calcBttn">
            6
          </button>
          <button
            value="-"
            onClick={handleClick}
            className="calcBttn calcBttnCirc"
          >
            -
          </button>
          <button value="1" onClick={handleClick} className="calcBttn">
            1
          </button>
          <button value="2" onClick={handleClick} className="calcBttn">
            2
          </button>
          <button value="3" onClick={handleClick} className="calcBttn">
            3
          </button>
          <button
            value="+"
            onClick={handleClick}
            className="calcBttn calcBttnCirc"
          >
            +
          </button>
          <button value="(" onClick={handleClick} className="calcBttn">
            {"( )"}
          </button>
          <button value="0" onClick={handleClick} className="calcBttn">
            0
          </button>
          <button value="." onClick={handleClick} className="calcBttn">
            .
          </button>

          <button
            value="ignore"
            onClick={(e) => {
              handleClick(e);
              pressEnter();
            }}
            className="calcBttn calcBttnCirc"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calcultor;
