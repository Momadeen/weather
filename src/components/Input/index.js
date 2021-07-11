import { useCallback, useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ getWeatherInfoAction }) => {
  const [city, setCity] = useState("");

  const getWeatherInfo = useCallback(
    (e) => {
      e.preventDefault();
      console.log(city);
      getWeatherInfoAction(city);
    },
    [city, getWeatherInfoAction]
  );
  return (
    <form onSubmit={getWeatherInfo} className={styles.inputContainer}>
      <input
        type="text"
        name="city"
        placeholder="Type Your City Name"
        className={styles.input}
        onChange={(e) => setCity(e?.target?.value)}
      />
      <button type="submit">Find</button>
    </form>
  );
};

export default Input;
