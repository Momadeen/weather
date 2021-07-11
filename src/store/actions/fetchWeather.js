export function fetchWeather(city) {
  return function (dispatch) {
    fetch(
      `api.openweathermap.org/data/2.5/weather?q=${city}&appid=66feb5fcc063233224c35e8320dd19af`
    )
      .then((res) => {
        return res.json();
      })
      .then((JsonRes) => {
        dispatch({ type: "FETCH_WEATHER", payload: JsonRes });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
