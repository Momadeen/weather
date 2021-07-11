import { useMemo } from "react";
import styles from "../../weather.module.scss";

const Info = ({ info }) => {
  const convertTemp = useMemo(() => {
    const temp = (info?.main?.temp - 273.15).toFixed(2);
    const maxTemp = (info?.main?.temp_max - 273.15).toFixed(2);
    const minTemp = (info?.main?.temp_min - 273.15).toFixed(2);

    return {
      temp,
      maxTemp,
      minTemp,
    };
  }, [info?.main?.temp, info?.main?.temp_max, info?.main?.temp_min]);

  console.log(convertTemp);
  return (
    <div className={styles.info}>
      <h2>
        {info?.name}, {info?.sys?.country}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${info?.weather[0]?.icon}@2x.png`}
        alt="icon"
      />
      <div className={styles.temps}>
        <h2 className={styles.tempNumber}>{convertTemp?.temp}</h2>
        <div className={styles.subTemps}>
          <h2 className={styles.tempNumber}>{convertTemp?.maxTemp}</h2>
          <h2 className={styles.tempNumber}>{convertTemp?.minTemp}</h2>
        </div>
      </div>
      <h2 className={styles.description}>{info?.weather[0]?.description}</h2>
    </div>
  );
};

export default Info;
