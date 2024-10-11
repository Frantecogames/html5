// profile.js

document.addEventListener('DOMContentLoaded', function() {
    // Carregar informações do perfil (simulação)
    loadProfileInfo();

    // Adicionar evento ao botão de edição
    const editProfileBtn = document.getElementById('edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            alert('Função de edição de perfil ainda não implementada.');
            // Redirecionar para a página de edição de perfil
            // window.location.href = 'edit-profile.html';
        });
    }
});

function loadProfileInfo() {
    // Simulação de carregamento de dados
    const profilePicture = document.querySelector('.profile-picture img');
    const profileName = document.querySelector('.profile-details h2');
    const profileBio = document.querySelector('.profile-details p');

    // Dados fictícios para demonstração
    profilePicture.src = 'https://via.placeholder.com/120'; // Substitua com a URL da foto do perfil
    profileName.textContent = 'Nome do Usuário';
    profileBio.textContent = 'Descrição do perfil ou bio do usuário aqui.';
}
