// Customize Umbrella Code

document.addEventListener("DOMContentLoaded", function () {
    const umbrella = document.getElementById("umbrella");
    const logoUpload = document.getElementById("logo-upload");
    const logoPreview = document.getElementById("logo-preview");
    const colorButtons = document.querySelectorAll(".color-btn");

    // Change umbrella color and theme
    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            let selectedColor = this.getAttribute("data-color");
            umbrella.src = `images/${selectedColor}.png`;
            document.body.className = `${selectedColor}-theme`;
        });
    });

    // Handle logo upload
    logoUpload.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                logoPreview.src = e.target.result;
                logoPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
});
