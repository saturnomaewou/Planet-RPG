// Seleciona todos os links do menu e seções
const linksMenu = document.querySelectorAll('.menu li a');
const secoes = document.querySelectorAll('.secao');

// Adiciona evento de clique aos links
linksMenu.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();

// Remove classe ativa de todos os links e seções
linksMenu.forEach(l => l.classList.remove('ativo'));
secoes.forEach(s => s.classList.remove('ativa'));

// Adiciona classe ativa ao link clicado e à seção correspondente
link.classList.add('ativo');
const alvo = link.getAttribute('data-alvo');
document.getElementById(alvo).classList.add('ativa');
});
});

// Ajusta altura do container em telas pequenas
window.addEventListener('resize', () => {
const container = document.querySelector('.container');
container.style.minHeight = `${window.innerHeight
200}px`;
});
// Executa ajuste inicial
window.dispatchEvent(new Event('resize'));