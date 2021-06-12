function form() {
    let username = ''
    let password = ''

    function usernameHandler(e) {
        username = e.target.value
    }

    function passwordHandler(e) {
        password = e.target.value
    }

    return form(
        input({
            'id': "my",
            'type': 'text',
            'value': username
        }, onkeyup(usernameHandler)),
        input({
            'type': 'password',
            'value': password
        }, onkeyup(passwordHandler)),
        button('Login'),
        onsubmit(() => {
            console.log('submited', username, password)
            return false
        })
    )
}