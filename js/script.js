"use strict"

// Script to change the coins to the commissions
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const coinsCard = document.getElementById("coins");
const commissionsCard = document.getElementById("commissions");

leftArrow.addEventListener("click", (e) => {
    coinsCard.classList.remove("hidden");
    commissionsCard.classList.add("hidden");
    leftArrow.classList.add("hidden");
    rightArrow.classList.remove("hidden");
});

rightArrow.addEventListener("click", (e) => {
    coinsCard.classList.add("hidden");
    commissionsCard.classList.remove("hidden");
    rightArrow.classList.add("hidden");
    leftArrow.classList.remove("hidden");
});

//Script to set the current year in the footer
const footerYear = document.getElementById("year");
const year = new Date().getFullYear();

footerYear.innerHTML= year.toString();

// Script move through the plans panel
const firstPlan = document.getElementById("first-plan");
const secondPlan = document.getElementById("second-plan");
const thirdPlan = document.getElementById("third-plan");

const plansLeftArrow = document.getElementById("plans-left-arrow");
const plansRightArrow = document.getElementById("plans-right-arrow");

let position = 1;
// 0 = firstPlan
// 1 = secondPlan
// 2 = thirdPlan
// console.log(firstPlan, secondPlan, thirdPlan, plansLeftArrow, plansRightArrow);

plansLeftArrow.addEventListener("click", (e) => {
    switch(position) {
        case 0:
            firstPlan.classList.add("hidden");

            thirdPlan.classList.remove("hidden");

            position = 2;
            break;
        case 1:
            secondPlan.classList.add("hidden");

            firstPlan.classList.remove("hidden");

            position = 0;
            break;
        default:
            thirdPlan.classList.add("hidden");

            secondPlan.classList.remove("hidden");

            position = 1;
    }
});


plansRightArrow.addEventListener("click", (e) => {
    switch(position) {
        case 0:
            firstPlan.classList.add("hidden");

            secondPlan.classList.remove("hidden");

            position = 1;
            break;
        case 1: 
            secondPlan.classList.add("hidden");

            thirdPlan.classList.remove("hidden");

            position = 2;
            break;
        default:
            thirdPlan.classList.add("hidden");

            firstPlan.classList.remove("hidden");

            position = 0;
    }
});


// Script to change the size of height of the eyes bitcoin image
let resize = (a) => {
    console.log(a,"resized");
    const eyeBitcoin = document.getElementById("eyes-bitcoin");
    const x = eyeBitcoin.scrollWidth;
    const y = x + 67;

    eyeBitcoin.style.height = `${y}px`;
}

// When the window has loaded
window.addEventListener("load", (e) => {
    resize(0);
});

// When the window is resizing
window.addEventListener("resize", (e) => {
    resize(1);
});
