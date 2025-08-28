const mobile_nav_btn = document.querySelector('.mobile-nav-btn');
const btn = document.querySelector(".landing-page header nav a button");
const close_btn = document.querySelector('.fa-xmark');
mobile_nav_btn.addEventListener("click",()=>{

btn.style.display='inline';



});
close_btn.addEventListener('click',()=>{
  btn.style.transform="translate(3rem)";
  setTimeout(() => {
    btn.style.display='none';
  }, 500);
})


