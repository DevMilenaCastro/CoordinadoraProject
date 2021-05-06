import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Bar from "./components/Bar";
import UpTime from "./components/UpTime";
import "./assets/styles/App.scss";

function App() {
  const [dates, setDates] = useState({});
  useEffect(() => {
    fetch("https://us-central1-cm-devops-294019.cloudfunctions.net/status")
      .then((response) => response.json())
      .then((data) => setDates(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Bar dates={dates} />
      <UpTime />
    </div>
  );
}

export default App;
