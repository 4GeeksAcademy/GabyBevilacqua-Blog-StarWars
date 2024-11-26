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
                    <h2>"Los personajes icónicos de Star Wars: una galaxia de historias y emociones"</h2>
                    <p>"Star Wars, la épica saga galáctica creada por George Lucas, es reconocida tanto por su 
                        narrativa envolvente como por sus personajes inolvidables que trascienden generaciones. 
                        En el corazón de la historia está Luke Skywalker, el joven granjero que se convierte en 
                        un caballero Jedi destinado a restaurar el equilibrio en la galaxia. A su lado, la 
                        valiente princesa Leia Organa, líder de la Rebelión, simboliza la fuerza y la 
                        resistencia ante la tiranía del Imperio Galáctico. También está Han Solo, el carismático 
                        y astuto contrabandista que, junto a su fiel copiloto Chewbacca, aporta humor y 
                        humanidad a la lucha contra el mal. Juntos, enfrentan al temible Darth Vader, el oscuro y 
                        enigmático villano cuya redención se convierte en uno de los pilares emocionales de la saga."</p>
                    <p>"La franquicia también presenta una rica diversidad de personajes secundarios que han 
                        capturado los corazones de los fanáticos. Desde el sabio maestro Yoda, cuya filosofía 
                        Jedi sigue siendo una guía para muchos, hasta los adorables droides C-3PO y R2-D2, que 
                        aportan lealtad y comicidad, cada figura aporta una pieza única al vasto mosaico de Star Wars. 
                        En las historias más recientes, Rey, una valiente chatarrera con un pasado misterioso, 
                        y Kylo Ren, un atormentado heredero del lado oscuro, continúan explorando los temas de 
                        esperanza, redención y conflicto interno. Estos personajes no solo enriquecen el universo 
                        galáctico, sino que también nos invitan a reflexionar sobre el poder de la elección y la 
                        importancia de la esperanza frente a la adversidad."</p>
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