/* 
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import starplata from '../../img/starplata.png';
import planetsImg from '../../img/planets.png';
import "../../styles/home.css";

export const PlanetSection = () => {
	const { store, actions } = useContext(Context);
	const { planets } = store;

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

    return(
    
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
											<h5 className="card-title" style={{ fontWeight: 'bold', textAlign: 'left', color: 'white' }}>Name: {planet.result.properties.name}</h5>
											<p className="card-text" style={{ textAlign: 'left', color: 'white' }}>Climate: {planet.result.properties.climate}</p>
											<p className="card-text" style={{ textAlign: 'left', color: 'white' }}>Gravity: {planet.result.properties.gravity}</p>
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
    
    )


*/