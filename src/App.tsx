import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  humidity: string;
  DI: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    humidity: "",
    DI: "",
    conditionText: "",
    icon: "",
  });

  const url = `https://api.weatherapi.com/v1/current.json?key=ed30072647b34bb28ac53259221107&q=${city}&aqi=no`;
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const di =
          0.81 * Number(data.current.temp_c) +
          0.01 *
            Number(data.current.humidity) *
            (0.99 * Number(data.current.temp_c) - 14.3) +
          46.3;
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          DI: di.toString(),
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
