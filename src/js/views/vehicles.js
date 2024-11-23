import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";


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

const initialState = {
    properties: {
        model: "",
        vehicle_class: "",
        manufacturer: "",
        length: "",
        cost_in_credits: "",
        crew: "",
        passengers: "",
        max_atmosphering_speed: "",
        cargo_capacity: "",
        consumables: "",
        name: "",
        url: ""
    },
    description: "",
    _id: "",
    uid: "",
    __v: ""
}

export const Vehicles = () => {
    const { store } = useContext(Context);
    const { vehicles } = store;
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(initialState);

    useEffect(() => {
        const fetchVehicle = () => {
            const foundVehicle = vehicles.find(v => v.result._id === id);
            if (foundVehicle) {
                setVehicle(foundVehicle.result);
            }
        }
        fetchVehicle();
    }, [id, vehicles]);


    const imageId = vehicleImageMap[id] || '4'; 
    return (
        <div className="character-container">
            <div className="character-header">
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${imageId}.jpg`}
                    alt={vehicle.properties.name}
                    className="character-image"
                />
                <div className="character-info">
                    <h1 className="character-name">{vehicle.properties.name}</h1>
                    <p className="character-history">{vehicle.description || "No description available."}</p>
                </div>
            </div>

            <div className="character-details">
                <div className="details-column">
                    <h3>Model</h3>
                    <p>{vehicle.properties.model}</p>
                </div>

                <div className="details-column">
                    <h3>Vehicle Class</h3>
                    <p>{vehicle.properties.vehicle_class}</p>
                </div>

                <div className="details-column">
                    <h3>Manufacturer</h3>
                    <p>{vehicle.properties.manufacturer}</p>
                </div>

                <div className="details-column">
                    <h3>Crew</h3>
                    <p>{vehicle.properties.crew}</p>
                </div>

                <div className="details-column">
                    <h3>Passengers</h3>
                    <p>{vehicle.properties.passengers}</p>
                </div>

                <div className="details-column">
                    <h3>Max Speed</h3>
                    <p>{vehicle.properties.max_atmosphering_speed}</p>
                </div>

                <div className="details-column">
                    <h3>Cost in Credits</h3>
                    <p>{vehicle.properties.cost_in_credits}</p>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;