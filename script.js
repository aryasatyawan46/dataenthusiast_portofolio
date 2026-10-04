// Fungsi untuk membuka modal detail proyek saat kartu diklik
function openModal(modalId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body-content');
    const sourceContent = document.getElementById(modalId);

    if (modal && modalBody && sourceContent) {
        modalBody.innerHTML = sourceContent.innerHTML;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Mencegah background scroll di belakang modal
    }
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Menutup modal jika pengguna mengklik area luar kotak popup
function closeModalOutside(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Navigasi aktif otomatis pada floating dock
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".floating-dock .dock-item");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});