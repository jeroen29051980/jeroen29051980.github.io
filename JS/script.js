let allModals = document.getElementsByClassName("modal");

function openModal(btnID) {
    for (let i = 0; i < allModals.length; i++) {
        allModals[i].style.display = "none";
    }
    document.getElementById(btnID).style.display = "block";
}

function closeModal() {
    for (let i = 0; i < allModals.length; i++) {
        allModals[i].style.display = "none";
    }
}

function changeLanguage() {
    // Implement language switching logic here

}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}
