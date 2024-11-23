import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";

const characterImageMap = {
    '5f63a36eee9fd7000499be42': '1',
    '5f63a36eee9fd7000499be43': '2',
    '5f63a36eee9fd7000499be44': '3',
    '5f63a36eee9fd7000499be45': '4',
    '5f63a36eee9fd7000499be46': '5',
    '5f63a36eee9fd7000499be47': '6',
    '5f63a36eee9fd7000499be48': '7',
    '5f63a36eee9fd7000499be49': '8',
    '5f63a36eee9fd7000499be4a': '9',
    '5f63a36eee9fd7000499be4b': '10',
};

const initialState = {
    properties: {
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
        eye_color: "",
        birth_year: "",
        gender: "",
        created: "",
        edited: "",
        name: "",
        homeworld: "",
        url: ""
    },
    description: "",
    _id: "",
    uid: "",
    __v: ""
}

export const Character = () => {
    const { store } = useContext(Context);
    const { people } = store;
    const { id } = useParams();
    const [character, setCharacter] = useState(initialState);

    useEffect(() => {
        const fetchPerson = () => {
            const foundPerson = people.find(person => person.result._id === id);
            if (foundPerson) {
                setCharacter(foundPerson.result);
            }
        }
        fetchPerson();
    }, [id, people]);

    
    const imageId = characterImageMap[id] || '1'; 

    return (
        <div className="character-container">
            <div className="character-header">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`}
                    alt={character.properties.name}
                    className="character-image"
                />
                <div className="character-info">
                    <h1 className="character-name">{character.properties.name}</h1>
                    <p className="character-history">{character.description || "No description available."}</p>
                </div>
            </div>

            <div className="character-details">
                <div className="details-column">
                    <h3>Gender</h3>
                    <p>{character.properties.gender}</p>
                </div>

                <div className="details-column">
                    <h3>Height</h3>
                    <p>{character.properties.height}</p>
                </div>

                <div className="details-column">
                    <h3>Mass</h3>
                    <p>{character.properties.mass}</p>
                </div>

                <div className="details-column">
                    <h3>Hair Color</h3>
                    <p>{character.properties.hair_color}</p>
                </div>

                <div className="details-column">
                    <h3>Eye Color</h3>
                    <p>{character.properties.eye_color}</p>
                </div>

                <div className="details-column">
                    <h3>Homeworld</h3>
                    <p>{character.properties.homeworld || "Unknown"}</p>
                </div>

                <div className="details-column">
                    <h3>Birth Year</h3>
                    <p>{character.properties.birth_year}</p>
                </div>
            </div>
        </div>
    );
};

export default Character;