import { getImagen } from "../../src/testing-bases/11-async-await";

describe("Test over 11-async-await", () => {
	test("getImagen must return image url", async () => {
		const url = await getImagen();

		expect(typeof url).toBe("string");
	});
});
