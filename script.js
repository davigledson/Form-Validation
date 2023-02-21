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
    if(usernameValue ===''){
        //mostrar o erro
        //adicionar a classe error
        errorValidation(username,'Preencha esse campo')
    } else{
        //adicionar a classe success
        successValidation(username)
    }
    if (emailValue === ''){
        errorValidation(email,'Preencha esse campo')
    } else {
        successValidation(email)
    }

    if (passwordValue ===''){
        errorValidation(password,'Preencha esse campo')
    } else if(passwordValue.length < 8){
        errorValidation(password,'A senha deve ter mais de + 8 caracteres')
    } else{
        successValidation(password)
    }


    if(passwordtwoValue ===''){
        errorValidation(passwordtwo, 'Preencha esse campo')
    } else if (passwordValue != passwordtwoValue){
        errorValidation(passwordtwo, 'as senhas não coincidem')
    } else{
        successValidation(passwordtwo)
    }
}

function errorValidation(input, message){
    const formControl = input.parentElement; // retorna uma referencia direta de seu elemento pai - no caso o form-control
    const small = formControl.querySelector('small')
    small.innerHTML = message
    formControl.className = 'form-control error'
    
}

function successValidation(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success'
}