// Función para ordenar los recuadros alfabéticamente
function ordenarRecuadros() {
    const contenedor = document.getElementById('recuadros-container');
    const recuadros = Array.from(contenedor.querySelectorAll('.recuadro'));

    // Ordena los recuadros en función de su título
    recuadros.sort((a, b) => {
        const tituloA = a.querySelector('.titulo').textContent.toLowerCase();
        const tituloB = b.querySelector('.titulo').textContent.toLowerCase();
        return tituloA.localeCompare(tituloB);
    });

    // Limpia el contenedor y agrega los recuadros ordenados
    contenedor.innerHTML = '';
    recuadros.forEach((recuadro) => {
        contenedor.appendChild(recuadro);
    });
}

// Llama a la función para ordenar los recuadros al cargar la página
window.addEventListener('load', ordenarRecuadros);

// Obtiene el parámetro "video" de la URL
const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get("video");

// Establece la URL del video en el iframe
const videoFrame = document.getElementById("videoFrame");
videoFrame.src = videoUrl;

// Función para realizar la búsqueda y filtrar los recuadros
function realizarBusqueda() {
    const searchForm = document.getElementById("search-form");
    const inicioButton = document.getElementById("inicio-button");
    const recuadros = document.querySelectorAll(".recuadro");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchTerm = document.getElementById("busqueda").value.toLowerCase();

        recuadros.forEach((recuadro) => {
            const titulo = recuadro.querySelector(".titulo").textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                recuadro.style.display = "block";
            } else {
                recuadro.style.display = "none";
            }
        });
    });

    inicioButton.addEventListener("click", function () {
        // Mostrar todos los recuadros cuando se hace clic en Inicio
        recuadros.forEach((recuadro) => {
            recuadro.style.display = "block";
        });
    });
}

// Llama a la función realizarBusqueda al cargar la página
document.addEventListener("DOMContentLoaded", realizarBusqueda);