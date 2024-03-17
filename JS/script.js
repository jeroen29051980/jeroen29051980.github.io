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
