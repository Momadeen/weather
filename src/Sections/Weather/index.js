import { useSelector, useDispatch } from "react-redux";

import { fetchWeather } from "../../store/actions/fetchWeather";

import Input from "../../components/Input";
import styles from "./weather.module.scss";
import Info from "./components/Info";

const Weather = () => {
  const weatherSelector = useSelector((state) => state?.weatherInfo);
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  console.log({ weatherSelector });

  return (
    <div className={styles.Weather}>
      <h3 className={styles.title}>Just Type The City's Name</h3>
      <p>You Must Spell Correctly</p>
      <Input getWeatherInfoAction={getWeatherInfoAction} />
      {weatherSelector?.cod === "404" && (
        <h2 className={styles.errorMsg}>{weatherSelector?.message}</h2>
      )}
      {weatherSelector?.cod === 200 && <Info info={weatherSelector} />}
    </div>
  );
};

export default Weather;
