// Portfolio filtering
function filterItems(category) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
    status.style.color = "red";
  } else {
    status.textContent = "Xabar yuborildi! Rahmat.";
    status.style.color = "green";
    // Bu yerda real backendga yuborish funksiyasi bo'lishi mumkin
    this.reset();
  }
});
