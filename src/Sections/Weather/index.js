import { useSelector, useDispatch } from "react-redux";

import { fetchWeather } from "../../store/actions/fetchWeather";

import Input from "../../components/Input";
import styles from "./weather.module.scss";
import Info from "./components/Info";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const weatherSelector = useSelector((state) => state?.weatherInfo);
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  // useEffect to create loading state
  useEffect(() => {
    if (weatherSelector) {
      setLoading(false);
    }
  }, [weatherSelector]);

  return (
    <div className={styles.Weather}>
      <h3 className={styles.title}>Just Type The City's Name</h3>
      <p>You Must Spell Correctly</p>
      <Input
        getWeatherInfoAction={getWeatherInfoAction}
        setLoading={setLoading}
      />
      {weatherSelector?.cod === "404" || weatherSelector?.cod === "400" ? (
        <h2 className={styles.errorMsg}>{weatherSelector?.message}</h2>
      ) : null}
      {loading ? (
        <Loader />
      ) : (
        weatherSelector?.cod === 200 && <Info info={weatherSelector} />
      )}
    </div>
  );
};

export default Weather;
