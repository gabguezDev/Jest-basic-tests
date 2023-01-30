import {
	getHeroeById,
	getHeroesByOwner,
} from "../../src/testing-bases/08-imp-exp";

describe("Test over 08-imp-exp", () => {
	test("getHeroeById must return a heroe by id", () => {
		const id = 1;

		const expectedHero = {
			id: 1,
			name: "Batman",
			owner: "DC",
		};

		const obtainedHero = getHeroeById(id);

		expect(obtainedHero).toEqual(expectedHero);
	});
	test("getHeroeById must return undefined when id is > 5", () => {
		const id = 6;

		const obtainedHero = getHeroeById(id);

		expect(obtainedHero).toBeFalsy();
	});
	test("getHeroesByOwner must return a heroes array by DC owner with length 3", () => {
		const owner = "DC";

		const expectedHeroDC = [
			{
				id: 1,
				name: "Batman",
				owner: "DC",
			},
			{
				id: 3,
				name: "Superman",
				owner: "DC",
			},
			{
				id: 4,
				name: "Flash",
				owner: "DC",
			},
		];

		const obtainedHero = getHeroesByOwner(owner);

		expect(obtainedHero).toEqual(expectedHeroDC);
		expect(obtainedHero.length).toBe(3);
	});
	test("getHeroesByOwner must return a heroes array by Marvel owner with length 2", () => {
		const owner = "Marvel";

		const expectedHeroMarvel = [
			{
				id: 2,
				name: "Spiderman",
				owner: "Marvel",
			},
			{
				id: 5,
				name: "Wolverine",
				owner: "Marvel",
			},
		];

		const obtainedHero = getHeroesByOwner(owner);

		expect(obtainedHero).toEqual(expectedHeroMarvel);
		expect(obtainedHero.length).toBe(2);
	});
	test("getHeroesByOwner must return [] when owner is not DC or MARVEl", () => {
		const owner = 6;

		const obtainedHero = getHeroesByOwner(owner);

		// console.log(obtainedHero);

		expect(obtainedHero).toEqual([]);
	});
});
