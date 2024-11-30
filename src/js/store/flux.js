const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithDelay = async (url) => {
	await delay(1000);
	return await fetch(url);
};

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: 'https://www.swapi.tech/api',
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			getObjectbyID: async (dataUrl) => {
				try {
					let response = await fetch(`${dataUrl}`)
					let data = await response.json()

					if (response.ok) {
						return data;
					} else {
						console.log(`Algo salio mal ${data}`)
					}
				} catch (error) {
					console.log(error);
				}
			},

			getAllPeople: async () => {
				try {
					let response = await fetchWithDelay(`${getStore().urlBase}/people`);

					if (!response.ok) {
						console.error(`Error en la solicitud: ${response.statusText}`);
						return;
					}

					let data = await response.json();
					let peopleInPage = await Promise.all(
						data.results.map(async (item) => {
							let dataUrl = item.url;
							return await getActions().getObjectbyID(dataUrl);
						})
					);
					setStore({ people: peopleInPage });
				} catch (error) {
					console.error("Error trayendo la info: ", error);
				}
			},

			getAllVehicles: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/vehicles`)
					let data = await response.json()

					if (response.ok) {
						let vehicleInPage = await Promise.all(
							data.results.map(async (item) => {
								let dataUrl = item.url;
								return await getActions().getObjectbyID(dataUrl);
							})
						);
						setStore({ vehicles: vehicleInPage });
					} else {
						console.log(`Respuesta de la funcion getAllVehicles: ${data}, ${response}`)
					}

				} catch (error) {
					console.log("Error trayendo la info: ", error)
				}
			},

			getAllPlanets: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/planets`)
					let data = await response.json()

					if (response.ok) {
						let planetInPage = await Promise.all(
							data.results.map(async (item) => {
								let dataUrl = item.url;
								return await getActions().getObjectbyID(dataUrl);
							})
						);
						setStore({ planets: planetInPage });
					} else {
						console.log(`Respuesta de la funcion getAllPlanets: ${data}, ${response}`)
					}

				} catch (error) {
					console.log("Error trayendo la info: ", error)
				}
			},
			modalFavorites: (fav) => {

				let store = getStore();
				let exists = store.favorites.some((item) => item.result._id == fav.result._id)

				if (exists) {
					let newFavorite = store.favorites.filter((item) => item.result._id != fav.result._id)
					setStore({
						favorites: newFavorite
					})

				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})

				}
			},

			deleteFavorite: (item) => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(fav => fav.result._id !== item.result._id);
				setStore({ favorites: updateFavorites });
			},
		}
	};
};

export default getState;
