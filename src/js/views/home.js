import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from '../../img/starWarsLogo.png';
import charactersImg from '../../img/characters.png';
import planetsImg from '../../img/planets.png';
import vehiclesImg from '../../img/vehicles.png';
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { people, vehicles, planets } = store;

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
// https://starwars-visualguide.com/assets/img/planets/11.jpg
	return (
		<div className="home-container">
			<img src={starWarsLogo} alt="Star Wars Logo" className="star-wars-logo" />
			<div className="sections">
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
											<h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left' }}>
												Name: {person.result.properties.name}
											</h5>
											<p className="card-text" style={{ textAlign: 'left' }}>Gender: {person.result.properties.gender}</p>
											<p className="card-text" style={{ textAlign: 'left' }}>Hair-color: {person.result.properties.hair_color}</p>
											<p className="card-text" style={{ textAlign: 'left' }}>Eye-color: {person.result.properties.eye_color}</p>
											<div className="buttons d-flex justify-content-between">
												<NavLink
													to={`/character/${person.result._id}`}
													className="btn btn-secondary">
													Learn More!
												</NavLink>
												<button
													onClick={() => actions.modFavorites(person)}
													className={`btn btn-danger ${store.favorites.includes(person) ? 'favorited' : ''}`}>
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

				<div className="section">
					<img src={planetsImg} alt="Planets" className="section-title" />
					<div className="card-container">
						{planets.map((planet, index) => {
							const planetId = planet.result._id;
							const imageId = planetImageMap[planetId] || '1';

							return (
								<div className="text-center" key={index}>
									<div className="card" style={{ width: "18rem" }}>
										<img
											src={`https://starwars-visualguide.com/assets/img/planets/${imageId}.jpg`} // Usa el imageId
											className="card-img-top"
											alt="Planet"
										/>
										<div className="card-body">
											<h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left' }}>Name: {planet.result.properties.name}</h5>
											<p className="card-text" style={{ textAlign: 'left' }}>Climate: {planet.result.properties.climate}</p>
											<p className="card-text" style={{ textAlign: 'left' }}>Gravity: {planet.result.properties.gravity}</p>
											<div className="buttons d-flex justify-content-between">
												<NavLink
													to={`/planet/${planet.result._id}`}
													className="btn btn-secondary">
													Learn More!
												</NavLink>
												<button
													onClick={() => actions.modFavorites(planet)}
													className={`btn btn-danger ${store.favorites.includes(planet) ? 'favorited' : ''}`}>
													<i className={`fa ${store.favorites.includes(planet) ? 'fa-heart' : 'fa-heart-o'}`}></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

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
											<h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left' }}>Name: {vehicle.result.properties.name}</h5>
											<p className="card-text" style={{ textAlign: 'left' }}>Class: {vehicle.result.properties.vehicle_class}</p>
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
			</div>
		</div>
	);
};