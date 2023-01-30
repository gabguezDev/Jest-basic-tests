import { retornaArreglo } from "../../src/testing-bases/07-deses-arr";

describe("Pruebas sobre 07-deses-arr", () => {
	test("retornaArreglo debe retonar un arreglo con un string y un numero", () => {
		const [stringEsperado, numeroEsperado] = ["ABC", 123];

		const [stringObtenido, numeroObtenido] = retornaArreglo();

		expect(stringObtenido).toBe(stringEsperado);
		expect(numeroObtenido).toBe(numeroEsperado);
	});
});
