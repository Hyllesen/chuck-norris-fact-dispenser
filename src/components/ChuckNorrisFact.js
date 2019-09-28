import React, { useState, useEffect } from "react";
import "./ChuckNorrisFact.css";

function ChuckNorrisFact() {
  const [chuckNorrisFact, setChuckNorrisFact] = useState({});
  const [animate, setAnimate] = useState("");

  const fetchData = async () => {
    setAnimate("");
    const resp = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await resp.json();
    setChuckNorrisFact(json);
    setAnimate("animated bounceIn");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="helloWorld">
      <div className={animate}>{chuckNorrisFact.value}</div> <br />
      <img src={chuckNorrisFact.icon_url} /> <br />
      <button onClick={fetchData} className="myButton">
        Bring me another Chuck Norris fact!
      </button>
    </div>
  );
}

export default ChuckNorrisFact;
