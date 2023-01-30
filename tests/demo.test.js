describe("Test sobre el <DemoComponent />", () => {
	test("Esta prueba no debe fallar", () => {
		// 1. Inicialización
		const message1 = "Hola mundo";

		//2. Estímulo
		const message2 = message1.trim();

		//3. Observar el comportamiento esperado
		expect(message1).toBe(message2); // message1 === message2
	});
});
