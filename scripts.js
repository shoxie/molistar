function dropdownToggle() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else if (x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function searchToggle() {
  var x = document.getElementById("searchBar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else if (x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper1 = new Swiper(".swiper-container1", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const starSwiper = new Swiper(".swiper-container-star", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 10,
});
const specialSwiper = new Swiper(".swiper-container-special", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 1000,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 100,
  },
});
const filmSwiper = new Swiper(".swiper-container-film", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: -1,
});
const commSwiper = new Swiper(".swiper-container-community", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
});
