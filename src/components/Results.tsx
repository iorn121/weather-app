import styled from "styled-components";
type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    humidity: string;
    DI: string;
    conditionText: string;
    icon: string;
  };
  diColor: string;
};

const Discomfort = styled.div`
  color: ${(props) => props.color};
  font-size: 5rem;
`;
const Results = (props: ResultsPropsType) => {
  const { country, cityName, temperature, humidity, DI, conditionText, icon } =
    props.results;
  return (
    <div>
      {country && <div className="results-country">{country}</div>}
      {cityName && <div className="results-city">{cityName}</div>}
      {temperature && (
        <div className="results-temp">
          {temperature}
          <span>°C</span>
        </div>
      )}
      {humidity && (
        <div className="results-humi">
          {humidity}
          <span>%</span>
        </div>
      )}
      {DI && <Discomfort color={props.diColor}>{DI}</Discomfort>}
      {conditionText && (
        <div className="results-cond">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </div>
  );
};
export default Results;
