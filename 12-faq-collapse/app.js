const btns = document.querySelectorAll('.faq-toggle');
btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        btn.parentElement.classList.toggle('active');
    });
});