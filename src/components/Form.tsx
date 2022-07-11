// type FormPropsType = {
//     setCity
//     getWeather
// }

const Form = (props: any) => {
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="City Name"
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit" onClick={props.getWeather}>
        Get Weather
      </button>
    </form>
  );
};
export default Form;
