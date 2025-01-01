// swiper
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Lightbox Options
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'wrapAround': true,
        'disableScrolling': true,
        'showImageNumberLabel': false
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target.getAttribute('data-progress');
          entry.target.style.width = `${progress}%`;
        }
      });
    }, { threshold: 0.5 });
  
    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  });

// Modal
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Lightbox Modal Functionality
    const swiperSlides = document.querySelectorAll('.swiper-slide img');
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-btn');

    // Open lightbox when image is clicked
    swiperSlides.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'flex';
            modalImg.src = this.src; // Set the modal image to the clicked image
        });
    });

    // Close modal when close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside of the image
    modal.addEventListener('click', function (e) {
        if (e.target !== modalImg) {
            modal.style.display = 'none';
        }
    });
});
