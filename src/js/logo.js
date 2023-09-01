if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("logo").setAttribute("src", "src/imagens/logo.png")
} else {
    document.getElementById("logo").setAttribute("src", "src/imagens/logoEscritaLateral.png")
}