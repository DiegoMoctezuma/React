import Contador from "./components/Contador";
import Frutas from "./components/Frutas";

const App = () => {
	const saludo = "String desde variable";
	const clasesObjeto = {
		primary: "text-primary",
		danger: "text-danger",
	};

	const user = true;

	const SaludoBienvenida = () => <h3 className="text-success">Bienvenido!</h3>;
	const SaludoDespedida = () => <h3 className="text-danger">Adiooos!</h3>;

	const funcionClick = (nombre) => {
		console.log(`Me diste Click, ${nombre}!!!!`);
	};

	const frutas = ["🍏", "🍓", "🍌"];

	return (
		<div className="container">
			<Contador />

			<p className={clasesObjeto.primary}>{saludo}</p>

			{user ? <SaludoBienvenida /> : <SaludoDespedida />}

			<Frutas frutasApp={frutas} />

			<button
				className="btn btn-primary"
				onClick={() => funcionClick("Rata 🐭")}
			>
				Click!!!
			</button>
		</div>
	);
};

export default App;
