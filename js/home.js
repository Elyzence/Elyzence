var leftRectangle = document.querySelector('.rectangle.left');
var rightRectangle = document.querySelector('.rectangle.right');
var messageElement = document.getElementById('message');

leftRectangle.addEventListener('animationend', function() {
  // Add class "animation-ended" to the left rectangle
  leftRectangle.classList.add('animation-ended');
});

rightRectangle.addEventListener('animationend', function() {
  // Add class "animation-ended" to the right rectangle
  rightRectangle.classList.add('animation-ended');
});