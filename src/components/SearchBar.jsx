import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux/actions";
import Swal from "sweetalert2";

function SearchBar() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);

  const onSearch = (e) => {
    e.preventDefault();
    try {
      dispatch(getCountry(city));
      setCity("");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: error,
        title: "Ciudad no encontrada!",
        text: "Asegurate de haber escrito correctamente tu ciudad. Intentalo nuevamente",
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div>
      <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   onSearch(city);
      //   setCity(" ");
      // }}
      >
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Ciudad..."
            value={city}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Agregar"
            className="btn btn-outline-success"
            onClick={onSearch}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
