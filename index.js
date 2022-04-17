alert(
	"Este es un Algoritmo en el cual te mostrará la información de un determinado número de personas según tus necesidades y los datos ingresados por tu parte."
);

ciclo();
function ciclo() {
	let personas = prompt(
		"¿Cuántas personas deseas ingresar para personalizar su información?:"
	);
	if (personas != "" && personas != 0) {
		let numeroPersonas = parseInt(personas);
		for (let i = 0; i < numeroPersonas; i++) {
			let persona = prompt("¿Cuál es su nombre?");
			if (persona == "") {
				alert("No ingresaste ningun dato.");
			}
			let edad = prompt("¿Cuál es su edad?");
			if (edad == "") {
				alert("No ingresaste ningun dato.");
			}
			let profesion = prompt("¿Cuál es su profesion?");
			if (profesion == "") {
				alert("No ingresaste ningun dato.");
			}
			if (persona == "" && edad == "" && profesion == "") {
				alert(
					"No ingresaste ningun valor en ninguno de los tres campos, se te regresará al inicio si cometiste algun error."
				);
				ciclo();
			}
			console.log(persona, edad, profesion);
		}
	} else {
		alert("Ha ocurrido un error, por favor intentalo de nuevo.");
		ciclo();
	}
}
