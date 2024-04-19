const socket = io("ws://localhost:8080");

socket.on("message", (text) => {
	const el = document.createElement("li");
	let msg = text.split(":");
	msg.shift();
	const header = text.split(":").splice(0, 1);
	el.innerHTML = `<label>${header}:</label><p>${msg}</p>`;
	document.getElementById("messages").prepend(el);
});

document.getElementById("send-btn").onclick = () => {
	const messageInputRef = document.getElementById("message-input");
	const text = messageInputRef.value;
	socket.emit("message", text);
	messageInputRef.value = "";
};
