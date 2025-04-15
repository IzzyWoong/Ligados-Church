// app.js - Aqui você pode adicionar interatividade futuramente
console.log("Ligados Church - JavaScript carregado com sucesso!");

function calcularIdade(dataNascimento) {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
  
  function validarIdade() {
    const dataNascimento = document.querySelector('input[name="data_nascimento"]').value;
    const idade = calcularIdade(dataNascimento);
    const campoIdade = document.getElementById('idade');
    campoIdade.value = idade;
    if (idade < 15) {
      alert("Você precisa ter 15 anos ou mais para se inscrever.");
    }
  }
  
  function validarFormulario(event) {
    const camposObrigatorios = document.querySelectorAll('[required]');
    for (let i = 0; i < camposObrigatorios.length; i++) {
      if (!camposObrigatorios[i].value) {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        event.preventDefault();
        return;
      }
    }
  }
  
  const form = document.getElementById('impactoForm');
  form.addEventListener('submit', validarFormulario);