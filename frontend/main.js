const socket = io("ws://localhost:8080");

socket.on("message", (text) => {
	const el = document.createElement("li");
	let msg = text[0].split(":");
	msg.shift();
	const header = text[0].split(":").splice(0, 1);
	el.innerHTML = `<label>${header}:</label><div><p>${msg}</p><p>${
		text[1].split(" ")[1]
	}</p></div>`;
	document.getElementById("messages").prepend(el);
});

document.getElementById("send-btn").onclick = () => {
	const messageInputRef = document.getElementById("message-input");
	const text = messageInputRef.value;
	socket.emit("message", text);
	messageInputRef.value = "";
};
