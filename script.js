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

document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.carousel-item img');
  const positions = ['top', 'bottom'];
  let currentIndex = 0;

  function updateFocus(index) {
    if (index === 0) {
      image.style.transform = 'translateY(-24.5%) translateX(3%)';
    } else if (index === 1) {
      image.style.transform = 'translateY(-30%) translateX(3%)';
    }
  }

  document.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : positions.length - 1;
    updateFocus(currentIndex);
  });

  document.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex < positions.length - 1) ? currentIndex + 1 : 0;
    updateFocus(currentIndex);
  });

  updateFocus(currentIndex);
});
