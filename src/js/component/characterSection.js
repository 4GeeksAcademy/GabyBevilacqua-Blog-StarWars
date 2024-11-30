import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import charactersImg from '../../img/characters.png';
import "../../styles/home.css";

export const CharacterSection = () => {
	const { store, actions } = useContext(Context);
	const { people } = store;

	const characterImageMap = {
		'5f63a36eee9fd7000499be411': '1',
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

	return (

		<div className="section">
			<img src={charactersImg} alt="Characters" className="section-title" />
			<div className="card-container">
				{people.map((person, index) => {
					const characterId = person.result._id;
					const imageId = characterImageMap[characterId] || '1';

					return (
						<div className="text-center" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img
									src={`https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`}
									className="card-img-top"
									alt="Character"
								/>
								<div className="card-body">
									<h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left', color: 'white' }}>
										Name: {person.result.properties.name}
									</h5>
									<p className="card-text" style={{ textAlign: 'left', color: 'white' }}>Gender: {person.result.properties.gender}</p>
									<p className="card-text" style={{ textAlign: 'left', color: 'white' }}>Hair-color: {person.result.properties.hair_color}</p>
									<p className="card-text" style={{ textAlign: 'left', color: 'white' }}>Eye-color: {person.result.properties.eye_color}</p>
									<div className="buttons d-flex justify-content-between">
										<NavLink
											to={`/character/${person.result._id}`}
											className="btn btn-secondary">
											Learn More!
										</NavLink>
										<button
											onClick={() => actions.modalFavorites(person)}
											className={`btn btn-custom ${store.favorites.includes(person) ? 'btn-custom' : ''}`}>
											<i className={`fa ${store.favorites.includes(person) ? 'fa-heart' : 'fa-heart-o'}`}></i>
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
}



