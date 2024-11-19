const popup = document.getElementById("popup");
const close = document.getElementById("close");
const videoPopup1 = document.getElementById("videoPopup1");

popup.addEventListener("click", () => {
    videoPopup1.style.display = "block";
});

close.addEventListener("click", () => {
    videoPopup1.style.display = "none";
});
