// ==========================================
// 1. MENU HAMBÚRGUER
// ==========================================

const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav");

if (botaoMenu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });
}


// ==========================================
// 2. FORMULÁRIO DE CONTATO
// ==========================================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        // Impede a página de atualizar
        event.preventDefault();

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");

        // Verifica se os campos estão vazios
        if (!nome.value || !email.value) {

            alert("Preencha todos os campos!");

        } else {

            alert("Formulário enviado com sucesso!");

            formulario.reset();
        }
    });
}


// ==========================================
// 3. BOTÕES DOS PROJETOS
// ==========================================

const botoesProjeto = document.querySelectorAll(".projeto button");

for (let i = 0; i < botoesProjeto.length; i++) {

    botoesProjeto[i].addEventListener("click", function () {

        console.log("Projeto selecionado!");

    });
}


// ==========================================
// 4. MODAL
// ==========================================

const botaoAbrirModal = document.querySelector("#abrir-modal");
const botaoFecharModal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");

if (botaoAbrirModal && modal) {

    botaoAbrirModal.addEventListener("click", function () {

        modal.classList.add("ativo");

    });
}

if (botaoFecharModal && modal) {

    botaoFecharModal.addEventListener("click", function () {

        modal.classList.remove("ativo");

    });
}


// ==========================================
// 5. TOAST / MENSAGEM
// ==========================================

function mostrarToast(mensagem) {

    const toast = document.querySelector("#toast");

    if (toast) {

        toast.textContent = mensagem;

        toast.classList.add("mostrar");

        setTimeout(function () {

            toast.classList.remove("mostrar");

        }, 3000);
    }
}


// ==========================================
// 6. SALVAR TEMA NO NAVEGADOR
// ==========================================

const botaoTema = document.querySelector("#botao-tema");

if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("tema-escuro");

        const temaEscuro =
            document.body.classList.contains("tema-escuro");

        localStorage.setItem("temaEscuro", temaEscuro);
    });
}


// ==========================================
// 7. CARREGAR TEMA SALVO
// ==========================================

const temaSalvo = localStorage.getItem("temaEscuro");

if (temaSalvo === "true") {

    document.body.classList.add("tema-escuro");

}

console.log("JavaScript conectado!");

// Funcionalidade: mensagem de boas-vindas

function boasVindas() {
    console.log("Bem-vindo ao projeto da ONG!");
}

boasVindas();
