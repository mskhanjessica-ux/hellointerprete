// ===== Menu déroulant "Nos services" (clic — utile surtout sur mobile) =====
const dropdownParent = document.querySelector(".has-dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");

if (dropdownParent && dropdownBtn) {
    dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdownParent.classList.toggle("open");
        dropdownBtn.setAttribute("aria-expanded", isOpen);
    });

    // Ferme le menu si on clique ailleurs
    document.addEventListener("click", (e) => {
        if (!dropdownParent.contains(e.target)) {
            dropdownParent.classList.remove("open");
            dropdownBtn.setAttribute("aria-expanded", "false");
        }
    });
}

// ===== Menu burger (mobile) =====
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            if (dropdownParent) dropdownParent.classList.remove("open");
        });
    });
}

// ===== Formulaires (placeholder — le backend viendra plus tard) =====
document.querySelectorAll(".js-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Merci ! Votre demande a bien été enregistrée. (L'envoi réel sera branché quand le backend sera prêt.)");
        form.reset();
    });
});
