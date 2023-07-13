 /*script dark/light-mode*/
 /** Listener do button click em ..//header **/
  function setMode(mode) {
  const body = document.querySelector('body');
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(mode);

  // Get the image elements
  const modeIcon = document.getElementById('mode-icon');
  const arq = document.getElementById('arq');
  const logo = document.getElementById('logo');
  
  const dicas = document.querySelectorAll("[id='dica']");
  const notas = document.querySelectorAll("[id='nota']");
  var i =0;
  
  // Update the mode icon and logo depending on the selected mode
  if (mode === 'light-mode') {
    modeIcon.src = './imagens/sun.png';
    modeIcon.width = 40;
    modeIcon.classList.add('inverted');
    logo.classList.add('inverted');

    for(i = 0; i < dicas.length; i++) 
    dicas[i].classList.remove('inverted');

    for(i = 0; i < notas.length; i++) 
    notas[i].classList.remove('inverted');

    //dica.classList.remove('inverted');
    //nota.classList.remove('inverted');
    arq.src = './imagens/arquitetura-light.svg';
  } else if (mode === 'dark-mode') {
    modeIcon.src = './imagens/moon.png';
    modeIcon.width = 40;
    modeIcon.classList.add('inverted');
    logo.classList.add('inverted');

    for(i = 0; i < dicas.length; i++) 
    dicas[i].classList.add('inverted');

    for(i = 0; i < notas.length; i++) 
    notas[i].classList.add('inverted');

    //dica.classList.add('inverted');
    //nota.classList.add('inverted');
    arq.src = './imagens/arquitetura-dark.svg';
  }

  localStorage.setItem('mode', mode);
}

const savedMode = localStorage.getItem('mode');
if (savedMode) {
  setMode(savedMode);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setMode('light-mode');
} else {
  setMode('dark-mode');
}

setMode('light-mode');
/*fim do script dark/light-mode*/

function abrir(moduleID){
  const aplicativos = document.getElementById('aplicativos');
  const m_id = document.getElementById(moduleID);
  const bg = document.getElementById('apps_funcoes');

  aplicativos.classList.add('hidden');
  bg.classList.remove('apps');
  m_id.classList.add('shown');
  m_id.classList.remove('hidden');
}

function voltar(moduleID){
  const aplicativos = document.getElementById('aplicativos');
  const m_id = document?.getElementById(moduleID);
  const bg = document.getElementById('apps_funcoes');
  
  m_id?.classList?.remove('shown'); 
  m_id?.classList?.add('hidden');

  aplicativos.classList.remove('hidden');
  bg.classList.add('apps');
}

/******************************* TESTE ***********************************************/

/****************************** RESPONSIVE MENU BUTTON *******************************************/

function toggleText(textId, buttonId) {
const textElement = document.getElementById(textId);
const buttonElement = document.getElementById(buttonId);
const value = textElement.textContent;
if (value === ' Ver mais') {
  textElement.textContent =' Ver menos';
} else {
  textElement.textContent =' Ver mais';
}
buttonElement.classList.toggle('rotated');
}

/************************************************** CAROUSEL **************************************************

window.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('aplicativos-funcoes');
  if (element && element.classList.contains('show')) {
    document.documentElement.classList.add('overflow-hidden'); aaa
  }
});
*/

/************************************************** DELAY *******************************************/

