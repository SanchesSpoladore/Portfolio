// ===== Cabeçalho =====
// Scroll
const menuItens = document.querySelectorAll('a[href^="#"]');

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 70;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

// Menu mobile
const btnMenu = document.getElementById("btn-menu");
const removerNoJSMenu = document.querySelector(".no-js").classList.remove("no-js");
const removerNoJSMain = document.querySelector(".no-js-main").classList.remove("no-js-main");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);

function fechar() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// ===== Inicio =====
function maquinaEscrever(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerText = "";
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

const titulo = document.getElementById("nome");
maquinaEscrever(titulo);

// Rodapé
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const localAno = (document.getElementById("ano").innerHTML = ano);
