function fazerLogin() {
  // ESSAS DUAS LINHAS SÃO O QUE FALTAM:
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "aluno@email.com" && senha === "123") {
    window.location.href = "perfil.html";
  } else if (email === "adm@academia.com" && senha === "admin123") {
    window.location.href = "adm.html";
  } else {
    alert("Login ou senha incorretos!");
  }
}
function salvarTreino() {
  const treino = document.getElementById("inputTreino").value;
  localStorage.setItem("treinoAluno1", treino);
  alert("Treino salvo com sucesso!");
}

// Quando a página do aluno carregar
window.onload = function () {
  const treinoSalvo = localStorage.getItem("treinoAluno1");
  if (treinoSalvo) {
    document.getElementById("displayTreino").innerText = treinoSalvo;
  } else {
    document.getElementById("displayTreino").innerText =
      "Nenhum treino cadastrado ainda.";
  }
};
