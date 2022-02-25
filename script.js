const form = document.querySelector(".content form");
const email = document.querySelector(".content form input");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let emailAddress = email.value;
	if (validEmail(emailAddress)) {
		form.classList.remove("error");
	} else if (emailAddress == "") {
		form.classList.add("error");
	} else {
		form.classList.add("error");
	}
});

// Validates email address
function validEmail(email) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(email).search(filter) != -1;
}
