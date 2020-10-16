const botonVistaComprimida = document.getElementById("button-view-zip")
const botonVistaExpandida = document.getElementById("button-view-expand")
const seccionTarjetasComprimidas = document.querySelector(".products-cards-section")
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

const seccionCestaLlena = document.querySelector(".items-cest-container")
const botonAbrirCesta = document.querySelector(".shopping-basket-section")
const botonCerrarCesta = document.getElementById("button-close-cest")

seccionCestaLlena.classList.add("ocultar")

botonAbrirCesta.onclick = () => {
    seccionCestaLlena.classList.remove("ocultar")
}

botonCerrarCesta.onclick = () => {
    seccionCestaLlena.classList.add("ocultar")
}