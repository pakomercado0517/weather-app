import React from "react";
import { Link } from "react-router-dom";
import estilos from "./styles/Navbar.module.css";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark navHenry">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className={estilos.linkText}>
            <span className="text-white">
              {/* <img
                src="https://serv-io.surge.sh/static/media/ServIO.dbc1ec1d6cb612189058811740f155b5.svg"
                alt="logo"
                widrh="30"
                height="30"
              />{" "} */}
              Henry- Wheather App
            </span>
          </Link>
          <Link to="/about" className={estilos.linkText}>
            <span className="ml-5 text-white">About</span>
          </Link>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
