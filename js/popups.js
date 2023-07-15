const btnAdd = document.querySelector(".btn_add");
const popupAdd = document.querySelector(".popup_add");
const btnCloseAdd = document.querySelector(".btn_close_add");
const overflow = document.querySelector(".overflow");
const btnsUpdate = document.querySelectorAll(".btn_update");
const popupUpdate = document.querySelector(".popup_update");
const btnCloseUpdate = document.querySelector(".btn_close_update");

btnAdd.addEventListener("click", () => {
  popupAdd.classList.add("active");
  overflow.classList.add("active");
});

btnCloseAdd.addEventListener("click", () => {
  popupAdd.classList.remove("active");
  overflow.classList.remove("active");
});

btnsUpdate.forEach((item) => {
  item.addEventListener("click", () => {
    popupUpdate.classList.add("active");
    overflow.classList.add("active");
  });
});

btnCloseUpdate.addEventListener("click", () => {
  popupUpdate.classList.remove("active");
  overflow.classList.remove("active");
});
