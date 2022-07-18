let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#Button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset = 'qwertyyuuiopaskdjfg;zxbcvnm1234558900-5850'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function senhasSalvas() {
  let
}
function generatePassword() {
  let pass = ''

  for (let i = 0; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * i))
  }

  containerPassword.classList.remove('hide')
  password.innerHTML = pass

  novaSenha = pass
}

function copyPassword() {
  alert('Senha Copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha)
}
