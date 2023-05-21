const red = document.getElementById('rdbtn');
const green = document.getElementById('grbtn');
const blue = document.getElementById('blbtn');

red.addEventListener('click', function handleClick() {
  document.body.style.backgroundColor = "red";
  document.getElementById('colorNotif').innerHTML = "You changed background color to: red!"
});

green.addEventListener('click', function handleClick() {
  document.body.style.backgroundColor = "green";
  document.getElementById('colorNotif').innerHTML = "You changed background color to: green!"
});

blue.addEventListener('click', function handleClick() {
  document.body.style.backgroundColor = "blue";
  document.getElementById('colorNotif').innerHTML = "You changed background color to: blue!"
});
