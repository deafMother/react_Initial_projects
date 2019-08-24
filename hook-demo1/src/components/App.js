// useState()will give access to component level state
import React, { useState } from "react";
import ResouceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts"); // array destructuring
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Post</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResouceList resource={resource} />
    </div>
  );
};

export default App;
