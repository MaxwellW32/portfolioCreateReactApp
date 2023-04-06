import React, { useState, useEffect } from "react";
import axios from "axios";
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

//rewrite so it only runs a fetch request once on load...
//reqwrite so the search string only rocesses on button click or enter key..

//add a trule random function topic...
//decrement the video amount...

function MyYoutubeCont({ videoId, gridLetter }) {
  return (
    <iframe
      id="mainVidIframe"
      style={{
        width: "100%",
        aspectRatio: "16/9",
        gridArea: gridLetter === "x" ? null : gridLetter,
      }}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

let counter = 0;

function VideoGenerator() {
  const [videoIds, setVideoIds] = useState([]);
  const [searchString, setSearchString] = useState("cats");
  const [maxSearchNumber, setMaxSearchNumber] = useState(1);
  const [myLayout, setMyLayout] = useState(true);

  const [backupSearchString, setBackupSearchString] = useState("");

  const [succGotFromYoutube, setSuccGotFromYoutube] = useState(true);

  const gridLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  useEffect(() => {
    //program start fetch
    fetchData();
  }, [maxSearchNumber]);

  useEffect(() => {
    //load backups on api fail
    if (!succGotFromYoutube) {
      const myBackupVideos = [
        "ktBMxkLUIwY",
        "tcaw6lzYt1Q",
        "rULyu_wFWGU",
        "ZD6C498MB4U",
        "ytQ5CYE1VZw",
        "iI34LYmJ1Fs",
        "h3EJICKwITw",
        "3JBKp0YbSEc",
        "r_0JjYUe5jo",
        "oihY8GiXXgQ",
        "nceqQyqIa5o",
        "1RdrlReJmTY",
        "RRl_C73vFtQ",
      ];
      setVideoIds((prevIds) => [...myBackupVideos, ...prevIds]);
    }
  }, [succGotFromYoutube]);

  async function fetchData() {
    try {
      // throw new Error("Something went wrong.");
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: maxSearchNumber,
            q: searchString,
            type: "video",
            key: apiKey,
          },
        }
      );

      // do something with the response data
      setSuccGotFromYoutube(true);
      setVideoIds(response.data.items);
    } catch (error) {
      console.log(`Hi max Error occurred: ${error}`);
      setSuccGotFromYoutube(false);
    }

    // backup indiv one const videoId = response.data.items[0].id.videoId;
  }

  function getRandomWord() {
    const url = `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchString(data[0].word);
      })
      .catch((error) => console.error(error));

    fetchData();
  }

  function handleBackupSearch() {
    let id = "";
    if (backupSearchString.includes("youtube.com")) {
      id = backupSearchString.split("v=")[1];
      if (id.includes("&")) {
        id = id.split("&")[0];
      }
    } else if (backupSearchString.includes("youtu.be")) {
      id = backupSearchString.split("/")[3];
    } else {
      id = backupSearchString;
    }

    setVideoIds((prev) => [...prev, id]);
  }

  return (
    <div id="mainVidPlayer">
      <main id="mainNavMainCont">
        <h1 className="BigHeader">Load random youtube videos</h1>

        {!succGotFromYoutube && (
          <div id="errorVidDivCont">
            <h2>Couldn't fetch Videos, using backup videos</h2>
            <input
              type="text"
              id="vidBackupSearch"
              value={backupSearchString}
              placeholder="enter any youtube url: "
              onChange={(e) => {
                setBackupSearchString(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleBackupSearch();
                }
              }}
            />
            <button onClick={handleBackupSearch} className="mainBttn">
              Search Video
            </button>
          </div>
        )}

        {succGotFromYoutube && (
          <>
            <button
              className="mainBttn"
              onClick={() => {
                setMaxSearchNumber((prev) => prev + 10);
              }}
            >
              Load 10+ more
            </button>

            {maxSearchNumber > 5 && (
              <button
                className="mainBttn"
                onClick={() => {
                  setMaxSearchNumber(1);
                }}
              >
                Load only 1 video
              </button>
            )}
          </>
        )}

        <button
          className="mainBttn"
          onClick={() => {
            setMyLayout((prev) => !prev);
          }}
        >
          {myLayout ? "Use Block Layout" : "Use Grid Layout"}
        </button>

        {succGotFromYoutube ? (
          <div id="vidSearchCont">
            <input
              placeholder="search any topic: "
              id="vidSearchInput"
              type="text"
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchData();
                }
              }}
            />

            <button className="mainBttn" onClick={fetchData}>
              Search
            </button>
          </div>
        ) : (
          <button className="mainBttn" onClick={fetchData}>
            Try Random Search Again
          </button>
        )}

        <div
          style={{ display: myLayout ? "grid" : "block" }}
          id="allMyYoutubeVidCont"
        >
          {videoIds.map((each, index) => {
            return (
              <MyYoutubeCont
                key={index}
                gridLetter={gridLetters[index] ? gridLetters[index] : "x"}
                videoId={
                  succGotFromYoutube
                    ? videoIds[index].id.videoId
                    : videoIds[index]
                }
              />
            );
          })}
        </div>

        <br />
        {succGotFromYoutube && (
          <button className="mainBttn" onClick={getRandomWord}>
            Random Topic Video
          </button>
        )}
      </main>
    </div>
  );
}

export default VideoGenerator;
