type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="City Name"
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit">GetWeather</button>
    </form>
  );
};
export default Form;
