// JavaScript Document
// JavaScript Document

// --- RANDEVU FORMU ---
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert("Teşekkürler! Randevu talebiniz alındı. Atölyemiz en kısa sürede sizinle iletişime geçecektir.");
    this.reset();
});

// --- MOBİL HAMBURGER MENÜ ---
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Menü linklerinden birine tıklandığında menüyü otomatik kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// --- SCROLL REVEAL (AŞAĞI KAYDIRDIKÇA BELİRME ANİMASYONU) ---
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // Elementin kaç pikseli görününce animasyon başlasın
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
// Sayfa ilk yüklendiğinde de kontrol et
revealSections();