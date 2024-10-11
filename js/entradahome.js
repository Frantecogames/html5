document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const loadingOverlay = document.getElementById("loadingOverlay");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        loadingOverlay.style.display = 'flex'; // Mostra o overlay de carregamento

        setTimeout(() => {
            loadingOverlay.style.display = 'none'; // Oculta o overlay de carregamento após o tempo definido
            window.location.href = "../home/home.html"; // Redireciona para a página inicial
        }, 2000); // Ajuste o tempo conforme necessário
    });
});
//login a cima|||
