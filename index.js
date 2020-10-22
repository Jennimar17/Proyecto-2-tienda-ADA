const botonVistaComprimida = document.getElementById("button-view-zip")
const botonVistaExpandida = document.getElementById("button-view-expand")
const seccionTarjetasComprimidas = document.querySelector(".products-cards-section")
const seccionTarjetasExpandidas = document.querySelector(".products--cards--section")
const bodyDelDocumento = document.querySelector(".body")

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
const primerOverlay = document.getElementById("overlay--first")



seccionCestaLlena.classList.add("ocultar")
primerOverlay.classList.add("ocultar")

botonAbrirCesta.onclick = () => {
    bodyDelDocumento.classList.add("overflow-hidden")
    seccionCestaLlena.classList.remove("ocultar")
    primerOverlay.classList.remove("ocultar")


}

botonCerrarCesta.onclick = () => {
    bodyDelDocumento.classList.remove("overflow-hidden")
    seccionCestaLlena.classList.add("ocultar")
    primerOverlay.classList.add("ocultar")

}

const seccionformularioDeCompra = document.querySelector(".pay-form-section")
const botonComprarDeLaCesta = document.getElementById("button-shop-cest")
const botonCancelarCompraDelFormulario = document.getElementById("cancel-pay")
const botonVaciarCesta = document.getElementById("button-empty-cest")
const modalAlerta = document.querySelector(".modal--alert")
const botonCancelarDelModalAlerta = document.getElementById("modal--button--cancel")
const botonVaciarDelModalAlerta = document.getElementById("modal--button")
const segundoOverlay = document.getElementById("overlay--second")

segundoOverlay.classList.add("ocultar")

seccionformularioDeCompra.classList.add("ocultar")
modalAlerta.classList.add("ocultar")

botonComprarDeLaCesta.onclick = () => {
    seccionformularioDeCompra.classList.remove("ocultar")
    segundoOverlay.classList.remove("ocultar")

}

botonCancelarCompraDelFormulario.onclick = () => {
    seccionformularioDeCompra.classList.add("ocultar")
    segundoOverlay.classList.add("ocultar")
}

botonVaciarCesta.onclick = () => {
    modalAlerta.classList.remove("ocultar")
    segundoOverlay.classList.remove("ocultar")

}

botonCancelarDelModalAlerta.onclick = () => {
    modalAlerta.classList.add("ocultar")
    segundoOverlay.classList.add("ocultar")
}

botonVaciarDelModalAlerta.onclick = () => {
    modalAlerta.classList.add("ocultar")
    segundoOverlay.classList.add("ocultar")

}

const botonAbrirFiltro = document.getElementById("button--view--aside--filters")
const botonCerrarFiltro = document.getElementById("button--close--filters")
const asideFiltrosDerecha = document.querySelector(".aside--container--right")

asideFiltrosDerecha.classList.add("ocultar")

botonAbrirFiltro.onclick = () => {
    bodyDelDocumento.classList.add("overflow-hidden")
    asideFiltrosDerecha.classList.remove("ocultar")
    primerOverlay.classList.remove("ocultar")


}

botonCerrarFiltro.onclick = () => {
    bodyDelDocumento.classList.remove("overflow-hidden")
    asideFiltrosDerecha.classList.add("ocultar")
    primerOverlay.classList.add("ocultar")
}

const buscarProductosIzquierda = document.querySelector("#search-box-input-left")
const buscarProductosDerecha = document.querySelector("#search-box-input-right")
const tarjetasDeProductosContraida = document.getElementsByClassName("product-card")
const tarjetasDeProductosExpandida = document.getElementsByClassName("product--card--expand")
const filtrarPorReview = document.getElementsByClassName("filters-checkbox-review")
const botonBorrarFiltros = document.getElementById("button-clean-filters")
const botonBorrarFiltrosDerecha = document.getElementById("button-clean-filters-right")
const filtrarPorCategoria = document.getElementsByClassName("filters-checkbox-category")
const categoriaCheckbox = document.querySelectorAll(".filters-checkbox-category")
const reviewCheckbox = document.querySelectorAll(".filters-checkbox-review")
console.log(botonBorrarFiltros)

buscarProductosIzquierda.oninput = () => {
    for (let tarjeta of tarjetasDeProductosContraida) {
        const titulo = tarjeta.dataset.nombre
        const busquedaIzquierda = buscarProductosIzquierda.value
        if (titulo.includes(busquedaIzquierda)) {
            tarjeta.classList.remove("ocultar")
        } else {
            tarjeta.classList.add("ocultar")
        }
    }

    for (let tarjeta of tarjetasDeProductosExpandida) {
        const titulo = tarjeta.dataset.nombre
        const busquedaIzquierda = buscarProductosIzquierda.value
        if (titulo.includes(busquedaIzquierda)) {
            tarjeta.classList.remove("ocultar")
        } else {
            tarjeta.classList.add("ocultar")
        }
    }
}

