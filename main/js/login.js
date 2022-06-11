function login_checker() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username === 'kelvin' && password === 'kelvin123') {
		window.location = "https://docs.google.com/document/d/1MzeKSoAGoB8BNOFjABQbhM2sgr8uQ3s3/edit?usp=sharing&ouid=108974529682508068135&rtpof=true&sd=true"
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