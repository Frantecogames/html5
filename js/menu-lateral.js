document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("nav.menu-lateral");
    const btnExpandir = document.querySelector(".btn-expandir");
    const itensMenu = document.querySelectorAll("ul li.item-menu");

    // Expande e retrai o menu ao clicar no botão
    btnExpandir.addEventListener("click", function() {
        menu.classList.toggle("expandido");
    });

    // Verifica a URL da página atual
    const currentPage = window.location.pathname.split('/').pop();

    // Adiciona a classe 'ativo' ao item de menu correspondente
    itensMenu.forEach(item => {
        const link = item.querySelector("a");
        const href = link.getAttribute("href").split('/').pop();
        if (href === currentPage) {
            item.classList.add("ativo");
        }
    });

    // Animação de clique nos itens do menu
    itensMenu.forEach(item => {
        item.addEventListener("click", function() {
            itensMenu.forEach(i => i.classList.remove("ativo"));
            this.classList.add("ativo");
        });
    });
});
