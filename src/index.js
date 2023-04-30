import './less/index.less'

const headerImg = document.querySelector(".intro img")

headerImg.addEventListener("mouseover", (a) => {
    a.target.style.filter= "grayscale(1) blur(3px)"}
)
headerImg.addEventListener("mouseleave", (a) => {
    a.target.style.filter= "grayscale(0) blur(0)"}
);

const buttons = document.querySelectorAll(".btn")

for(let i of buttons) {
    i.addEventListener("click", (e) => {
        alert("Rezervasyon için telefon numaramız : 28923198398721")
    })
};

const navs = document.querySelectorAll("nav a")

console.log(navs)

for(let i of navs) {
    i.addEventListener("mouseover",function(c){
        i.style.fontWeight = "bold"}
    )
    i.addEventListener("mouseleave",function(c){
       i.style.fontWeight = "normal"}
    )
};