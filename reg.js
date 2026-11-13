const form = document.getElementById("registrationForm");
const fields = [
    "fullName",
    "email",
    "birthday",
    "password",
    "confirmPassword",
    "reason",
    "consent"
];
function showError(field, message) {
    document.getElementById(field + "Error").textContent = message;
}
function validateField(field) {
    const input = document.getElementById(field);
    const value = input.type === "checkbox"
        ? input.checked
        : input.value.trim();

    let error = "";
    if (field === "fullName") {
        if (!value) {
            error = "Full name is required.";
        }
    }
    if (field === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            error = "Email is required.";
        } else if (!emailPattern.test(value)) {
            error = "Enter a valid email address.";
        }
    }
    if (field === "birthday") {
        if (!value) {
            error = "Birthday is required.";
        } else {
            const birthday = new Date(value + "T00:00:00");
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (Number.isNaN(birthday.getTime())) {
                error = "Enter a valid birthday.";
            } else if (birthday > today) {
                error = "Birthday cannot be in the future.";
            } else {
                let age = today.getFullYear() - birthday.getFullYear();

                const birthdayNotReached =
                    today.getMonth() < birthday.getMonth() ||
                    (today.getMonth() === birthday.getMonth() &&
                     today.getDate() < birthday.getDate());

                if (birthdayNotReached) {
                    age--;
                }

                if (age < 13) {
                    error = "You must be at least 13 years old.";
                }
            }
        }
    }
    if (field === "password") {
        if (!value) {
            error = "Password is required.";
        } else if (
            value.length < 8 ||
            !/[A-Z]/.test(value) ||
            !/[a-z]/.test(value) ||
            !/[0-9]/.test(value)
        ) {
            error =
                "Use 8+ characters, an uppercase letter, a lowercase letter and a digit.";
        }
    }
    if (field === "confirmPassword") {
        const password = document.getElementById("password").value;

        if (!input.value) {
            error = "Please confirm your password.";
        } else if (input.value !== password) {
            error = "Passwords do not match.";
        }
    }
    if (field === "reason") {
        if (!value) {
            error = "Please choose an option.";
        }
    }
    if (field === "consent") {
        if (!value) {
            error = "You must agree to the terms.";
        }
    }
    showError(field, error);
    return error === "";
}
fields.forEach(function (field) {
    const input = document.getElementById(field);

    input.addEventListener("input", function () {
        validateField(field);
        if (field === "password" &&
            document.getElementById("confirmPassword").value) {
            validateField("confirmPassword");
        }
        document.getElementById("formMessage").textContent = "";
    });
    input.addEventListener("change", function () {
        validateField(field);
        document.getElementById("formMessage").textContent = "";
    });
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    fields.forEach(function (field) {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    const message = document.getElementById("formMessage");
    if (isValid) {
        message.textContent = "Registration form completed successfully!";
        message.style.color = "#278b43";
    } else {
        message.textContent = "Please correct the errors above.";
        message.style.color = "#c62828";
    }
});