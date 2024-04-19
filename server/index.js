const http = require("http").createServer();

const io = require("socket.io")(http, {
	cors: { origin: "*" },
});

io.on("connection", (socket) => {
	console.log("Se conecto un usuario");

	socket.on("message", (message) => {
		console.log(message);
		io.emit("message", [
			`${socket.id.substr(0, 2)}: ${message}`,
			new Date().toLocaleString(),
		]);
	});
});

http.listen(8080, () =>
	console.log("Escuchando en el puerto http://localhost:8080")
);
