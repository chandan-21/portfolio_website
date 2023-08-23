function myFunction(y) {
    y.classList.toggle("change");
    var x = document.getElementById("resp");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }

}