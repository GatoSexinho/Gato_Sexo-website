// Aquí se modifican los recuadros
const recuadrosContainer = document.getElementById("recuadros-container");

const recuadrosData = [
    {
        videoUrl: "https://doods.pro/d/vajavv8xld5l",
        imageUrl: "https://img.doodcdn.com/splash/f3jle86ghtdzg5me.jpg",
        title: "Cannibal Holocaust<br>-1980-"
    },
    {
        videoUrl: "https://doods.pro/d/jcp5x2oitji9",
        imageUrl: "https://img.doodcdn.com/splash/ruy8fpxkkxhu7fvp.jpg",
        title: "Taxidermia<br>-2006-"
    },
    {
        videoUrl: "https://doods.pro/d/41srye5df88y",
        imageUrl: "https://img.doodcdn.com/splash/actflj4hwx1u5odm.jpg",
        title: "Dawn of the dead<br>-1978-"
    },
    {
        videoUrl: "https://doods.pro/d/es7cm7yhlcmk",
        imageUrl: "https://img.doodcdn.com/splash/2u3ci2kgckuaic26.jpg",
        title: "Tetsuo The Iron Man<br>-1989-"
    },
     {
        videoUrl: "https://doods.pro/d/tdgvhpjtwueq",
        imageUrl: "https://img.doodcdn.com/splash/ail7y39uzpvnwe3i.jpg",
        title: "Trauma<br>-1993-"
    },
    {
        videoUrl: "https://doods.pro/d/yq0o4irvrfr5",
        imageUrl: "https://img.doodcdn.com/splash/k9r422w81lkm55pa.jpg",
        title: "Scream<br>-1996-"
    },
    {
        videoUrl: "https://doods.pro/d/z6dloijo8yk2",
        imageUrl: "https://img.doodcdn.com/splash/bx8jkgazx1u199up.jpg",
        title: "The Boogeyman<br>-2023-"
    },
    {
        videoUrl: "https://doods.pro/d/zdgzxjqtedr3",
        imageUrl: "https://img.doodcdn.com/splash/9cawjaww36nvphqc.jpg",
        title: "Melancholie der Engel<br>-2009-"
    },
    {
        videoUrl: "https://doods.pro/d/0g2bclt40ev6",
        imageUrl: "https://img.doodcdn.com/splash/l1gmorp6lr34n8hl.jpg",
        title: "Der goldene Handschuh<br>-2019-"
    },
    {
        videoUrl: "https://doods.pro/d/b9s0br3f260s",
        imageUrl: "https://img.doodcdn.com/splash/64drpaierfwlahw2.jpg",
        title: "The Hunt<br>-2020-"
    },
    {
        videoUrl: "https://doods.pro/d/8r9kxwl4eav4",
        imageUrl: "https://img.doodcdn.com/splash/hzdzgtqpaf24r1r5.jpg",
        title: "A Nightmare On Elm Street<br>-1984-"
    },
    {
        videoUrl: "",
        imageUrl: "",
        title: "<br>"
    },
    // Agrega más objetos de datos aquí...
];

recuadrosData.forEach((recuadroData) => {
    const recuadro = document.createElement("div");
    recuadro.classList.add("recuadro");

    const enlace = document.createElement("a");
    enlace.href = `reproductor/video.html?video=${recuadroData.videoUrl}`;
    enlace.classList.add("enlace");
    recuadro.appendChild(enlace);

    const imagen = document.createElement("img");
    imagen.src = recuadroData.imageUrl;
    imagen.alt = "miniatura";
    recuadro.appendChild(imagen);

    const titulo = document.createElement("div");
    titulo.classList.add("titulo");
    titulo.innerHTML = recuadroData.title;
    recuadro.appendChild(titulo);

    recuadrosContainer.appendChild(recuadro);
});
