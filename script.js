// Manipulação do formulário
const formulario = document.getElementById('formContato');
const resposta = document.getElementById('resposta');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página

        // Captura os valores dos campos
            const nome = document.getElementById('nome').value.trim();
                const email = document.getElementById('email').value.trim();
                    const mensagem = document.getElementById('mensagem').value.trim();

                        // Validação simples
                            if (nome && email && mensagem) {
                                    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve retornaremos o contato.`;
                                            resposta.style.color = '#2E5339';
                                                    formulario.reset(); // Limpa os campos
                                                        } else {
                                                                resposta.textContent = 'Por favor, preencha todos os campos corretamente.';
                                                                        resposta.style.color = '#c0392b';
                                                                            }
                                                                            });

                                                                            // Efeito de rolagem suave nos links do menu
                                                                            document.querySelectorAll('nav a').forEach(link => {
                                                                                link.addEventListener('click', function(e) {
                                                                                        e.preventDefault();
                                                                                                const destino = document.querySelector(this.getAttribute('href'));
                                                                                                        destino.scrollIntoView({ behavior: 'smooth' });
                                                                                                            });
                                                                                                            });
                                                                                                            