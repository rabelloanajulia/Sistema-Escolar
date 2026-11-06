import { supabase } from "./supabase.js";

const nomeEl = document.getElementById("nomeUsuario");
const tipoEl = document.getElementById("tipoUsuario");
const sairBtn = document.getElementById("sairBtn");

const { data: { user }, error: authError } = await supabase.auth.getUser();

if (authError || !user) {
  window.location.href = "../index.html";
} else {
  const { data: perfil, error } = await supabase
    .from("perfis")
    .select("nome, tipo")
    .eq("id", user.id)
    .single();

  if (error || !perfil) {
    await supabase.auth.signOut();
    window.location.href = "../index.html";
  } else {
    nomeEl.textContent = perfil.nome || user.email;
    tipoEl.textContent = perfil.tipo;
  }
}

sairBtn.addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "../index.html";
});
