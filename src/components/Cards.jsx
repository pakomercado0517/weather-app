import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { deleteCountry } from "../redux/actions";

function Cards() {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const cityDeleted = useSelector((state) => state.cityDeleted);

  useEffect(() => {
    setCountries(cities);
  }, [cities]);

  const onClose = (id) => {
    dispatch(deleteCountry(id));
  };

  console.log("cityId", cityDeleted);
  console.log("cities", cities);
  return (
    <div className={`row`}>
      {countries.length > 0 ? (
        countries.map((c) => {
          return (
            <div className={`col-sm-12 col-md-6 col-lg-4`}>
              <Card
                key={c.id}
                img={c.img}
                name={c.name}
                flag={c.flag}
                temp={c.temp}
                weather={c.weather}
                close={() => onClose(c.id)}
              />
            </div>
          );
        })
      ) : (
        <h1 className="h3 text-center"> Busca una ciudad para comenzar...</h1>
      )}
    </div>
  );
}

export default Cards;
