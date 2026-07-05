document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".doctor-card");

    if (!searchInput) {
        console.log("Search input not found!");
        return;
    }

    searchInput.addEventListener("input", function () {

        let value = this.value.toLowerCase().trim();

        cards.forEach(card => {

            let name = card.getAttribute("data-name");

            if (!name) return;

            name = name.toLowerCase();

            if (name.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});