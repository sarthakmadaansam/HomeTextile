"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.getElementById("closemodal");
const btnOpenModal = document.getElementById("pay");
const det = document.querySelector(".details");
const subheading = document.querySelector(".subhead");
const cat = document.querySelector(".caution");
const foot = document.querySelector(".footing");

const closeModal = function () {
  modal.classList.add("hidden");
  subheading.classList.remove("hidden");
  det.classList.remove("hidden");
  btnOpenModal.classList.remove("hidden");
  cat.classList.remove("hidden");
};

const openModal = function () {
  subheading.classList.add("hidden");
  det.classList.add("hidden");
  btnOpenModal.classList.add("hidden");
  modal.classList.remove("hidden");
  cat.classList.add("hidden");
  foot.classList.add("hidden");
  console.log("hello");
};

btnCloseModal.addEventListener("click", closeModal);
btnOpenModal.addEventListener("click", openModal);
