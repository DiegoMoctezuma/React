import React from "react";

const Frutas = (props) => {
	return (
		<React.Fragment>
			<ul>
				{props.frutasApp.map((fruta, index) => (
					<li key={index}>{fruta}</li>
				))}
			</ul>
			<p>Hola Mundo!</p>
		</React.Fragment>
	);
};

export default Frutas;
