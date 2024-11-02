import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<>
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "pink" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "pink")}>
								Change Color
							</button>
						</li>
						</>
					);
				})}
			</ul>

			{
				/*create a map of items obtained from the store(demo, cars, own key) to display on the browser. REquire actions. to get data from the store. 
				Refer to line 14 above for example
				store.demo.map(
					return(jsx)
				) 
				*/ 
			}




			<br />
			<button className="btn btn-warning" onClick={() => {actions.displayCars()}}>Display Cars</button>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
