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