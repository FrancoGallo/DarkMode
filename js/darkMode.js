// Boton 1------------>
// const button = document.querySelector ("#button");
// const bodyStyle = document.querySelector ("body");

// button.addEventListener ("click", () => {
//     bodyStyle.classList.toggle ("body-style-dark"); // La propiedad ".toggle" nos permite poner y sacar una class (vendria a ser algo asi como la combinacion de las propiedades ".add" y ".remove")
// });
//--------------------------------------------------------------------------------------------------------------------------------------------------------

// Boton 2------------>
// Las constantes a usar (en este caso el body y el boton)
const body = document.querySelector ("body");
const btn = document.querySelector ("button");

// Las funciones (reemplazan las class y cambian el texto del boton)
function darkMode() {
    btn.classList.replace ("btn-dark", "btn-light"); // La propiedad ".replace" te sirve para reemplazar una class por otra
    btn.innerHTML = "Light Mode";
    body.classList.replace ("body-style-light", "body-style-dark");
    localStorage.setItem ("darkModeLocalStorage", "true");
}

function lightMode() {
    btn.classList.replace ("btn-light", "btn-dark");
    btn.innerHTML = "Dark Mode";
    body.classList.replace ("body-style-dark", "body-style-light");
    localStorage.setItem ("darkModeLocalStorage", "false");
}

// Este es un if para el local storage, dado que cada funcion define si se activo el "dark mode" con un "true" o "false" 
if (localStorage.getItem ("darkModeLocalStorage") == "true") {
    darkMode();
}

// El evento sobre el boton
btn.addEventListener ("click", () => {
    if (btn.classList.contains ("btn-dark")) { // La propiedad ".contains" sirve para identificar una class dentro de un elemento
        darkMode();
    }
    else {
        lightMode();
    }
});

/* Otras propiedades que te pueden interesar son las de ".add" (que sirve para agrear una o varias class) 
y ".remove" (que, al revez de ".add", te elimina una o mas class) */

/*
Repaso de propiedades con ".classList":
".add": Pone una o varias class
".remove": Elimina una o varias class
".toggle": Pone y saca una class (bajo el mismo evento)
".replace": Reemplaza una class
".contains": Nos ayuda a identificar una class dentro de un elemento
*/