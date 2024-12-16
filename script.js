document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            let details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});
