function pilComputer() {
    var pil = Math.random();
    if (pil < 0.33) return "gunting";
    if (pil > 0.33 && pil < 0.66) return "batu";
    return "kertas";
}

function hasil(pilPlayer, pilComputer) {
    if (pilPlayer == pilComputer) return "SERI!";
    if (pilPlayer == "gunting") return pilComputer == "kertas" ? "MENANG!" : "KALAH!";
    if (pilPlayer == "batu") return pilComputer == "gunting" ? "MENANG!" : "KALAH!";
    if (pilPlayer == "kertas") return pilComputer == "batu" ? "MENANG!" : "KALAH!";
}

var pil = document.querySelectorAll(".player img");
var hasilAkhir = document.getElementById("hasil");
var iconComputer = document.querySelector(".computer img");
var comp = document.getElementById("skorComputer");
var ply = document.getElementById("skorPlayer");
var skorP = 0,
    skorC = 0;

pil.forEach(function (e) {
    e.addEventListener("click", function () {
        var pilihanPlayer = e.className;
        var pilihanComputer = pilComputer();
        iconComputer.src = "img/" + pilihanComputer + ".png";
        var temp = hasil(pilihanPlayer, pilihanComputer);
        if (temp == "MENANG!") {
            skorP++;
        } else if (temp == "KALAH!") {
            skorC++;
        }
        comp.innerHTML = skorC;
        ply.innerHTML = skorP;
        hasilAkhir.innerHTML = temp;
    });
});
