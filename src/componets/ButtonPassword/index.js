let password = document.getElementById('password')

function show() {
    if(password.type === 'password') return password.type = "text"
    password.type = 'password'
}