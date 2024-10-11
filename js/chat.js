document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');
    const chatMessages = document.getElementById('chat-messages');
    const backBtn = document.getElementById('back-btn');
    const sendMessageBtn = document.getElementById('send-message');
    const messageInput = document.getElementById('message-input');
    const chatHeader = document.getElementById('chat-header');
    const chatTitle = document.getElementById('chat-title');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatInput = document.getElementById('chat-input');

    // Dados de exemplo para os usuários
    const sampleUsers = [
        { name: 'João', avatar: 'https://via.placeholder.com/40' },
        { name: 'Maria', avatar: 'https://via.placeholder.com/40' },
        { name: 'Carlos', avatar: 'https://via.placeholder.com/40' },
    ];

    // Adicionar usuários à lista
    sampleUsers.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="user-avatar">
                <img src="${user.avatar}" alt="${user.name}">
            </div>
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="last-message">Última mensagem...</div>
            </div>
        `;
        li.addEventListener('click', function() {
            openChat(user);
        });
        userList.appendChild(li);
    });

    // Abre a conversa com o usuário selecionado
    function openChat(user) {
        chatTitle.textContent = `Conversando com ${user.name}`;
        chatInput.style.display = 'flex';
        closeChatBtn.style.display = 'block';
        userList.style.display = 'none';
        chatMessages.innerHTML = ''; // Limpa as mensagens antigas
    }

    // Volta para a lista de usuários
    backBtn.addEventListener('click', function() {
        window.location.href = '../home/chat.html'; // Ajuste conforme necessário
    });

    // Fecha a conversa
    closeChatBtn.addEventListener('click', function() {
        chatTitle.textContent = 'Selecione um usuário para começar a conversar';
        chatInput.style.display = 'none';
        closeChatBtn.style.display = 'none';
        userList.style.display = 'block';
        chatMessages.innerHTML = ''; // Limpa as mensagens ao fechar
    });

    // Envia a mensagem
    sendMessageBtn.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.className = 'message message-user';
            messageElement.innerHTML = `
                <div class="message-content">${messageText}</div>
                <div class="message-time">${new Date().toLocaleTimeString()}</div>
            `;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Limpa a área de mensagens
    function clearMessages() {
        chatMessages.innerHTML = '';
    }
});
