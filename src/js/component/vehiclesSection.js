/* 
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import starplata from '../../img/starplata.png';
import vehiclesImg from '../../img/vehicles.png';
import "../../styles/home.css";

export const PlanetSection = () => {
	const { store, actions } = useContext(Context);
	const { vehicles } = store;


const vehicleImageMap = {
        '5f63a160cf50d100047f97fc': '4',
        '5f63a160cf50d100047f97fd': '7',
        '5f63a160cf50d100047f97fe': '6',
        '5f63a160cf50d100047f97ff': '8',
        '5f63a160cf50d100047f9800': '14',
        '5f63a160cf50d100047f9801': '18',
        '5f63a160cf50d100047f9802': '16',
        '5f63a160cf50d100047f9803': '19',
        '5f63a160cf50d100047f9804': '20',
        '5f63a160cf50d100047f9805': '24',
    };

    return (
    
    <div className="section">
        <img src={vehiclesImg} alt="Vehicles" className="section-title" />
            <div className="card-container">
                {vehicles.map((vehicle, index) => {
                    const vehicleId = vehicle.result._id;
                     const imageId = vehicleImageMap[vehicleId] || '1';

                    return (
                        <div className="text-center" key={index}>
                            <div className="card" style={{ width: "23rem" }}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/vehicles/${imageId}.jpg`}
                                    className="card-img-top"
                                    alt="Vehicle"
                                />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left', color: 'white' }}>Name: {vehicle.result.properties.name}</h5>
                                    <p className="card-text" style={{ textAlign: 'left', color: 'white' }}>Class: {vehicle.result.properties.vehicle_class}</p>
                                    <div className="buttons d-flex justify-content-between">
                                        <NavLink
                                            to={`/vehicle/${vehicle.result._id}`}
                                            className="btn btn-secondary">
                                            Learn More!
                                        </NavLink>
                                        <button
                                            onClick={() => actions.modFavorites(vehicle)}
                                            className={`btn btn-danger ${store.favorites.includes(vehicle) ? 'favorited' : ''}`}>
                                            <i className={`fa ${store.favorites.includes(vehicle) ? 'fa-heart' : 'fa-heart-o'}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>   
    )

*/