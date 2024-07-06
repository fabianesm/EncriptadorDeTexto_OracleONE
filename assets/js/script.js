/*

LLaves de encriptación:

a -> ai
e -> enter
i -> imes
o -> ober
u -> ufat

*/

const encriptar = document.getElementById("button_encriptar");
const desencriptar = document.getElementById("button_desencriptar");
const copy = document.getElementById("button_copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const muneco = document.getElementById("muneco");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Ingrese el texto aquí";
	muneco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	muneco.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

// Validación del texto ingresado por el usuario
function esTextoValido(texto) {
	const regex = /^[a-z\s.,!?¿¡]*$/; // Permite letras minúsculas, espacios y signos de puntuación
	const tieneAcentosOMayusculas = /[áéíóúÁÉÍÓÚA-Z]/;
	return regex.test(texto) && !tieneAcentosOMayusculas.test(texto);
}

// Encriptación del texto
encriptar.addEventListener('click', () => {
	const texto = textoInicial.value;

	if (texto != "") {
		if (!esTextoValido(texto)) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "El texto solo debe contener letras minúsculas y sin acentos.",
				showClass: {
					popup: `
					  animate__animated
					  animate__fadeInUp
					  animate__faster
					`
				  },
				  hideClass: {
					popup: `
					  animate__animated
					  animate__fadeOutDown
					  animate__faster
					`
				  }
			  });
			reset();
		} else {
			function encript(newtext) {
				for (let i = 0; i < remplazar.length; i++) {
					if (newtext.includes(remplazar[i][0])) {
						newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
					}
				}
				return newtext;
			}
			remplace(encript(texto));
		}
	} else {
		Swal.fire({
			icon: "warning",
			title: "Ningún mensaje fue encontrado",
			text: "Ingresa el texto que desees encriptar.",
			showClass: {
				popup: `
				  animate__animated
				  animate__fadeInUp
				  animate__faster
				`
			  },
			  hideClass: {
				popup: `
				  animate__animated
				  animate__fadeOutDown
				  animate__faster
				`
			  }
		  });
		reset();
	}
});

// Desencriptación del texto
desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value;

	if (texto != "") {
		if (!esTextoValido(texto)) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "El texto solo debe contener letras minúsculas y sin acentos.",
				showClass: {
					popup: `
					  animate__animated
					  animate__fadeInUp
					  animate__faster
					`
				  },
				  hideClass: {
					popup: `
					  animate__animated
					  animate__fadeOutDown
					  animate__faster
					`
				  }
			  });
			reset();
		} else{
			function desencript(newtext) {
				for (let i = 0; i < remplazar.length; i++) {
					if (newtext.includes(remplazar[i][1])) {
						newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
					};
				};
				return newtext;
			};
			remplace(desencript(texto));
		}
	} else {
		Swal.fire({
			icon: "warning",
			title: "Ningún mensaje fue encontrado",
			text: "Ingresa el texto que desees desencriptar.",
			showClass: {
				popup: `
				  animate__animated
				  animate__fadeInUp
				  animate__faster
				`
			  },
			  hideClass: {
				popup: `
				  animate__animated
				  animate__fadeOutDown
				  animate__faster
				`
			  }
		  });
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	Swal.fire({
		icon: "success",
		title: "¡Perfecto!",
		text: "El texto ha sido copiado.",
		showClass: {
			popup: `
			  animate__animated
			  animate__fadeInUp
			  animate__faster
			`
		  },
		  hideClass: {
			popup: `
			  animate__animated
			  animate__fadeOutDown
			  animate__faster
			`
		  }
	  });
	reset();
});

//auto ajuste de textarea
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});