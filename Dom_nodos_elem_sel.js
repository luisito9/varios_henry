console.log("aqui estoy");
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

console.log("Los 3 metodos anteriores ya no son usados, fueron reemplazados por");

console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("figure"));
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card").length);
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("ul li").length);
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelectorAll("figcaption"));