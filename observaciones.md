Querida Jenni, 

Qué hermosa quedó tu tienda. Me encanta la temática y la elección de colores. Como con tu ultimo trabajo, lograste respetar el diseño propuesto y a la vez hacerlo propio, dando un producto que cumple las consignas y además se siente muy original. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes son adecuados y utilizas bien las etiquetas aria. 

### Filtros y búsqueda

Tus filtros funcionan correctamente uno a uno, pero no podemos hacer mas de una busqueda a la vez. Esto ocurre porque tu input, tu filtro de categorias y tu filtro por estrellas tienen tres funciones diferentes asociadas. Cuando hago click en una categoria, se produce el filtro por categorias correctamente. Pero cuando luego hago click en una estrella, se hace el filtro por estrellas y tu codigo no tiene manera de darse cuenta de que yo esperaba filtrar por categorias y estrellas a la vez. 
Esto se soluciona haciendo que las tres cosas, input, categorias y estrellas, tengan la misma funcion asociada. En la clase 32, identificamos esta funcion general como filtrarTarjetas, y es el nombre que usaré de ejemplo aca. 

```js
inputSearch.oninput = () => {
    filtrarTarjetas()
}


for (let checkboxCategory of categoryFilters) {
  checkboxCategory.oninput = () => {
      filtrarTarjetas()
  }
}

for (let starsCheckbox of starsFilters) {
  starsCheckbox.oninput = () => {
      filtrarTarjetas()
  }
}
```

Asi, en lugar de llamar cada filtro a una funcion distinta (si apretamos los checkbox se llama a la funcion que revisa los checkbox y nada mas), lo que hacemos es llamar a la misma funcion toda vez que se hace click en un filtro, o se escribe algo en el input. Hacemos esto para que esa funcion, filtrarTarjetas, pueda revisar *todos* los filtros. 

Otro problema es que la cantidad señalada no se actualiza con los filtros. Para hacerlo, debemos contar cuantos productos se muestran o no, es decir, cuantas tarjetas tienen la clase "ocultar" nos va a decir cuantas estan ocultas. 

Al momento de hacer click en algun filtro, podemos llamar a una funcion "contarProductosMostrados". En esa funcion
- Seleccionamos el mensaje de productos mostrados
- Contamos cuantas tarjetas ocultas hay
- Actualizamos el mensaje con el total de tarjetas menos las tarjetas ocultas. 

```js
const contarProductosMostrados = () => {
    const mensajeProductosMostrados = document.querySelector(".filters-results-container > p")
    const tarjetasOcultas = document.querySelectorAll(".product-card.ocultar")
    const totalTarjetas = 12

    mensajeProductosMostrados.textContent = `Mostrando ${totalTarjetas - tarjetasOcultas.length} productos de 12`
}

```

### Carrito

Tu carrito esta bien maquetado, muy hermoso, siguiendo todas las pautas. 

### Checkout

Todo perfecto a nivel maquetado. El formulario esta muy bien, aunque noto que tus label son iguales para los radios y para los checkbox, lo que tiene la consecuencia de que hacer click en la frase "tarjeta de descuento" me marca la opcion "Necesito envio". Los checkbox son muy pequeños, y ampliarlos para que puedan marcarse con el label es muy importante para quienes tienen dificultades con la motricidad fina. Un error muy pequeño en el campo de email (pusiste type="mail" en lugar de type="email") hace que no funcione la validacion de mails: podrias revisar eso. 

### Misc 

Tu HTML esta perfecto. Excelente la indentacion, claro, completo, con las etiquetas semanticas adecuadas. Tu CSS tambien esta muy prolijo y bien hecho, reutilizas bien los estilos y los nombres de clases son claros y descriptivos.  El responsive esta hecho a la perfeccion. Noto quiza cierta dependencia de algunas soluciones del codigo de la web modelo para cosas que podrias haber solucionado de manera mas sencilla con lo que sabes; pero entiendo que el maquetado no era la prioridad aqui. 

Tu JS esta muy bien, prolijo, es facil seguirlo y definis bien las funciones y variables necesarias. Demuestra que entendes lo que estas haciendo. Tenes muchos y muy buenos commits y un buen readme. Este es un trabajo del que estar muy orgullosa. 


### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. Se que venis con poca confianza en vos misma en esta ultima etapa: no es algo que pueda decir que comparta tras haber visto tu trabajo. Podes hacer exactamente lo que se espera de vos en este momento del curso, y no me caben dudas de que con esfuerzo y tiempo podras aprender muchisimo mas. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✔️ Respeta el funcionamiento --> con observaciones
✅  Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅  Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅ Funciones pequeñas.
✅ Commits con mensajes adecuados.
❌ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 8






inputtype email 

lbel tarjeta 

filtrs a la vez

nro de productos 

falta favucon 
