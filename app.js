function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme invalido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListarFilmes = document.getElementById("listaFilmes");
    elementoListarFilmes.innerHTML =
      elementoListarFilmes.innerHTML + elementoFilmeFavorito;
  }
  