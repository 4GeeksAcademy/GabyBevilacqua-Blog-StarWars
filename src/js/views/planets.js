import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";


const planetImageMap = {
    '5f7254c11b7dfa00041c6fae': '11',
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
                    <h4>Climate : {planet.properties.climate}.</h4>
                    <h4>Terrain : {planet.properties.terrain}.</h4>
                    <h4>Population : {planet.properties.population || "Unknown"}.</h4>
                    <h4>Orbital Period : {planet.properties.orbital_period}.</h4>
                    <h4>Rotation Period : {planet.properties.rotation_period}.</h4>
                    <h4>Diameter : {planet.properties.diameter}.</h4>
                </div>
            </div>
        </div>
    );
};

export default Planets;