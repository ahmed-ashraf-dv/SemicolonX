// ===================    Type Writing   ======================

const typedTextSpan = document.querySelector("#hero .wrtitter-effect");

let textArray;

if (document.querySelector("html").lang === "en") {
  textArray = ["SemicolonX", "Web Design", "Development", "SEO", "Web Hosting"];
} else {
  textArray = ["SemicolonX", "مصممين ويب", "مطورين ويب"];
}

const typingDelay = 200;
const erasingDelay = 30;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (textArray[textArrayIndex] === "SemicolonX") {
      typedTextSpan.classList.add("text-danger");
    } else {
      typedTextSpan.classList.remove("text-danger");
    }

    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
};

const erase = () => {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
};

if (typedTextSpan) {
  document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
}

// Nav BG
const nav = document.querySelector("#header");

const handelNavBgColor = () => {
  if (window.scrollY > 70) {
    nav.classList.add("nav-bg-scroll");
  } else {
    nav.classList.remove("nav-bg-scroll");
  }
};

window.addEventListener("scroll", handelNavBgColor);
window.addEventListener("load", handelNavBgColor);

// Portfolio data
const portfolioBody = document.querySelector("#portfolio .body .row");
const getCard = ({ link, img, patch }) => `
  <div
  class="card-portfolio col-12 col-md-6 col-lg-3 p-0 m-auto m-md-0"
  data-url="${link}"
  >
    <div class="img">
      <img loading="lazy" src="${patch}/${img}" alt="Error In Server" />
    </div>
    <lord-icon
      src="https://cdn.lordicon.com/tyounuzx.json"
      trigger="loop"
      class="view-icon"
      colors="primary:#fff,secondary:#fff"
      stroke="45"
      scale="35"
    >
    </lord-icon>
    <div class="link">
      <div class="icon">
        <i class="bi bi-link-45deg"></i>
      </div>
    </div>
  </div>
`;

// Create Data
const portfolioData = [
  {
    link: "http://www.yanabee.tv/",
    img: "portfolio-1.webp",
    type: "web app",
  },
  {
    link: "http://memaaralmorshedyeg.com/",
    img: "portfolio-2.webp",
    type: "web app",
  },
  {
    link: "https://www.alukah.net/",
    img: "portfolio-3.webp",
    type: "web app",
  },
  {
    link: "https://beonlineacademy.net/login",
    img: "portfolio-4.webp",
    type: "web app",
  },
  {
    link: "https://ahmed-ashraf-dv.github.io/GameBlog/",
    img: "portfolio-5.webp",
    type: "web app",
  },
  {
    link: "https://ahmed-ashraf-dv.github.io/EgFaucet/",
    img: "portfolio-6.webp",
    type: "web app",
  },
  {
    link: "https://ahmed-ashraf-dv.github.io/programmer-portfolio/",
    img: "portfolio-8.webp",
    type: "web app",
  },
  {
    link: "http://arabelectric.net/",
    img: "portfolio-7.webp",
    type: "web app",
  },
  {
    link: "https://mobimongez.com/",
    img: "portfolio-9.webp",
    type: "web app",
  },
  //
  // Deisgns
  {
    link: "https://www.behance.net/gallery/129122767/Ta3afi-App-",
    img: "portfolio-13.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/134569699/FOODC",
    img: "portfolio-14.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/143499517/Electro-e-commerce-android-and-web-versions",
    img: "portfolio-10.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/130137267/Eshoping-E-commerce-app",
    img: "portfolio-11.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/131630999/EIS-shop-E-commerce-app",
    img: "portfolio-12.webp",
    type: "design",
  },

  {
    link: "https://www.behance.net/gallery/128366729/Sadka-App-Donation-app-",
    img: "portfolio-15.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/129949871/Payshin-App-Electronic-payment",
    img: "portfolio-16.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/129243733/HOTELS-Booking-Website-Design",
    img: "portfolio-17.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/125124407/website-design-nogom-masrya",
    img: "portfolio-18.webp",
    type: "design",
  },
  {
    link: "https://www.behance.net/gallery/118315167/Redesign-ALSADHAN",
    img: "portfolio-19.webp",
    type: "design",
  },
];

