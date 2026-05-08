document.getElementById("changeTextBtn").addEventListener("click", function () {
    const newMessage = document.createElement("p");
    newMessage.textContent = "You clicked the button! JavaScript is working.";
    document.getElementById("introduction").appendChild(newMessage);
});