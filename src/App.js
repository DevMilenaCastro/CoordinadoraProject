import React from "react";
import Header from "./components/Header";
import Bar from "./components/Bar";
import UpTime from "./components/UpTime";
import "./assets/styles/App.scss";

function App() {
  React.useEffect(() => {
    // console.log("useEffect");
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://us-central1-cm-devops-294019.cloudfunctions.net/status"
    );
    const users = await data.json();
    console.log(users);
  };

  return (
    <div className="App">
      <Header />
      <Bar />
      <UpTime />
    </div>
  );
}

export default App;
