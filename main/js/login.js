function login_checker() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username === 'kelvin' && password === 'kelvin123') {
		window.location = "file.html"
	} else {
		window.location = "../index.html"
	}
}

function show() {
	var password = document.getElementById('password');

	if (password.type == 'password') {
		password.type = 'text';
	} else {
		password.type = 'password';
	}
}