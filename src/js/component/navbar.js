import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from '../../img/starWarsLogo.png';


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    return (
        <nav className="custom-navbar">
            <Link to="/">
                <img src={starWarsLogo} alt="Star Wars Logo" className="navbar-logo" />
            </Link>

            <div className="dropdown ml-auto">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos <span className="favorite-count">({favorites.length})</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {favorites.length > 0 ? (
                        favorites.map((fav, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                <span className="dropdown-item">
                                    {fav.result.properties.name}
                                </span>
                                <i
                                    className="fa fa-trash-o"
                                    style={{ cursor: "pointer", color: "bacl" }}
                                    onClick={() => actions.removeFavorite(fav)}
                                ></i>
                            </li>
                        ))
                    ) : (
                        <li><span className="dropdown-item">No hay favoritos</span></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};