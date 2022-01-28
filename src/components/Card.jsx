import React, { useState } from "react";
import estilos from "./styles/Card.module.css";
import { Link } from "react-router-dom";
import climaStyle from "./styles/ClimaStyle.module.css";

function Card(props) {
  const countryImg = `http://openweathermap.org/img/wn/${props.img}@2x.png`;
  let celsiusTemp = `${Math.round(props.temp - 273.15)} C°`;
  let farenheitTemp = `${(Math.round(props.temp - 273.15) * 9) / 5 + 32} F°`;
  let kelvinTemp = `${Math.round(props.temp)} K°`;
  const [feelTemp, setFeelTemp] = useState(celsiusTemp);

  const handleTemp = () => {
    if (feelTemp === celsiusTemp) {
      setFeelTemp(farenheitTemp);
    } else if (feelTemp === farenheitTemp) {
      setFeelTemp(kelvinTemp);
    } else if (feelTemp === kelvinTemp) {
      setFeelTemp(celsiusTemp);
    }
  };

  const climaState = () => {
    if (
      props.weather === "Clear" &&
      props.img.charAt(props.img.length - 1) === "d"
    ) {
      return climaStyle.climaCaluroso;
    } else if (
      props.weather === "Clear" &&
      props.img.charAt(props.img.length - 1) === "n"
    ) {
      return climaStyle.calurosoNoche;
    }

    if (
      props.weather === "Clouds" &&
      props.img.charAt(props.img.length - 1) === "d"
    ) {
      return climaStyle.climaFrio;
    } else if (
      props.weather === "Clouds" &&
      props.img.charAt(props.img.length - 1) === "n"
    ) {
      return climaStyle.frioNoche;
    }
    if (
      props.weather === "Thunderstorm" ||
      props.weather === "Drizzle" ||
      props.weather === "Rain"
    )
      return climaStyle.climaLluvioso;

    if (props.weather === "Smoke") return climaStyle.smoke;

    if (
      props.weather === "Mist" &&
      props.img.charAt(props.img.length - 1) === "d"
    ) {
      return climaStyle.mist;
    } else if (
      props.weather === "Mist" &&
      props.img.charAt(props.img.length - 1) === "n"
    ) {
      return climaStyle.mistNoche;
    }

    if (!props.weather) return climaStyle.sinClima;
  };

  return (
    <div className={`${estilos.contenedor}`}>
      <div className={climaState()}>
        <div className={estilos.boton}>
          <button
            className={estilos.boton}
            name={props.id}
            onClick={props.close}
          >
            X
          </button>
        </div>
        <Link to={`/ciudad/`} className={estilos.linkText}>
          <h4 className="text-dark">{props.name}</h4>
        </Link>
        <div className={estilos.info}>
          <div>
            <h4 className={estilos.textMin} onClick={handleTemp}>
              {feelTemp}
            </h4>
          </div>
          <img className={estilos.cardImg} src={countryImg} alt={props.name} />
        </div>
        <img
          src={`https://flagcdn.com/64x48/${props.flag.toLowerCase()}.png`}
          alt="flag"
        />
      </div>
    </div>
  );
}

export default Card;
