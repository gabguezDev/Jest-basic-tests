import { getSaludo } from "../../src/testing-bases/02-template-string";

describe("Pruebas en el archivo 02-template-string", () => {
	test('getSaludo debe retornar "Hola María"', () => {
		const nombre = "María";
		const saludo = getSaludo(nombre);

		expect(saludo).toBe(`Hola ${nombre}`);
	});
});
