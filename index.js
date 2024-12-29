function revealSurprise() {
    var x = document.getElementById("surprise");
    var revealBtn = document.getElementById("reveal-btn");
    if (x.style.display === "none") {
        x.style.display = "block";
        revealBtn.innerText = "Yay!!!! Scroll down."
    } else {
        x.style.display = "none";
        revealBtn.innerText = "Reveal Surprise"
    }
}
