import {
	getUser,
	getUsuarioActivo,
} from "../../src/testing-bases/05-funciones";

describe("Pruebas sobre 05-funciones", () => {
	test("getUser debe retornar un objeto", () => {
		const expectedUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

		const gotUser = getUser();

		expect(expectedUser).toEqual(gotUser);
	});

	test("getUsuarioActivo debe retornar un objeto", () => {
		const userName = "RAPUNSEL";

		const expectedUser = {
			uid: "ABC567",
			username: userName,
		};

		const gotUser = getUsuarioActivo(userName);

		expect(expectedUser).toEqual(gotUser);
	});
});
