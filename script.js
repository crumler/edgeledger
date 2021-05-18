//Automatically updates Copyright Year within footer
document.querySelector('.copyright-year').innerText = new Date().getFullYear();

const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function() {
      navbar.style.transform = 'translateY(0px)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  };
}

//Smooth Scrolling (jQuery)
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});