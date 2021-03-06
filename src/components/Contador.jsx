import React, { useState } from "react";

const Contador = () => {
	const [contador, setContador] = useState(0);

	const aumentar = () => {
		setContador(contador + 1);
		console.log(contador);
	};

	return (
		<React.Fragment>
			<h2>Contador</h2>
			<h3>{contador}</h3>
			<button className="btn btn-dark" onClick={aumentar}>
				Aumentar!!!
			</button>
		</React.Fragment>
	);
};

export default Contador;
