const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const boton = document.getElementById("operac")

boton.addEventListener("click",() =>{
    let a = parseInt(n1.value)
    let b = parseInt(n2.value)
    resultados()
    alert("Calculando las operaciones con los números")  
})
function resultados(){
    let a = parseInt(n1.value)
    let b = parseInt(n2.value)
    let sRes = document.getElementById("resultados")
    let resultados = document.createElement("p")
    resultados.innerHTML = "La suma de los números es igual a " +suma(a,b) + ". La resta de los números es igual a " +resta(a,b) + " la multiplicación de los números es igual a " +multi(a,b) + ". La división de los números es igual a " +divis(a,b) + ". La potencia del número es igual a " +poten(a,b) + "."
    sRes.appendChild(resultados)
}
function suma(n1,n2){
    return n1 + n2
}
function resta(n1,n2){
    return n1 - n2
}
function multi(n1,n2){
    return n1 * n2
}
function divis(n1,n2){
    return n1 / n2
}
function poten(n1,n2){
    return n1 ** n2
}
