import { supabase } from "./supabase.js";

const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");
const entrarBtn = document.getElementById("entrarBtn");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  mensagem.textContent = "";

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  entrarBtn.disabled = true;
  entrarBtn.textContent = "Entrando...";

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: senha
  });

  if (error) {
    mensagem.textContent = "Não foi possível entrar. Confira o e-mail e a senha.";
    entrarBtn.disabled = false;
    entrarBtn.textContent = "Entrar";
    return;
  }

  const { data: perfil, error: perfilError } = await supabase
    .from("perfis")
    .select("nome, tipo")
    .eq("id", data.user.id)
    .single();

  if (perfilError || !perfil) {
    await supabase.auth.signOut();
    mensagem.textContent = "Seu perfil não foi encontrado. Procure o administrador.";
    entrarBtn.disabled = false;
    entrarBtn.textContent = "Entrar";
    return;
  }

  const destinos = {
    admin: "paginas/administrador.html",
    professor: "paginas/professor.html",
    aluno: "paginas/aluno.html"
  };

  const destino = destinos[perfil.tipo];

  if (!destino) {
    await supabase.auth.signOut();
    mensagem.textContent = "Tipo de usuário não reconhecido.";
    entrarBtn.disabled = false;
    entrarBtn.textContent = "Entrar";
    return;
  }

  window.location.href = destino;
});
