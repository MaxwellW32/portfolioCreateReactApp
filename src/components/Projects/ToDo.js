import React, { useEffect, useRef } from "react";
import ToDoContext, { ToDoInfoContext } from "./ToDoContext";
import { useContext } from "react";
import { useState } from "react";
import YoutubeUrlParse from "../useful/YoutubeUrlParse";
function MyYoutubeCont({ videoId }) {
  return (
    <iframe
      id="mainVidIframe"
      style={{
        width: "100%",
        aspectRatio: "16/9",
      }}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
function ToDoSingleView({
  toDoId,
  toDoTitle,
  toDoMessages,
  toDoVideos,
  defaultFullScreen = false,
  brandNew = false,
}) {
  const [isBrandNewToDo, setIsBrandNewToDo] = useState(brandNew);
  const [showFullScreen, setShowFullScreen] = useState(defaultFullScreen);
  const [toDoMessagesState, setToDoMessagesState] = useState(toDoMessages);
  const [toDoVideosState, setToDoVideosState] = useState(toDoVideos);

  //auto id on new
  //to do input for title
  //to do input for message
  //to do input for videos

  function handleShowFullScreen() {
    setShowFullScreen(true);
  }

  function handleHideFullScreen() {
    setShowFullScreen((prev) => !prev);
  }

  function saveToDo() {
    //save
  }
  const bigDisplay = {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "100vh",
    zIndex: "10",
  };

  const smallDisplay = {
    position: "relative",
  };

  const titleRef = useRef(null);
  const ytUrlRef = useRef(null);

  function addNewVideo() {
    console.log(`push tp current array`);
    let videoId = YoutubeUrlParse(ytUrlRef.current.value);
    //apend value
    setToDoVideosState((prevVideoArray) => {
      let short = new Date();
      let longShort = short.toLocaleDateString();
      return [...prevVideoArray, { vidId: short, vidUrl: "ap1a84yPy0E" }];
    });
  }

  useEffect(() => {
    if (toDoId) {
      //set content inside
      titleRef.current.value = toDoTitle;
    }
  }, []);

  function addMessageToArray() {
    setToDoMessagesState((prevArray) => {
      return [...prevArray, ""];
    });
  }
  return (
    <div
      style={showFullScreen ? bigDisplay : smallDisplay}
      className="singularToDo"
      onClick={handleShowFullScreen}
    >
      {/* <div>
        <p>Showing singular todo</p>
        <p>full screen seen as {showFullScreen ? "true" : "false"}</p>

      </div> */}

      <button className="mainBttn toDoCloseBttn" onClick={handleHideFullScreen}>
        {" "}
        close
      </button>
      <br />
      <input
        className="toDoTitleInput"
        placeholder="Enter your Title: "
        type="text"
        ref={titleRef}
      />
      <br />

      <div className="toDovideoPlace">
        <p>videos seen as {JSON.stringify(toDoVideosState)}</p>
        <div className="toDoVidsCont">
          {toDoVideosState.map((eachVidObj, index) => {
            return (
              <MyYoutubeCont
                videoId={eachVidObj.vidId}
                key={eachVidObj.vidUrl + index}
              />
            );
          })}
        </div>
        <div className="todoVideoInputBttnCont">
          <input
            className="toDoYtUrlInput"
            placeholder="Enter a youtube Url"
            type="text"
            ref={ytUrlRef}
          />
          <button className="mainBttn " onClick={addNewVideo}>
            add videos
          </button>
        </div>
      </div>
      <div className="toDoAllMessagesCont">
        {JSON.stringify(toDoMessagesState)}
        {toDoMessagesState.map((eachMessage, index) => {
          return (
            <div key={index} className="toDoSingleMessStrip">
              <textarea
                className="toDoMessageInput"
                value={toDoMessagesState[index]}
                onInput={(e) => {
                  setToDoMessagesState((prevMessages) => {
                    const updatedMessages = [...prevMessages];
                    updatedMessages[index] = e.target.value;
                    return updatedMessages;
                  });
                }}
                placeholder="What are we doing today? "
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={addMessageToArray}
        className="mainBttn toDoAddMoreMessages"
      >
        Add More Todos
      </button>

      {/* <p>
        full screen seen as {defaultFullScreen ? "true" : "false"}, default seen
        as {defaultFullScreen}
      </p>
      <p>brand new seen as {isBrandNewToDo ? "true" : "false"}</p>
      <p>id seen as {toDoId}</p>
      <p>title seen as {toDoTitle}</p>
      <p>test seen as {toDoText}</p> */}
    </div>
  );
}

function ToDoList() {
  //see all todos

  const [allToDos, setAllToDos] = useContext(ToDoInfoContext);
  const [addNewTodoShowing, setAddNewTodoShowing] = useState(false);

  function handleNewToDoShowing() {
    setAddNewTodoShowing(true);
  }
  return (
    <div id="mainToDoDiv">
      <div id="toDoListCont">
        {allToDos.map((eachToDoObj, index) => {
          return <ToDoSingleView {...eachToDoObj} key={index} />;
        })}
      </div>

      {addNewTodoShowing && (
        <ToDoSingleView defaultFullScreen={true} brandNew={true} />
      )}
      <button onClick={handleNewToDoShowing}>Add a toDo</button>
    </div>
  );
}

function ToDo() {
  //give the to do array context data to all children
  return (
    <ToDoContext>
      <ToDoList />
    </ToDoContext>
  );
}

export default ToDo;
