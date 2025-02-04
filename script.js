
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");

openModal.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeModal.addEventListener("click", () => {
    overlay.style.display = "none";
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        overlay.style.display = "none";
    } else if (event.key === "Enter") {
        overlay.style.display = "block";
    }
});