buscarProductosDerecha.oninput = () => {
    for (let tarjeta of tarjetasDeProductosContraida) {
        const titulo = tarjeta.dataset.nombre
        const busquedaDerecha = buscarProductosDerecha.value
        if (titulo.includes(busquedaDerecha)) {
            tarjeta.classList.remove("ocultar")
        } else {
            tarjeta.classList.add("ocultar")
        }
    }
}

for (let checkbox of filtrarPorReview) {
    checkbox.onclick = () => {
        filtrarTarjetasReview()
    }
}


const hayCheckboxSeleccionado = () => {
    for (let checkbox of filtrarPorReview) {
        if (checkbox.checked) {
            return true
        }
    }
}


const conincideCheckboxYTarjeta = tarjeta => {
    const review = tarjeta.dataset.review
    for (let checkbox of filtrarPorReview) {
        if (checkbox.value === review && checkbox.checked) {
            return true
        }
    }
}


const filtrarTarjetasReview = () => {
    for (let tarjeta of tarjetasDeProductosContraida) {
        tarjeta.classList.add("ocultar")
        if (hayCheckboxSeleccionado()) {
            if (conincideCheckboxYTarjeta(tarjeta)) {
                tarjeta.classList.remove("ocultar")
            }
        } else {
            tarjeta.classList.remove("ocultar")
        }
    }

    for (let tarjeta of tarjetasDeProductosExpandida) {
        tarjeta.classList.add("ocultar")
        if (hayCheckboxSeleccionado()) {
            if (conincideCheckboxYTarjeta(tarjeta)) {
                tarjeta.classList.remove("ocultar")
            }
        } else {
            tarjeta.classList.remove("ocultar")
        }
    }

}


for (let checkbox of filtrarPorCategoria) {
    checkbox.onclick = () => {
        filtrarTarjetasCategoria()
    }
}

const hayCheckboxSeleccionadoCategoria = () => {
    for (let checkbox of filtrarPorCategoria) {
        if (checkbox.checked) {
            return true
        }
    }
}

const conincideCheckboxCategoriaYTarjeta = tarjeta => {
    const categoria = tarjeta.dataset.categoria
    for (let checkbox of filtrarPorCategoria) {
        if (checkbox.value == categoria && checkbox.checked) {
            return true
        }
    }
}

const filtrarTarjetasCategoria = () => {
    for (let tarjeta of tarjetasDeProductosContraida) {
        tarjeta.classList.add("ocultar")
        if (hayCheckboxSeleccionadoCategoria()) {
            if (conincideCheckboxCategoriaYTarjeta(tarjeta)) {
                tarjeta.classList.remove("ocultar")
            }
        } else {
            tarjeta.classList.remove("ocultar")
        }
    }
    for (let tarjeta of tarjetasDeProductosExpandida) {
        tarjeta.classList.add("ocultar")
        if (hayCheckboxSeleccionadoCategoria()) {
            if (conincideCheckboxCategoriaYTarjeta(tarjeta)) {
                tarjeta.classList.remove("ocultar")
            }
        } else {
            tarjeta.classList.remove("ocultar")
        }
    }
}



botonBorrarFiltros.onclick = () => {
    buscarProductosIzquierda.value = ""
    for (let checkbox of reviewCheckbox) {
        checkbox.checked = false
    }
    for (let checkbox of categoriaCheckbox) {
        checkbox.checked = false
    }
    seccionTarjetasComprimidas.classList.remove("ocultar")
}

botonBorrarFiltrosDerecha.onclick = () => {
    buscarProductosDerecha.value = ""
    for (let checkbox of reviewCheckbox) {
        checkbox.checked = false
    }
    for (let checkbox of categoriaCheckbox) {
        checkbox.checked = false
    }
    seccionTarjetasComprimidas.classList.remove("ocultar")
}

const formularioDeCompra = document.querySelector(".total-subtotal")
const subtotalDeCompra = document.getElementById("subtotal")
const recargoDeTarjetaDeCredito = document.getElementById("credit-card-charge")
const recargoDeEnvio = document.getElementById("ship-charge")
const totalDeCompra = document.getElementById("total")
const opcionEnvio = document.getElementById("ship-option")
const opcionDescuento = document.getElementById("discount-option")
const opcionEfectivo = document.getElementById("cash-option")
const opcionTarjeta = document.getElementById("credit-card")

const recargo = 0.8
const subtotal = 37000
const total = 37000
const envio = 50


opcionEfectivo.onclick = () => {
    totalDeCompra.textContent = `Total $ ${total}`

}

opcionTarjeta.onclick = () => {
    recargoDeTarjetaDeCredito.textContent = `Recargo $ ${subtotal + recargo}`
    totalDeCompra.textContent = `Total $ ${total + subtotal + recargo}`
}


opcionEnvio.onclick = () => {
    recargoDeEnvio.textContent = `Envío $  ${envio}`
    totalDeCompra.textContent = `Total $ ${total + envio + subtotal + recargo}`
}