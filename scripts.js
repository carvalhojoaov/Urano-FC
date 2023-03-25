function changeImage() {
    var jogador = document.getElementById('players');
    if (jogador.src.match ("Anderson")) {
        jogador.src = "img/Jogadores/Cleberson.jpeg";
    } else if (jogador.src.match("Cleberson")) {
        jogador.src = "img/Jogadores/Diogo.jpeg";
    } else if (jogador.src.match("Diogo")) {
        jogador.src = "img/Jogadores/Maurício.jpeg";
    } else if (jogador.src.match("Maurício")) {
        jogador.src = "img/Jogadores/Anderson.jpeg";
    } else {
        jogador.src = "img/Jogadores/Anderson.jpeg";
    }
}
