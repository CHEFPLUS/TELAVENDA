const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function(){
        if(aba.classList.contains("selecionado")){
            return;
        };
        selecionarAba(aba);
        mostrarInformacao(aba);        
    });
});
function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");
}
function mostrarInformacao(aba){
    const informacaoSelecionada = document.querySelector(".cadastroProduto.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    const idDoElementoDeInformacoesDaAba = `cadastro-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}