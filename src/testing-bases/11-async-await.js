// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
	try {
		const apiKey = "LpzM1u2koeP8gVplmNQ6cMVEJs3PUvIl";
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await resp.json();

		const { url } = data.images.original;

		const img = document.createElement("img");
		img.src = url;
		document.body.append(img);
	} catch (error) {
		// manejo del error
		// console.error(error);
		return "No se encontró la imagen";
	}
};

// getImagen();
