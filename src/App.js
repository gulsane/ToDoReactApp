import ToDoList from "./ToDoList";
import React from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons"
library.add(faTrash,faPlus,faEdit);
// import Demo from "./components/demo";
// import Demo1 from "./components/demo1";
// import Parent from "./components/parent";
// import Sample from  "./components/sample"


function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
