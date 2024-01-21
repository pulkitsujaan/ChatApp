function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault();
    }
}

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const chatMessages = document.getElementById("chatMessages");

    const message = messageInput.value.trim();

    if (message !== "") {
        const newMessage = document.createElement("div");
        newMessage.className = "message";
        newMessage.textContent = "You: " + message;
        chatMessages.appendChild(newMessage);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
