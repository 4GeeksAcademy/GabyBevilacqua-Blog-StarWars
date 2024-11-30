import React from "react";
import starplata from '../../img/starplata.png';
import "../../styles/home.css";
import { CharacterSection } from "../component/characterSection";
import { PlanetSection } from "../component/planetsSection";
import { VehicleSection } from "../component/vehiclesSection";

export const Home = () => {


	return (
		<div className="home-container">
			<img src={starplata} alt="Star Wars Logo" className="star-wars-logo" />
			<div className="sections">

				<CharacterSection />

				<PlanetSection />

				<VehicleSection />

			</div>
		</div>
	);
};