import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./Components/chat";
import Join from "./Components/Join";

function App() {
  return ( 
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Router>
  );
}

export default App;
