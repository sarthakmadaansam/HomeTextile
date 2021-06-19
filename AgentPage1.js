const serviceHead = document.getElementById("serviceHead");
const checkBtn = document.querySelector(".checkDetails");
const caution = document.querySelector(".caution");
const id = document.getElementById("service");
const serviceItem = document.querySelector(".serviceItems");
const subhead = document.querySelector(".subhead");
const service = document.getElementById("service");
const modal = document.querySelector(".modal");
const closemodal = document.getElementById("closemodal");
const checkDetails = document.querySelector(".checkDetails");
const checkcaution = document.getElementById("checkcaution");
const detailsOfConsumer = document.querySelector(".detailsOfConsumer");
const modalwindow = document.getElementById("modalwindow");

const servicebook = document.querySelector(".servicebook");

const openDetails = function () {
  serviceHead.classList.add("hidden");
  caution.classList.remove("hidden");
  detailsOfConsumer.classList.remove("hidden");
  id.classList.remove("hidden");
  serviceItem.classList.add("hidden");
  checkDetails.classList.add("hidden");
  checkcaution.classList.add("hidden");
  subhead.classList.remove("hidden");
};

const prompt = function () {
  serviceHead.classList.remove("hidden");
  caution.classList.add("hidden");
  detailsOfConsumer.classList.add("hidden");
  id.classList.add("hidden");
  serviceItem.classList.remove("hidden");
  checkDetails.classList.remove("hidden");
  checkcaution.classList.remove("hidden");
  subhead.classList.add("hidden");
};

const modalWindow = function () {
  serviceHead.classList.add("hidden");
  serviceItem.classList.add("hidden");
  checkDetails.classList.add("hidden");
  checkcaution.classList.add("hidden");
  modal.classList.remove("hidden");
  modalwindow.classList.add("hidden");
  servicebook.classList.add("hidden");
};
const closeWindow = function () {
  serviceHead.classList.remove("hidden");
  caution.classList.add("hidden");
  detailsOfConsumer.classList.add("hidden");
  id.classList.add("hidden");
  serviceItem.classList.remove("hidden");
  checkDetails.classList.remove("hidden");
  checkcaution.classList.remove("hidden");
  subhead.classList.add("hidden");
  servicebook.classList.add("hidden");
  modal.classList.add("hidden");
  modalwindow.classList.remove("hidden");
  servicebook.classList.remove("hidden");
};
checkBtn.addEventListener("click", openDetails);
service.addEventListener("click", prompt);
servicebook.addEventListener("click", modalWindow);
closemodal.addEventListener("click", closeWindow);
