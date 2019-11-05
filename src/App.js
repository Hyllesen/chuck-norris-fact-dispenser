import React from "react";
import "./App.css";
import "./animate.css";
import ChuckNorrisFact from "./components/ChuckNorrisFact";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <div className="App">
        <ChuckNorrisFact />
      </div>
    </HttpsRedirect>
  );
}

export default App;
