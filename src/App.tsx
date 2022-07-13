import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
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
  const [loading, setLoading] = useState(false);
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
  const [diColor, setDiColor] = useState<string>("#38b48b");

  const url = `https://api.weatherapi.com/v1/current.json?key=ed30072647b34bb28ac53259221107&q=${city}&aqi=no`;
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const di =
          0.81 * Number(data.current.temp_c) +
          0.01 *
            Number(data.current.humidity) *
            (0.99 * Number(data.current.temp_c) - 14.3) +
          46.3;
        if (di < 50) {
          setDiColor("#4D38B5");
        } else if (50 <= di && di < 60) {
          setDiColor("#38A0B5");
        } else if (60 <= di && di < 70) {
          setDiColor("#4fffc4");
        } else if (70 <= di && di < 80) {
          setDiColor("#B58B38");
        } else {
          setDiColor("#B53862");
        }
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          DI: di.toFixed(1).toString(),
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
        setCity("");
        setLoading(false);
      })
      .catch((err) => alert("エラーが発生しました"));
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form city={city} setCity={setCity} getWeather={getWeather} />

        {loading ? (
          <Loading />
        ) : (
          <Results results={results} diColor={diColor} />
        )}
      </div>
    </div>
  );
}

export default App;
