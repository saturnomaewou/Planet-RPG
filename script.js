// Seleciona elementos
const secoes = document.querySelectorAll('.secao');
const btnTopo = document.getElementById('btnTopo');
const linksMenu = document.querySelectorAll('.nav-links a');

// Verifica visibilidade das seções e botão topo
function verificarVisibilidade() {
    const alturaJanela = window.innerHeight;
        
            // Animação das seções
                secoes.forEach(secao => {
                        const posicaoSecao = secao.getBoundingClientRect().top;
                                if (posicaoSecao < alturaJanela * 0.85) {
                                            secao.classList.add('visivel');
                                                    }
                                                        });

                                                            // Mostrar/ocultar botão de voltar ao topo
                                                                if (window.scrollY > 300) {
                                                                        btnTopo.classList.add('visivel');
                                                                            } else {
                                                                                    btnTopo.classList.remove('visivel');
                                                                                        }
                                                                                        }

                                                                                        // Ativa link do menu conforme seção visível
                                                                                        function ativarLinkMenu() {
                                                                                            const scrollAtual = window.scrollY;
                                                                                                
                                                                                                    linksMenu.forEach(link => {
                                                                                                            const secaoId = link.getAttribute('href');
                                                                                                                    const secao = document.querySelector(secaoId);
                                                                                                                            
                                                                                                                                    if (secao) {
                                                                                                                                                const posicaoSecao = secao.offsetTop - 100;
                                                                                                                                                            const alturaSecao = secao.offsetHeight;
                                                                                                                                                                        
                                                                                                                                                                                    if (scrollAtual >= posicaoSecao && scrollAtual < posicaoSecao + alturaSecao) {
                                                                                                                                                                                                    linksMenu.forEach(l => l.classList.remove('ativo'));
                                                                                                                                                                                                                    link.classList.add('ativo');
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            // Scroll suave para seções
                                                                                                                                                                                                                                            function scrollSuave(event) {
                                                                                                                                                                                                                                                if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
                                                                                                                                                                                                                                                        event.preventDefault();
                                                                                                                                                                                                                                                                const alvo = document.querySelector(event.target.getAttribute('href'));
                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                window.scrollTo({
                                                                                                                                                                                                                                                                                            top: alvo.offsetTop - 80,
                                                                                                                                                                                                                                                                                                        behavior: 'smooth'
                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                    // Adiciona eventos
                                                                                                                                                                                                                                                                                                                    window.addEventListener('scroll', verificarVisibilidade);
                                                                                                                                                                                                                                                                                                                    window.addEventListener('scroll', ativarLinkMenu);
                                                                                                                                                                                                                                                                                                                    document.addEventListener('click', scrollSuave);
                                                                                                                                                                                                                                                                                                                    window.addEventListener('load', verificarVisibilidade);
                                                                                                                                                                                                                                                                                                                    