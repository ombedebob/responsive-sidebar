let btn = document.querySelector('#btn');
let sideBar = document.querySelector('.side-bar');
btn.onclick = function () {
  sideBar.classList.toggle('active');
}