const wepApps = portfolioData.filter((card) => card.type === "web app");
const designs = portfolioData.filter((card) => card.type === "design");

const addDataToBox = (data) => {
  const newData = [...data];

  const getData = (el, patch) => {
    return el.classList.contains("portfolio")
      ? newData.map(({ link, img }) => getCard({ link, img, patch })).join("")
      : newData
          .splice(0, 8)
          .map(({ link, img }) => getCard({ link, img, patch }))
          .join("");
  };
  // Set Data
  const patch = portfolioBody.dataset.patch;

  portfolioBody.innerHTML = "";
  portfolioBody.innerHTML = getData(portfolioBody, patch);

  // Get Portfolio Project Link
  const cards = document.querySelectorAll(".card-portfolio");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectURL = card.getAttribute("data-url");

      window.open(projectURL);
    });
  });
};

addDataToBox(wepApps);

// Filters
const filters = document.querySelectorAll(".portfolio-filters");

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    filters.forEach((filter) => filter.classList.remove("filter-active"));

    filter.classList.add("filter-active");

    if (filter.dataset.filter === "wep app") {
      return addDataToBox(wepApps);
    }

    if (filter.dataset.filter === "design") {
      return addDataToBox(designs);
    }
  });
});

// Easy selector helper function
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

// Easy event listener function
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

// Easy on scroll event listener
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

// Navbar links active state on scroll
let scrollToLinks = document.querySelectorAll(".scrollto");

const scrollToLinksActive = () => {
  let position = window.scrollY + 200;
  scrollToLinks.forEach((scrollToLinks) => {
    if (!scrollToLinks.hash) return;

    let section = document.querySelector(scrollToLinks.hash);
    if (!section) return;

    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      scrollToLinks.classList.add("active");
    } else {
      scrollToLinks.classList.remove("active");
    }
  });
};

window.addEventListener("load", scrollToLinksActive);
onscroll(document, scrollToLinksActive);

// Scrolls to an element with header offset
const scrollto = (el) => {
  let header = select("#header");
  let offset = header.offsetHeight;

  if (!header.classList.contains("header-scrolled")) {
    offset -= 16;
  }

  let elementPos = document.querySelector(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: "smooth",
  });
};

// Header fixed top on scroll
let selectHeader = select("#header");
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop;
  let nextElement = selectHeader.nextElementSibling;
  const headerFixed = () => {
    if (headerOffset - window.scrollY <= 0) {
      selectHeader.classList.add("fixed-top");
      nextElement.classList.add("scrolled-offset");
    } else {
      selectHeader.classList.remove("fixed-top");
      nextElement.classList.remove("scrolled-offset");
    }
  };
  window.addEventListener("load", headerFixed);
  onscroll(document, headerFixed);
}

// Back to top button
let backtotop = select(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

// Mobile nav toggle
on("click", ".mobile-nav-toggle", function (e) {
  select("#navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

// Mobile nav dropdowns activate
on(
  "click",
  ".navbar .dropdown > a",
  function (e) {
    if (select("#navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("dropdown-active");
    }
  },
  true
);

// Scrool with ofset on links with a class name .scrollto
scrollToLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (document.querySelector(link.hash)) {
      e.preventDefault();

      const navbar = select("#navbar");
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        const navbarToggle = select(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }

      scrollto(link.hash);
    }
  });
});

// Scroll with ofset on page load with hash links in the url
window.addEventListener("load", () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

// Preloader
let preloader = select("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

//  Porfolio isotope and filter
window.addEventListener("load", () => {
  let portfolioContainer = select(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
    });

    let portfolioFilters = select("#portfolio-flters li", true);

    on(
      "click",
      "#portfolio-flters li",
      function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
        portfolioIsotope.on("arrangeComplete", function () {
          AOS.refresh();
        });
      },
      true
    );
  }
});

//  Initiate portfolio lightbox
const portfolioLightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

// Portfolio details slider
new Swiper(".portfolio-details-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

//  Animation on scroll
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
