const register = (ev) => {
    const sectionElement = ev.currentTarget.parentNode;
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation && password !== "") {
        alert(`Usuário ${username} registrado!`)
    } else {
        alert(`As senhas não conferem`)
    }
}

const removeEvent = () => {
    button.removeEventListener("click", register)
    alert("Event Removed")
}

const button = document.getElementById("register-button")
button.addEventListener("click", register)

button.addEventListener("mouseover", (ev) => {
    console.log(ev)
})
