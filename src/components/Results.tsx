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
  return (
    <div>
      {props.results.country && (
        <div className="results-country">{props.results.country}</div>
      )}
      {props.results.cityName && (
        <div className="results-city">{props.results.cityName}</div>
      )}
      {props.results.temperature && (
        <div className="results-temp">
          {props.results.temperature}
          <span>°C</span>
        </div>
      )}
      {props.results.humidity && (
        <div className="results-humi">
          {props.results.humidity}
          <span>%</span>
        </div>
      )}
      {props.results.DI && (
        <Discomfort color={props.diColor}>{props.results.DI}</Discomfort>
      )}
      {props.results.conditionText && (
        <div className="results-cond">
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
    </div>
  );
};
export default Results;
