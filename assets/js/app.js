document.body.style.overflow = "hidden";
window.addEventListener("load", () => {
  // Turning off the preloader
  let preloader = document.querySelector("#preloader");
  preloader.style.display = "none";
  document.body.style.overflow = "visible";
});

// Disabling the active element
document.addEventListener("click", (event) => {
  // Hiding the input search suggestion on navigation bar when clicked outside it.
  if (event.target.id !== "search") {
    searchSuggest.classList.remove("active");
  }
});

// Showing search suggestion on navigation bar
let searchInput = document.querySelector(".primary-navbar .search-form input[type='text']");
let searchSuggest = document.querySelector(".primary-navbar .search-form .search-suggest");
if (searchInput !== null) {
  searchInput.addEventListener("click", () => {
    searchSuggest.classList.add("active");
  });
}

// Navigation bar for Mobile Devices
let sidebar = document.querySelector("#sidebar");
let navToggleIcon = document.querySelector("#nav-toggle");
let closeIcon = document.querySelector("#close");
// Opening Mobile Navigation Bar
navToggleIcon.addEventListener("click", () => {
  sidebar.classList.add("active");
  document.body.style.overflow = "hidden";
});
// Closing Mobile Navigation Bar
closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("active");
  document.body.style.overflow = "visible";
});

// Adding product to wishlist
let wishlistIcon = document.querySelector(".wishlist");
if (wishlistIcon !== null) {
  wishlistIcon.addEventListener("click", () => {
    let childElement = this.firstElementChild.dataset;
    if (childElement.prefix === "far") {
      childElement.prefix = "fas";
    } else {
      childElement.prefix = "far";
    }
  });
}

// Review Rating
let starIcon = document.querySelectorAll(".review .btn-group .btn");
if (starIcon !== null) {
  starIcon.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Checking the clicked radio button
      event.currentTarget.previousElementSibling.checked = true;
      let starValue = parseInt(event.currentTarget.previousElementSibling.value);
      // Marking Clicked and all the previous star
      for (let rating = 1; rating <= starValue; rating++) {
        starIcon[rating - 1].firstElementChild.dataset.prefix = "fas";
      }
      // Removing remaining star icon
      for (let rating = starValue + 1; rating <= 5; rating++) {
        starIcon[rating - 1].firstElementChild.dataset.prefix = "far";
      }
    });
  });
}

// Changing the main image when clicked on thumbnail
let thumbnails = document.querySelectorAll(".product-thumbnails img");
let mainImg = document.querySelector("#main-image");
if (thumbnails !== null) {
  thumbnails.forEach((item) => {
    item.addEventListener("click", (event) => {
      let srcImage = event.currentTarget.getAttribute("src");
      mainImg.setAttribute("src", srcImage);
    });
  });
}

// Filter Navigation bar mobile devices
let filter = document.querySelector("#filter");
let filterSidebar = document.querySelector("#filter-sidebar");
let filterSidebarBack = document.querySelector("#filter-back");
if (filter !== null) {
  // Opening Filter Navigation Bar
  filter.addEventListener("click", (event) => {
    filterSidebar.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  // Closing FIlter Navigation Bar
  filterSidebarBack.addEventListener("click", (event) => {
    filterSidebar.classList.remove("active");
    document.body.style.overflow = "visible";
  });
}

// Sort Navigation bar mobile devices
let sort = document.querySelector("#sort");
let responsiveSort = document.querySelector("#responsive-sort");
let sortClose = document.querySelector("#sort-close");
if (sort !== null) {
  sort.addEventListener("click", (event) => {
    responsiveSort.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  sortClose.addEventListener("click", (event) => {
    responsiveSort.classList.remove("active");
    document.body.style.overflow = "visible";
  });
}

// Increment and decrement quantity
let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement");
increment.forEach((item) => {
  item.addEventListener("click", (event) => {
    let quantityInput = event.currentTarget.nextElementSibling;
    if (quantityInput.value > 0) {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    } else {
      quantityInput.value = 1;
    }
  });
});

decrement.forEach((item) => {
  item.addEventListener("click", (event) => {
    let quantityInput = event.currentTarget.previousElementSibling;
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    } else {
      quantityInput.value = 1;
    }
  });
});

// Initializing Swiper Slider

// Banner Slider
new Swiper(".banner", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
});

// Products Slider
var swiper = new Swiper(".products-slide", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
});

// Thumbnails Slider
var swiper = new Swiper(".product-thumbnails .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
