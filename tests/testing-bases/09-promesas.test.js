import { getHeroeByIdAsync } from "../../src/testing-bases/09-promesas";

describe("Test over 09-promesas", () => {
	test("getHeroeByIdAsync must return Batman when id = 1", done => {
		const id = 1;

		const expectedHero = {
			id: 1,
			name: "Batman",
			owner: "DC",
		};

		getHeroeByIdAsync(id).then(hero => {
			expect(hero).toEqual(expectedHero);

			done();
		});
	});
	test("getHeroeByIdAsync must return an Error message when id = 100", done => {
		const id = 100;

		const expectedResponse = "No se pudo encontrar el héroe";
		getHeroeByIdAsync(id).catch(err => {
			expect(err).toBe(expectedResponse);

			done();
		});
	});
});
