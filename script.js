document.addEventListener("DOMContentLoaded", () => {
    const addressElement = document.querySelector(".adress2");
    const searchButton = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");
    const menuToggle = document.querySelector(".panel-all");
    const panelOps = document.querySelector(".PANEL-OPS");

    if (addressElement) {
        addressElement.textContent = "New Delhi";
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", () => {
            alert(`Searching for: ${searchInput.value}`);
        });
    }

    if (menuToggle && panelOps) {
        menuToggle.addEventListener("click", () => {
            panelOps.classList.toggle("visible");
        });
    }

    const productBoxes = document.querySelectorAll(".box");
    productBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.transform = "scale(1.05)";
            box.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
        });
        box.addEventListener("mouseout", () => {
            box.style.transform = "scale(1)";
            box.style.boxShadow = "none";
        });
    });
});
