import axios from "axios";
import Swal from "sweetalert2";
import apiKey from "./key";
export const GET_COUNTRY = "GET_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";

export const getCountry = (ciudad) => async (dispatch) => {
  const res = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
  );
  const apiRes = res.data;
  console.log("res.data", res.data);
  try {
    if (res) {
      const obj = {
        min: apiRes.main.temp_min,
        max: apiRes.main.temp_max,
        img: apiRes.weather[0].icon,
        id: apiRes.id,
        wind: apiRes.wind.speed,
        temp: apiRes.main.temp,
        name: apiRes.name,
        flag: apiRes.sys.country,
        weather: apiRes.weather[0].main,
        clouds: apiRes.clouds.all,
        latitud: apiRes.coord.lat,
        longitud: apiRes.coord.lon,
      };
      dispatch({
        type: GET_COUNTRY,
        payload: obj,
      });
    } else {
      Swal.fire({
        icon: error,
        title: "Ciudad no encontrada",
        text: "Verifica que hayas escrito correctamente la ciudad...",
        showConfirmButton: "Intentalo de nuevo",
      });
    }
  } catch (error) {
    console.log("error", error);
    Swal.fire({
      icon: error,
      title: "Ciudad no encontrada",
      text: "Verifica que hayas escrito correctamente la ciudad...",
      showConfirmButton: "Intentalo de nuevo",
    });
  }
};

export const deleteCountry = (id) => (dispatch) => {
  dispatch({
    type: DELETE_COUNTRY,
    payload: id,
  });
};
