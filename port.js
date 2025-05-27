

document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); // Impede o envio padrão do formulário
  
// Validação dos campos
let isValid = true;
const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('email').value.trim();
const mensagem = document.getElementById('mensagem').value.trim();
  
// Validação do nome
if (nome === '') {
  document.getElementById('nomeError').textContent = 'Por favor, insira seu nome.';
  isValid = false;
}
  
// Validação do e-mail
if (!isValidEmail(email)) {
  document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
  isValid = false;
  }
  
// Validação da mensagem
if (mensagem === '') {
  document.getElementById('mensagemError').textContent = 'Por favor, insira sua mensagem.';
  isValid = false;
}
  
// Se tudo estiver válido limpa o formulário
if (isValid) {
  this.reset();
}
});

// Botão de retorno ao topo
let mybutton = document.getElementById("botTop");

// Mostra o botão quando o usuário arrastar 50px pra baixo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Retornar ao topo quando clicado
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
} 

