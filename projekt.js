var kontejner = document.createElement("div");
kontejner.setAttribute("id", "kontejner");
document.body.appendChild(kontejner);


var nadpis = document.createElement("h1");
nadpis.innerHTML = "Výpočet objemu krychle";
kontejner.appendChild(nadpis);


var popisek = document.createElement("p");
popisek.innerHTML = "Zadejte hodnoty:";
kontejner.appendChild(popisek);


var hranaLabel = document.createElement("label");
hranaLabel.setAttribute("for", "hrana");
hranaLabel.innerHTML = "<br>hrana krychle v (mm):";
kontejner.appendChild(hranaLabel);

var hranaInput = document.createElement("input");
hranaInput.setAttribute("type", "number");
hranaInput.setAttribute("id", "hrana");
kontejner.appendChild(hranaInput);


var tlacitko = document.createElement("button");
tlacitko.innerHTML = "Spočítej objem";
tlacitko.onclick = vypocet;
kontejner.appendChild(tlacitko);


var vysledekKontejner = document.createElement("div");
vysledekKontejner.setAttribute("id", "vysledek");
kontejner.appendChild(vysledekKontejner);


function vypocet() {
  var hrana = parseFloat(hranaInput.value);
  var objem = hrana * hrana * hrana;
  vysledekKontejner.innerHTML = "<br> Objem krychle v mm^3 je " + objem.toFixed(2);
}