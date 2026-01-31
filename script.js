// Dados de curiosidades (baseado no texto fornecido)
const curiosidades = [
  {title:"Origem do sistema", text:"Desenvolvido entre 2022 e 2024 por Gabriel Alexsander Gonçalves; criado apenas para entretenimento."},
  {title:"Inspirações", text:"Principais inspirações: Ordem Paranormal, Tormenta 20 e Dungeons & Dragons."},
  {title:"Ficha simplificada", text:"Sistema usa apenas atributos e perícias; foco em utilidade constante das perícias."},
  {title:"Opções de habilidade", text:"Ao adquirir habilidade: 1 opção padrão (para todas as classes) + 2 opções especializadas (exclusivas da classe)."},
  {title:"Mecânica única", text:"Todas as perícias dão habilidades de combate nos níveis 10, 15 e 20."},
  {title:"Classe Coringa", text:"Permite escolher habilidades de perícias de outras classes, com limitações baseadas em atributos e perícias selecionadas."},
  {title:"Runeterra", text:"Mundo rúnico dividido em 12 regiões jogáveis, cada uma com identidade e conflitos próprios."},
  {title:"Início da campanha", text:"A campanha começa em Freljord; antagonista inicial: Bruxa Gélida e seus cultistas Pryglacius."},
  {title:"Personagens", text:"Shun, Lyra, Leônidas, Nebulosa e Find formam o grupo principal, cada um com motivações próprias."},
  {title:"Progresso atual", text:"1 de 40 atos principais em andamento; 6 atos alternativos planejados."},
  {title:"Colaboração", text:"Jhordan Luis contribuiu com arcos narrativos e balanceamento de mecânicas como catástrofes mágicas e itens míticos."},
  {title:"Concepção do universo", text:"Planejado para existir antes, durante e após a campanha; mundo dinâmico com consequências independentes das ações dos jogadores."}
];

// Render curiosidades
const curiosList = document.createElement('div');
curiosList.id = 'curiosList';
curiosList.className = 'curios-list';
function renderCurios(filter=''){
  // procura por seção de curiosidades no DOM
  let container = document.querySelector('#curiosidades .curios-list');
  if(!container){
    container = document.createElement('div');
    container.className = 'curios-list';
    document.querySelector('#curiosidades').appendChild(container);
  }
  container.innerHTML = '';
  const q = filter.trim().toLowerCase();
  const filtered = curiosidades.filter(c => c.title.toLowerCase().includes(q) || c.text.toLowerCase().includes(q));
  if(filtered.length === 0){
    container.innerHTML = '<div class="small muted">Nenhuma curiosidade encontrada.</div>';
    return;
  }
  filtered.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'curio card';
    el.style.marginTop = '8px';
    el.innerHTML = `<strong>${c.title}</strong><div class="small muted" style="margin-top:6px">${c.text}</div>`;
    container.appendChild(el);
  });
}
renderCurios();

// Cria barra de busca dinâmica dentro da seção de curiosidades
(function createSearchBar(){
  const curiosSection = document.getElementById('curiosidades');
  if(!curiosSection) return;
  const wrapper = document.createElement('div');
  wrapper.style.marginTop = '12px';
  wrapper.className = 'searchbar';
  wrapper.innerHTML = `
    <input type="search" id="search" placeholder="Filtrar curiosidades (ex.: Freljord, Jhordan, itens)" style="flex:1;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.03);background:transparent;color:inherit">
    <button class="btn" id="clearSearch">Limpar</button>
  `;
  curiosSection.insertBefore(wrapper, curiosSection.querySelector('.small').nextSibling);
  document.getElementById('search').addEventListener('input', e => renderCurios(e.target.value));
  document.getElementById('clearSearch').addEventListener('click', ()=>{ document.getElementById('search').value=''; renderCurios(); });
})();

// Theme toggle
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('rf_theme');
  if(saved === 'light') root.setAttribute('data-theme','light');
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    if(current === 'light'){
      root.removeAttribute('data-theme');
      btn.setAttribute('aria-pressed','false');
      localStorage.removeItem('rf_theme');
    } else {
      root.setAttribute('data-theme','light');
      btn.setAttribute('aria-pressed','true');
      localStorage.setItem('rf_theme','light');
    }
  });
})();

// Mobile menu toggle
(function(){
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if(!menuBtn || !mobileMenu) return;
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.style.display = expanded ? 'none' : 'block';
    mobileMenu.setAttribute('aria-hidden', String(expanded));
  });

  // close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> {
      mobileMenu.style.display = 'none';
      menuBtn.setAttribute('aria-expanded','false');
      mobileMenu.setAttribute('aria-hidden','true');
    });
  });
})();

// Accordion behavior
(function(){
  const acc = document.querySelectorAll('.accordion button');
  acc.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.nextElementSibling;
      const isOpen = panel.classList.contains('open');
      // close all
      document.querySelectorAll('.accordion .panel').forEach(p=>{
        p.style.maxHeight = null;
        p.classList.remove('open');
        p.previousElementSibling.setAttribute('aria-expanded','false');
        p.setAttribute('aria-hidden','true');
      });
      if(!isOpen){
        panel.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute('aria-expanded','true');
        panel.setAttribute('aria-hidden','false');
      }
    });
  });
})();

// Smooth scroll for internal links
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
})();

// Modal personagem
(function(){
  const modal = document.getElementById('modal');
  const modalName = document.getElementById('modalName');
  const modalRole = document.getElementById('modalRole');
  const modalDesc = document.getElementById('modalDesc');
  const closeModalBtn = document.getElementById('closeModal');

  document.getElementById('chars')?.addEventListener('click', e=>{
    const card = e.target.closest('.char');
    if(!card) return;
    modalName.textContent = card.dataset.name || card.querySelector('h4')?.textContent || 'Personagem';
    modalRole.textContent = card.dataset.role || '';
    modalDesc.textContent = card.dataset.desc || card.querySelector('p')?.textContent || '';
    modal.classList.add('open');
  });

  closeModalBtn?.addEventListener('click', ()=> modal.classList.remove('open'));
  modal?.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });

  // keyboard
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') modal.classList.remove('open');
  });
})();

// Small enhancement: detect touch to adjust hover effects (optional)
if('ontouchstart' in window) document.body.classList.add('touch');
