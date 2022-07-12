let primerParcial = parseInt (prompt("Ingresá la nota de tu primer parcial"));
let segundoParcial = parseInt (prompt("Ahora ingresá la nota de tu segundo parcial"));
let tercerParcial = parseInt (prompt("Por último, la nota del tercer parcial"));


function calculoNotas(primerParcial, segundoParcial, tercerParcial){
    return (primerParcial + segundoParcial + tercerParcial); 
}

let promedioNotas= calculoNotas(primerParcial, segundoParcial, tercerParcial) / 3;

if(promedioNotas >= 7){
    alert("Tu nota final es: " + promedioNotas + "." + " Felicitaciones! Promocionaste!")
}
else if (promedioNotas >= 4){
    alert("Tu nota final es: " + promedioNotas + "." + " Estás aprobado, pero te vas a final")
}
else { 
    alert("Tu nota final es: " + promedioNotas + "." + " Lo lamento, recursas la materia")
}

