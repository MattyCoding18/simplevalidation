document.getElementById('bookingForm').addEventListener('submit', function (event) {
	event.preventDefault();

	let nameInput = document.getElementById('name');
	let emailInput = document.getElementById('email');
	let creditCardInput = document.getElementById('creditCard');

	let nameError = document.getElementById('nameError');
	let emailError = document.getElementById('emailError');
	let creditCardError = document.getElementById('creditCardError');

	// Clear previous errors
	nameError.textContent = "";
	emailError.textContent = "";
	creditCardError.textContent = "";

	let isValid = true;

	// Validate Name (Only letters and spaces)
	if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
		nameError.textContent = "Please enter a valid name.";
		nameError.style.display = 'block';
		nameInput.style.borderColor = '#e70064';
		isValid = false;
	} else {
		nameInput.style.borderColor = '#89c82e';
	}

	// Validate Email (Regex for better accuracy)
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(emailInput.value.trim())) {
		emailError.textContent = "Please enter a valid email.";
		emailError.style.display = 'block';
		emailInput.style.borderColor = '#e70064';
		isValid = false;
	} else {
		emailInput.style.borderColor = '#89c82e';
	}

	// Validate Credit Card (Must be 16 digits, numeric)
	if (!/^\d{16}$/.test(creditCardInput.value.trim())) {
		creditCardError.textContent = "Please enter a valid 16-digit credit card number.";
		creditCardError.style.display = 'block';
		creditCardInput.style.borderColor = '#e70064';
		isValid = false;
	} else {
		creditCardInput.style.borderColor = '#89c82e';
	}

	// Submit Form
	if (isValid) {
		alert("Form Successfully Submitted!");
	}
});

