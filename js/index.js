// Your code goes 
function changeColorH () {
    logo.style.color = "red";
}
function changeColorB () {
    logo.style.color = "black";
}
let logo = document.querySelector('.logo-heading');
console.log(logo)
logo.addEventListener('mouseover', changeColorH )
logo.addEventListener('mouseout', changeColorB )
let navList = document.querySelectorAll('nav .nav-link ');
// let arrNav = Array.from(navList)
console.log(navList)
function changeNav (item) {
    console.log(navList)
        item.target.style.color = "purple"
    
}
function changeNavHV (item) {
    console.log(navList)
        item.target.style.color = "green"
    
}
navList.forEach(item => item.addEventListener('click', changeNav));
navList.forEach(item1 => item1.addEventListener('mouseover', changeNavHV))

mainImg = document.querySelector('header img')
mainImg.addEventListener('mouseover', imgOpacity)
mainImg.addEventListener('mouseout', imgOpacity1);
function imgOpacity(item){
    mainImg.style.opacity = '50%';
}
function imgOpacity1(item){
    mainImg.style.opacity = '100%';
}
let welcomeBus = document.querySelector('header h2');
console.log(welcomeBus);
welcomeBus.addEventListener('click', item => welcomeBus.style.fontSize = '50px')
let welcomeTxt = document.querySelector('header p')
welcomeTxt.addEventListener('mouseover', item =>
welcomeTxt.style.fontWeight = 'bold')
let mapImg = document.querySelector('.img-content img');
console.log(mapImg)
mapImg.addEventListener('click', item => 
mapImg.src = "https://images.unsplash.com/photo-1601412349797-2383bac9c6f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80");