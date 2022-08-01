const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit');

let isEmailFocusedOut = false;
let isPasswordFocusedOut = false;
let isEmailValid = true;
let isPasswordValid = true;

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('input', validatePassword);

submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {

	if (!isEmailValid || !isPasswordValid) {
		e.preventDefault();
		return;
	}

	console.log(`email address: ${email.value}`)
	console.log(`password: ${password.value}`)

	e.preventDefault();
}

function validateEmail(e) {
	if (e.type === 'blur') {
		isEmailFocusedOut = true;
	}

	if (!isEmailFocusedOut) return;

	const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})$/;

	if (!e.target.value.match(regex)) {
		emailInput.classList.add('is-invalid');
		isEmailValid = false;
	} else {
		emailInput.classList.remove('is-invalid');
		isEmailValid = true;
	}
}

function validatePassword(e) {
	if (e.type === 'blur') {
		isPasswordFocusedOut = true;
	}

	if (!isPasswordFocusedOut) return;

	const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

	if (!e.target.value.match(regex)) {
		passwordInput.classList.add('is-invalid');
		isPasswordValid = false;
	} else {
		passwordInput.classList.remove('is-invalid');
		isPasswordValid = true;
	}
}