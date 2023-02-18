import './Gerador.css';

const slider = document.querySelector('#slider')

let tamanho = document.querySelector('#valor')
let password = document.querySelector('.password')
let mostrarsenha = document.querySelector('.copy')

let mostrar = document.querySelector('.container_password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ123456789!@$%"
let novasenha = ""

tamanho.innerHTML = slider.value

slider.oninput = function() {
    tamanho.innerHTML = this.value
}

function Gerador() {

  const gerarsenha = () => {
    let senha = ""
    for (let i = 0, s = charset.length; i< slider.value; i++)
    senha += charset.charAt(Math.floor(Math.random() * s))

    mostrar.classList.remove('hide')
    password.innerHTML = senha
    novasenha = senha
}

function copiar() {
    navigator.clipboard.writeText(novasenha)
    mostrarsenha.innerHTML = 'A senha foi copiada com sucesso!'
}

  return (
    <div className="App">
        <div class="box">

        <div class="button" id="button">
          <button onClick={gerarsenha}>Gerar senha</button>
        </div>

        <div class="container_password hide">
          <span class="title">Sua senha gerada foi:</span>
          <span class="password" onClick={copiar}></span>
          <span class="copy">Clique para copiar!</span>
        </div>
        </div>     
    </div>
  );
}

export default Gerador;
