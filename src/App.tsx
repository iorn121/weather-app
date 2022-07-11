import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";

const url =
  "https://api.weatherapi.com/v1/current.json?key=ed30072647b34bb28ac53259221107&q=London&aqi=no";

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
