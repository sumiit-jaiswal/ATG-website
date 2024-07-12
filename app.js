var modal = document.getElementById("loginModal");

// Get the buttons that open the modal
var createAccountBtn = document.getElementById("create-account-btn");
var joinGroupBtn = document.getElementById("join-group-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for "Create Account" button
createAccountBtn.onclick = function () {
    openModal();
}

// Event listener for "Join Group" button
joinGroupBtn.onclick = function () {
    openModal();
}

// Event listener for closing the modal with <span> (x)
span.onclick = function () {
    closeModal();
}

// Event listener to close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
