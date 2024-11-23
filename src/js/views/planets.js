import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";


const planetImageMap = {
    '5f7254c11b7dfa00041c6fae': '1',
    '5f7254c11b7dfa00041c6faf': '2',
    '5f7254c11b7dfa00041c6fb0': '3',
    '5f7254c11b7dfa00041c6fb1': '4',
    '5f7254c11b7dfa00041c6fb2': '5',
    '5f7254c11b7dfa00041c6fb3': '6',
    '5f7254c11b7dfa00041c6fb4': '7',
    '5f7254c11b7dfa00041c6fb5': '8',
    '5f7254c11b7dfa00041c6fb6': '9',
    '5f7254c11b7dfa00041c6fb7': '10',
};

const initialState = {
    properties: {
        diameter: "",
        rotation_period: "",
        orbital_period: "",
        gravity: "",
        population: "",
        climate: "",
        terrain: "",
        surface_water: "",
        created: "",
        edited: "",
        name: "",
        url: ""
    },
    description: "",
    _id: "",
    uid: "",
    __v: ""
}

export const Planets = () => {
    const { store } = useContext(Context);
    const { planets } = store;
    const { id } = useParams();
    const [planet, setPlanet] = useState(initialState);

    useEffect(() => {
        const fetchPlanet = () => {
            const foundPlanet = planets.find(p => p.result._id === id);
            if (foundPlanet) {
                setPlanet(foundPlanet.result);
            }
        }
        fetchPlanet();
    }, [id, planets]);

    
    const imageId = planetImageMap[id] || '1'; 

    return (
        <div className="character-container">
            <div className="character-header">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${imageId}.jpg`}
                    alt={planet.properties.name}
                    className="character-image"
                />
                <div className="character-info">
                    <h1 className="character-name">{planet.properties.name}</h1>
                    <p className="character-history">{planet.description || "No description available."}</p>
                </div>
            </div>

            <div className="character-details">
                <div className="details-column">
                    <h3>Climate</h3>
                    <p>{planet.properties.climate}</p>
                </div>

                <div className="details-column">
                    <h3>Terrain</h3>
                    <p>{planet.properties.terrain}</p>
                </div>

                <div className="details-column">
                    <h3>Population</h3>
                    <p>{planet.properties.population || "Unknown"}</p>
                </div>

                <div className="details-column">
                    <h3>Orbital Period</h3>
                    <p>{planet.properties.orbital_period}</p>
                </div>

                <div className="details-column">
                    <h3>Rotation Period</h3>
                    <p>{planet.properties.rotation_period}</p>
                </div>

                <div className="details-column">
                    <h3>Diameter</h3>
                    <p>{planet.properties.diameter}</p>
                </div>
            </div>
        </div>
    );
};

export default Planets;