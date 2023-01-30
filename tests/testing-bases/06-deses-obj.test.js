import { usContext } from "../../src/testing-bases/06-deses-obj";

describe("Tests sobre 06-deses-obj ", () => {
	test("usContext function must return an object", () => {
		const input = {
			clave: "",
			nombre: "",
			edad: "",
			rango: "",
		};

		const expectedOutput = {
			nombreClave: input.clave,
			anios: input.edad,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		};

		expect(usContext(input)).toEqual(expectedOutput);
	});
});
