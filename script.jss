
document.addEventListener("DOMContentLoaded", function() {
    const hiddenMessage = document.getElementById("hiddenMessage");
    setTimeout(() => {
        hiddenMessage.style.display = "block";
    }, 3000); // Display the message after 3 seconds
});
