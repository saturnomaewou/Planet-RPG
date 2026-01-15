// Mostrar/ocultar detalhes das seções
function mostrarDetalhes(id) {
    const elemento = document.getElementById(id);
        if (elemento.classList.contains('oculto')) {
                elemento.classList.remove('oculto');
                    } else {
                            elemento.classList.add('oculto');
                                }
                                }

                                // Mudar cor ao passar o mouse nas curiosidades
                                function mudarCor(elemento) {
                                    elemento.style.backgroundColor = '#D2B48C';
                                        elemento.style.transform = 'scale(1.02)';
                                        }

                                        function resetarCor(elemento) {
                                            elemento.style.backgroundColor = 'white';
                                                elemento.style.transform = 'scale(1)';
                                                }

                                                // Verificar resposta do quiz
                                                function verificarResposta(resposta) {
                                                    const resultado = document.getElementById('resultado-quiz');
                                                        resultado.classList.remove('oculto');
                                                            
                                                                if (resposta === 'Eteria') {
                                                                        resultado.textContent = 'Correto! A Eteria é o recurso disputado em Aerth! 🎉';
                                                                                resultado.style.color = '#2E8B57';
                                                                                    } else {
                                                                                            resultado.textContent = 'Ops, resposta errada. O nome correto é Eteria! ❌';
                                                                                                    resultado.style.color = '#DC143C';
                                                                                                        }

                                                                                                            // Desabilitar botões após resposta
                                                                                                                const botoes = document.querySelectorAll('.opcao-btn');
                                                                                                                    botoes.forEach(btn => btn.disabled = true);
                                                                                                                    }

                                                                                                                    // Rolagem suave para links de navegação
                                                                                                                    document.querySelectorAll('nav a').forEach(link => {
                                                                                                                        link.addEventListener('click', function(e) {
                                                                                                                                e.preventDefault();
                                                                                                                                        const destino = document.querySelector(this.getAttribute('href'));
                                                                                                                                                destino.scrollIntoView({
                                                                                                                                                            behavior: 'smooth'
                                                                                                                                                                    });
                                                                                                                                                                        });
                                                                                                                                                                        });
                                                                                                                                                                        