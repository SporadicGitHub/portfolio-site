// Filter Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Set this button as active
    this.classList.add('active');
    
    // Loop through each masonry item and display or hide based on filter
    document.querySelectorAll('.masonry-item').forEach(item => {
      if (filter === 'reset') {
        item.style.display = 'block';
      } else {
        if (item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

// Modal Functionality for Expanded Images
function openModal(element) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = element.src;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("imgModal");
  modal.style.display = "none";
}

// Attach click event to all images with class "masonry-img"
document.querySelectorAll('.masonry-img').forEach(img => {
  img.addEventListener('click', function() {
    openModal(this);
  });
});

// Close modal when clicking on the close button
document.getElementById("closeModal").addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent event bubbling
  closeModal();
});

// Close modal when clicking outside the modal content
document.getElementById("imgModal").addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal when the ESC key is pressed
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
