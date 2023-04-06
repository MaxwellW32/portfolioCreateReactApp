import React, { useState, useEffect, useRef } from "react";
import parrot from "../../raw/parrot.json";
import Lottie from "lottie-react";

let birdScale = -1;

function Dictionary() {
  const [word, setWord] = useState("");
  const [topValue, setTopValue] = useState(Math.floor(Math.random() * 100));
  const [foundWord, setFoundWord] = useState({});
  const handleInputSearch = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopValue(Math.floor(Math.random() * 100));
      birdScale *= -1;
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (word !== "") {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((Response) => Response.json())
        .then((data) => {
          //array of stuff containing objects
          setFoundWord(data); //passed object directly
        });
    }
  }, [word]);

  function findNewWord() {
    setWord(handleInputSearch.current.value);
  }

  useEffect(() => {
    const searchInput = document.querySelector("#dicSearchInput");

    searchInput.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        findNewWord();
      }
    });
  }, []);

  return (
    <div className="dictionaryMain">
      <section className="dicSection dicTopSection">
        <h2>Oxford</h2>
        <h1>Maxwell's dictionary</h1>

        <div className="dicInputCont">
          <input
            id="dicSearchInput"
            placeholder="Type something cool..."
            ref={handleInputSearch}
          ></input>
          <button onClick={findNewWord}>Search</button>
        </div>

        {foundWord[0] && (
          <div className="midContainer">
            <p>
              You searched for{" "}
              <span id="dictionaryFoundWord">{foundWord[0].word}</span>{" "}
            </p>
            <div className="meaningsCont">
              {foundWord[0].meanings.map((meaning, incr) => {
                return <p key={incr}>{meaning.definitions[0].definition}</p>;
              })}
            </div>
          </div>
        )}
      </section>

      <div style={{ top: `${topValue}%` }} className="moveParrot">
        <Lottie animationData={parrot} />
      </div>

      <div
        style={{
          animationDelay: "12s",
          top: `${topValue + Math.floor(Math.random() * 100)}%`,
        }}
        className="moveParrot blue"
      >
        <Lottie animationData={parrot} />
      </div>
    </div>
  );
}

export default Dictionary;
