document.getElementById('bookingForm').addEventListener('submit', function (event) {
	event.preventDefault();

	let nameInput = document.getElementById('name');
	let emailInput = document.getElementById('email');
	let creditCardInput = document.getElementById('creditCard');

	document.getElementById('nameError').textContent = "";
	document.getElementById('emailError').textContent = "";
	document.getElementById('creditCardError').textContent = "";

	let isValid = true;

	if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
		document.getElementById('nameError').textContent = "Please enter a valid name.";
		document.getElementById('nameError').style.display = 'block';
		nameInput.style.borderColor = '#e70064';
		isValid = false;
	} else {
		nameInput.style.borderColor = '#89c82e';
	}

	if (emailInput.value === "" || !emailInput.value.includes("@") || !emailInput.value.includes(".")) {
		document.getElementById('emailError').textContent = "Please enter a valid email.";
		document.getElementById('emailError').style.display = 'block';
		emailInput.style.borderColor = '#e70064';
		isValid = false;
	} else {
		emailInput.style.borderColor = '#89c82e';
	}

	if (creditCardInput.value.length !== 16 || isNaN(creditCardInput.value)) {
		document.getElementById('creditCardError').textContent = "Please enter a valid 16 digit credit card number.";
		document.getElementById('creditCardError').style.display = 'block';
		creditCardInput.style.borderColor = '#e70064';
		isValid = false;
	} else {
		creditCardInput.style.borderColor = '#89c82e';
	}

	if (isValid) {
		alert("Form Successfully Submitted!");
	}
});
