// Otomatis update highlight tombol navigasi saat di-scroll atau diklik
document.addEventListener("DOMContentLoaded", () => {
    const dockItems = document.querySelectorAll(".dock-item");
    const sections = document.querySelectorAll(".content-section");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        dockItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });
    });
});