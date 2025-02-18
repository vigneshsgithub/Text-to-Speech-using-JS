const textField = document.getElementById("myTextField");

// Function to set cursor position at the start
function setCursorAtPlaceholder() {
    textField.focus();
    textField.setSelectionRange(0, 0); // Moves cursor to the start
}

// Call function when page loads
window.onload = setCursorAtPlaceholder;
 