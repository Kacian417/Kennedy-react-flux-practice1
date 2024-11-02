const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			cars: [
				{
					make: "honda",
					model: "Civic",
					year: "1996"
				},
				{
					make: "Toyota",
					model: "Tacoma",
					year: "2010"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			displayCars: () => {
				const store = getStore();

				
				console.log("You own a ")
				for (let index = 0; index < store.cars.length; i++) {
					console.log(store.cars[index].model)
				}
			}
		}
	};
};

export default getState;
