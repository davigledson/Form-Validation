const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    // trim() remove os espaçamentos do usuário
    const usernameValue = username.value.trim() 
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    
}