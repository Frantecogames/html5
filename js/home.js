// home.js

document.addEventListener('DOMContentLoaded', () => {
    // Função para expandir e contrair o menu lateral
    const btnExpandir = document.querySelector('.btn-expandir');
    const menuLateral = document.querySelector('.menu-lateral');

    btnExpandir.addEventListener('click', () => {
        menuLateral.classList.toggle('expandido');
        btnExpandir.classList.toggle('expandido');
    });

    // Função para carregar posts do armazenamento local
    function carregarPosts() {
        const postsContainer = document.querySelector('.posts');
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        posts.forEach((post, index) => {
            criarPost(post.conteudo, post.data, index);
        });
    }

    // Função para criar um novo post
    function criarPost(conteudo, data, index) {
        const postsContainer = document.querySelector('.posts');

        const novoPost = document.createElement('article');
        novoPost.classList.add('post');
        novoPost.dataset.index = index; // Adiciona um atributo data-index para identificação

        novoPost.innerHTML = `
            <header class="post-header">
                <img src="path/to/user-avatar.jpg" alt="Avatar do Usuário" class="avatar">
                <div class="post-info">
                    <h2>Nome do Usuário</h2>
                    <time>${data}</time>
                </div>
            </header>
            <div class="post-content">
                <p>${conteudo}</p>
            </div>
            <footer class="post-actions">
                <button class="btn btn-delete">Excluir</button>
                <button class="btn">Curtir</button>
                <button class="btn">Comentar</button>
                <button class="btn">Compartilhar</button>
                <button class="btn">Salvar</button>
            </footer>
        `;

        postsContainer.prepend(novoPost);

        // Adiciona o evento de clique para o botão de excluir
        novoPost.querySelector('.btn-delete').addEventListener('click', () => {
            excluirPost(index);
        });
    }

    // Função para adicionar um novo post
    function adicionarPost() {
        const textarea = document.querySelector('.create-post textarea');
        const conteudo = textarea.value.trim();

        if (conteudo) {
            const data = new Date().toLocaleDateString();
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            const index = posts.length; // O índice é o comprimento atual dos posts

            criarPost(conteudo, data, index);

            // Adiciona o novo post ao armazenamento local
            posts.push({ conteudo, data });
            localStorage.setItem('posts', JSON.stringify(posts));

            textarea.value = ''; // Limpa o textarea após o post
        } else {
            alert('Digite algo para postar!');
        }
    }

    // Função para excluir um post
    function excluirPost(index) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.splice(index, 1); // Remove o post do array
        localStorage.setItem('posts', JSON.stringify(posts)); // Atualiza o armazenamento local

        // Remove o post da interface
        document.querySelector(`.posts .post[data-index="${index}"]`).remove();

        // Atualiza os índices dos posts restantes
        atualizarIndices();
    }

    // Função para atualizar os índices dos posts
    function atualizarIndices() {
        const posts = document.querySelectorAll('.posts .post');
        posts.forEach((post, index) => {
            post.dataset.index = index; // Atualiza o atributo data-index
        });
    }

    // Função para pesquisar posts
    function pesquisar() {
        const inputPesquisa = document.querySelector('.search-bar').value.toLowerCase();
        const posts = document.querySelectorAll('.posts .post');

        posts.forEach(post => {
            const conteudo = post.querySelector('.post-content p').textContent.toLowerCase();
            if (conteudo.includes(inputPesquisa)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Configurar o botão de postar
    const btnPostar = document.querySelector('.create-post .btn');
    btnPostar.addEventListener('click', adicionarPost);

    // Configurar a pesquisa
    const inputPesquisa = document.querySelector('.search-bar');
    inputPesquisa.addEventListener('input', pesquisar);

    // Carregar posts ao iniciar a página
    carregarPosts();
});
