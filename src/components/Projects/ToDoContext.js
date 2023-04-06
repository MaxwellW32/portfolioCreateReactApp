import { createContext, useState } from "react";

export const ToDoInfoContext = createContext(null);

function ToDoContext({ children }) {
  const [allToDos, setAllToDos] = useState([
    {
      toDoId: "test1",
      toDoTitle: "testTitle",
      toDoMessages: ["testmessage1", "testmessage2", "testmessage3"],
      toDoVideos: [
        {
          vidId: "vid1",
          vidUrl: "vidqwerty",
        },
      ],
    },
    {
      toDoId: "test2",
      toDoTitle: "testTitle2",
      toDoMessages: ["testmessage4", "testmessage5", "testmessage6"],
      toDoVideos: [
        {
          vidId: "vid2",
          vidUrl: "asdfghh",
        },
        {
          vidId: "vid3",
          vidUrl: "zxcvb",
        },
      ],
    },
  ]);

  return (
    <ToDoInfoContext.Provider value={[allToDos, setAllToDos]}>
      {children}
    </ToDoInfoContext.Provider>
  );
}

export default ToDoContext;
