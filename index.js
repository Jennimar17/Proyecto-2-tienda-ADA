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

const seccionformularioDeCompra = document.querySelector(".pay-form-section")
const botonComprarDeLaCesta = document.getElementById("button-shop-cest")
const botonCancelarCompraDelFormulario = document.getElementById("cancel-pay")
const botonVaciarCesta = document.getElementById("button-empty-cest")
const modalAlerta = document.querySelector(".modal--alert")
const botonCancelarDelModalAlerta = document.getElementById("modal--button--cancel")
const botonVaciarDelModalAlerta = document.getElementById("modal--button")

seccionformularioDeCompra.classList.add("ocultar")
modalAlerta.classList.add("ocultar")

botonComprarDeLaCesta.onclick = () => {
    seccionformularioDeCompra.classList.remove("ocultar")
}

botonCancelarCompraDelFormulario.onclick = () => {
    seccionformularioDeCompra.classList.add("ocultar")
}

botonVaciarCesta.onclick = () => {
    modalAlerta.classList.remove("ocultar")
}

botonCancelarDelModalAlerta.onclick = () => {
    modalAlerta.classList.add("ocultar")
}

botonVaciarDelModalAlerta.onclick = () => {
    modalAlerta.classList.add("ocultar")
}