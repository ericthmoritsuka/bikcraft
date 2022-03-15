//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarHandler(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarHandler);
}
perguntas.forEach(eventosPerguntas);


//galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarHandler(event) {
  const img = event.currentTarget;
  const media = window.matchMedia('(min-width:900px)').matches;

  if(media){
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarHandler);
}

galeria.forEach(eventosGaleria);


//plugin animação
if(window.SimpleAnime){
  new SimpleAnime();
}