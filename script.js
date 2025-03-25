document.addEventListener('DOMContentLoaded', function() {
    console.log('Plataforma de Cursos para Desenvolvedores carregada.');

    const loginForm = document.querySelector('#login form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cpf = document.querySelector('#cpf').value;
        const password = document.querySelector('#password').value;
        console.log(`CPF: ${cpf}, Senha: ${password}`);
        // Implementar lógica de autenticação aqui
    });

    // Implementação da lógica de acumulação de horas e pontos
});
