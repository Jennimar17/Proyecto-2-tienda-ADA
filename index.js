const botonVistaComprimida = document.getElementById("button-view-zip")
const botonVistaExpandida = document.getElementById("button-view-expand")
const seccionTarjetasComprimidas = document.querySelector(".products-cards-section")
console.log(seccionTarjetasComprimidas)
const seccionTarjetasExpandidas = document.querySelector(".products--cards--section")

seccionTarjetasExpandidas.classList.add("ocultar")

botonVistaExpandida.onclick = () => {
    seccionTarjetasExpandidas.classList.remove("ocultar")
    seccionTarjetasComprimidas.classList.add("ocultar")

}

botonVistaComprimida.onclick = () => {
    seccionTarjetasExpandidas.classList.add("ocultar")
    seccionTarjetasComprimidas.classList.remove("ocultar")
}