const box = document.getElementById("box");
const liveInput = document.getElementById("liveInput");
const typedText = document.getElementById("typedText");

// Mouseover and Mouseout
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "skyblue";
    box.textContent = "You're hovering!";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightgray";
    box.textContent = "Hover me!";
});

// Live typing using input event
liveInput.addEventListener("input", () => {
    typedText.textContent = "You typed: " + liveInput.value;
});

// Keydown example
document.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        box.style.backgroundColor = "red";
    } else if (event.key === "g") {
        box.style.backgroundColor = "green";
    } else if (event.key === "b") {
        box.style.backgroundColor = "blue";
    }
});
