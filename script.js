document.addEventListener("DOMContentLoaded", () => {

    /* ===== FADE-IN ANIMACE ===== */
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(el => observer.observe(el));


    /* ===== GLOW EFEKT ===== */
    document.querySelectorAll(".image-placeholder").forEach(box => {
        box.addEventListener("click", () => {
            box.style.boxShadow = "0 0 60px rgba(255,255,255,0.9)";
            setTimeout(() => {
                box.style.boxShadow = "0 0 40px rgba(255,255,255,0.2)";
            }, 400);
        });
    });


    /* ===== MENU ===== */
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-items");

    if(toggle && menu){
        toggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }


    /* ===== TLAČÍTKO INFO ===== */
    const infoBtn = document.getElementById("infoBtn");
    const infoText = document.getElementById("infoText");

    if(infoBtn && infoText){
        infoBtn.addEventListener("click", () => {
            infoText.classList.toggle("show");
        });
    }

});