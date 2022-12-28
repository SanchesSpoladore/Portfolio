const preLoad = document.getElementById('preload');
const pagina = document.querySelector('body')

window.addEventListener('load', () => {
  preLoad.style.display = 'none'
  pagina.style.overflow = 'auto'
})

const btnMobile = document.getElementById('btnMobile');
const nav = document.querySelector('nav');

function toggleMenu() {
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

const menuItems = document.querySelectorAll('nav a')
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
  event.preventDefault()
  nav.classList.toggle('active')
  const element = event.target;
  const id = element.getAttribute('href');
  const section = document.querySelector(id)

  window.scroll({
    top: section.offsetTop - 70,
    behavior: 'smooth',
    left: 0,
  })
}

function maquinaEscrever(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerText = "";
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 125 * i);
  });
}

const titulo = document.getElementById("meu-nome");
maquinaEscrever(titulo);

const receberCopia = document.querySelector('#copia');
const copia = document.getElementById('input-copia')

setInterval(() => {
  if (receberCopia.checked) {
    copia.removeAttribute('disabled');
    const email = document.getElementById('email').value
    copia.value = email
  } else {
    copia.setAttribute('disabled', 'disabled')
  }
}, 1);

const anoAtual = new Date().getFullYear();
const espacoAno = document.getElementById('ano')

espacoAno.innerHTML = anoAtual