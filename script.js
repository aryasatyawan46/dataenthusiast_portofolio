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

/* Styling Kartu Portfolio */
.portfolio-preview-img {
    width: 100%;
    height: 180px;
    background: rgba(15, 23, 42, 0.6);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(208, 230, 253, 0.15);
}

.portfolio-preview-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.portfolio-card:hover .portfolio-preview-img img {
    transform: scale(1.05);
}

.fallback-preview {
    font-size: 2.8rem;
    color: var(--accent-blue);
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 10px 0;
}

.tech-tags span {
    font-size: 0.72rem;
    background: rgba(208, 230, 253, 0.1);
    color: var(--accent-blue);
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid rgba(208, 230, 253, 0.2);
}

/* Styling Kotak Screenshot di Modal */
.modal-screenshot-box {
    margin: 20px 0;
}

.modal-screenshot-box h4 {
    color: var(--text-beige);
    font-size: 1rem;
    margin-bottom: 10px;
}

.screenshot-preview-wrapper {
    width: 100%;
    height: 240px;
    background: #0a1022;
    border: 1px solid rgba(208, 230, 253, 0.2);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.screenshot-preview-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.screenshot-caption {
    font-size: 0.82rem;
    color: var(--accent-blue);
    margin-top: 6px;
    font-style: italic;
}