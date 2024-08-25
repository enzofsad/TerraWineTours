let prevScrollPos = document.getElementById('content').scrollTop;
const navbar = document.getElementById('navbar');

document.getElementById('content').onscroll = function () {
  let currentScrollPos = document.getElementById('content').scrollTop;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
}

window.onload = function() {
  const container = document.querySelector('.map-container');
  container.scrollLeft = container.scrollWidth / 4;
};
