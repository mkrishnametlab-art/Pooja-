/* =====================================================
   SHUBH PUJA SEVA
   INTERACTIVE JAVASCRIPT
===================================================== */

"use strict";


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

  const preloader =
    document.getElementById("preloader");

  setTimeout(() => {

    preloader.classList.add("hide");

  }, 700);

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
  document.querySelector(".site-header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");


mobileMenuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});


document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");

    });

  });


/* =====================================================
   SERVICE FILTER
===================================================== */

const filterButtons =
  document.querySelectorAll(".filter-btn");

const serviceCards =
  document.querySelectorAll(".service-card");

const serviceSearch =
  document.getElementById("serviceSearch");


let currentFilter = "all";


function filterServices() {

  const searchText =
    serviceSearch.value
      .toLowerCase()
      .trim();


  serviceCards.forEach(card => {

    const categories =
      card.dataset.category
        .toLowerCase();

    const searchable =
      card.dataset.search
        .toLowerCase();

    const title =
      card.querySelector("h3")
        .textContent
        .toLowerCase();


    const categoryMatch =
      currentFilter === "all" ||
      categories.includes(currentFilter);


    const searchMatch =
      !searchText ||
      searchable.includes(searchText) ||
      title.includes(searchText);


    if (categoryMatch && searchMatch) {

      card.style.display = "";

      requestAnimationFrame(() => {

        card.style.opacity = "1";
        card.style.transform = "";

      });

    } else {

      card.style.display = "none";

    }

  });

}


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {

      btn.classList.remove("active");

    });

    button.classList.add("active");

    currentFilter =
      button.dataset.filter;

    filterServices();

  });

});


serviceSearch.addEventListener(
  "input",
  filterServices
);


/* =====================================================
   SERVICE DETAILS MODAL
===================================================== */

const modal =
  document.getElementById("serviceModal");

const modalClose =
  document.getElementById("modalClose");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");


const serviceDescriptions = {

  "Griha Pravesh Puja":
    "Traditional Vedic Griha Pravesh ceremony performed for an auspicious entry into your new home, with Sankalp, mantras and puja vidhi.",

  "Griha Shanti Havan":
    "Sacred Havan ceremony intended to create a peaceful and spiritually positive environment in the home.",

  "Satyanarayan Katha":
    "Traditional Shri Satyanarayan Katha and Puja with Katha path, Sankalp and devotional rituals.",

  "Ganesh Puja":
    "Shri Ganesh Puja for auspicious beginnings, wisdom, success and removal of obstacles.",

  "Navgraha Havan":
    "Traditional Navgraha Havan performed with Vedic mantras and offerings associated with the nine planetary deities.",

  "Naamkaran Sanskar":
    "Traditional Naamkaran Sanskar for welcoming and formally naming a child through Vedic rituals.",

  "Lakshmi Puja":
    "Traditional Lakshmi Puja for prosperity, abundance, peace and auspicious energy.",

  "Maha Mrityunjaya Puja":
    "Maha Mrityunjaya mantra-based Vedic puja performed with Sankalp and traditional rituals."

};


document
  .querySelectorAll(".details-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      const service =
        button.dataset.service;

      modalTitle.textContent =
        service;

      modalDescription.textContent =
        serviceDescriptions[service] ||
        "Traditional Vedic ceremony performed according to the selected service requirements.";

      modal.classList.add("active");

      document.body.classList.add(
        "modal-open"
      );

    });

  });


function closeModal() {

  modal.classList.remove("active");

  document.body.classList.remove(
    "modal-open"
  );

}


modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener("click", event => {

  if (event.target === modal) {

    closeModal();

  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeModal();

  }

});


/* =====================================================
   MODAL BOOK BUTTON
===================================================== */

const modalBook =
  document.querySelector(".modal-book");


modalBook.addEventListener("click", () => {

  closeModal();

});


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

  const question =
    item.querySelector(".faq-question");

  const answer =
    item.querySelector(".faq-answer");


  question.addEventListener("click", () => {

    const alreadyOpen =
      item.classList.contains("open");


    faqItems.forEach(otherItem => {

      otherItem.classList.remove("open");

      const otherAnswer =
        otherItem.querySelector(
          ".faq-answer"
        );

      otherAnswer.style.maxHeight = null;

    });


    if (!alreadyOpen) {

      item.classList.add("open");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

  });

});


/* =====================================================
   ADDON SUMMARY
===================================================== */

const addonCheckboxes =
  document.querySelectorAll(
    ".addon-checkbox"
  );


const summaryAddons =
  document.getElementById(
    "summaryAddons"
  );


function updateAddonSummary() {

  const selectedCount =
    [...addonCheckboxes].filter(
      checkbox => checkbox.checked
    ).length;

  summaryAddons.textContent =
    selectedCount
      ? `${selectedCount} selected`
      : "None selected";

}


addonCheckboxes.forEach(
  checkbox => {

    checkbox.addEventListener(
      "change",
      updateAddonSummary
    );

  }
);


/* =====================================================
   SERVICE SUMMARY
===================================================== */

const selectedService =
  document.getElementById(
    "selectedService"
  );

const summaryService =
  document.getElementById(
    "summaryService"
  );


selectedService.addEventListener(
  "change",
  () => {

    summaryService.textContent =
      selectedService.value ||
      "Not selected";

  }
);


/* =====================================================
   PACKAGE SERVICE SELECTION
===================================================== */

document
  .querySelectorAll(".package-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      const card =
        button.closest(".package-card");

      const title =
        card.querySelector("h3")
          .textContent;

      const packageSelect =
        selectedService;


      if (title === "Basic Puja") {

        packageSelect.value =
          "Ganesh Puja";

      } else if (
        title === "Complete Puja"
      ) {

        packageSelect.value =
          "Griha Shanti Havan";

      } else if (
        title === "Maha Anushthan"
      ) {

        packageSelect.value =
          "Maha Mrityunjaya Puja";

      }


      summaryService.textContent =
        packageSelect.value ||
        title;

    });

  });


/* =====================================================
   BOOKING FORM → WHATSAPP
===================================================== */

const bookingForm =
  document.getElementById(
    "bookingForm"
  );


bookingForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const name =
      document.getElementById(
        "customerName"
      ).value.trim();


    const phone =
      document.getElementById(
        "customerPhone"
      ).value.trim();


    const service =
      document.getElementById(
        "selectedService"
      ).value;


    const date =
      document.getElementById(
        "pujaDate"
      ).value;


    const time =
      document.getElementById(
        "pujaTime"
      ).value;


    const address =
      document.getElementById(
        "customerAddress"
      ).value.trim();


    const message =
      document.getElementById(
        "customerMessage"
      ).value.trim();


    if (!name || !phone || !service) {

      alert(
        "Please enter your name, phone number and select a Puja service."
      );

      return;

    }


    const selectedAddons = [];


    addonCheckboxes.forEach(
      checkbox => {

        if (checkbox.checked) {

          selectedAddons.push(
            checkbox.dataset.name
          );

        }

      }
    );


    const addonText =
      selectedAddons.length
        ? selectedAddons.join(", ")
        : "No add-ons selected";


    const formattedDate =
      date
        ? new Date(
            date + "T00:00:00"
          ).toLocaleDateString(
            "en-IN",
            {
              day: "2-digit",
              month: "long",
              year: "numeric"
            }
          )
        : "Not specified";


    const whatsappMessage =

`🪔 *SHUBH PUJA SEVA – BOOKING REQUEST*

🙏 *New Puja Enquiry*

*Name:* ${name}
*Phone:* ${phone}

*Service:* ${service}
*Preferred Date:* ${formattedDate}
*Preferred Time:* ${time || "Not specified"}

*Location:*
${address || "Not specified"}

*Add-ons:*
${addonText}

*Additional Requirement:*
${message || "None"}

Please confirm availability and booking details.

🙏 Thank You
Shubh Puja Seva`;


    const whatsappURL =

      "https://wa.me/919588398563?text=" +
      encodeURIComponent(
        whatsappMessage
      );


    window.open(
      whatsappURL,
      "_blank"
    );

  }
);


/* =====================================================
   DATE MINIMUM = TODAY
===================================================== */

const dateInput =
  document.getElementById(
    "pujaDate"
  );


const today =
  new Date();


const year =
  today.getFullYear();


const month =
  String(
    today.getMonth() + 1
  ).padStart(2, "0");


const day =
  String(
    today.getDate()
  ).padStart(2, "0");


dateInput.min =
  `${year}-${month}-${day}`;


/* =====================================================
   SCROLL TOP
===================================================== */

const scrollTop =
  document.getElementById(
    "scrollTop"
  );


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 600) {

      scrollTop.classList.add(
        "visible"
      );

    } else {

      scrollTop.classList.remove(
        "visible"
      );

    }

  }
);


scrollTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".service-card, .package-card, .process-step, .testimonial, .about-content"
  );


revealElements.forEach(element => {

  element.classList.add("reveal");

});


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: .12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =====================================================
   3D HERO PARALLAX
===================================================== */

const heroVisual =
  document.querySelector(
    ".hero-visual"
  );


if (heroVisual) {

  heroVisual.addEventListener(
    "mousemove",
    event => {

      const rect =
        heroVisual.getBoundingClientRect();


      const x =
        (event.clientX -
          rect.left) /
        rect.width -
        .5;


      const y =
        (event.clientY -
          rect.top) /
        rect.height -
        .5;


      const om =
        heroVisual.querySelector(
          ".om-3d"
        );


      const bowl =
        heroVisual.querySelector(
          ".havan-bowl"
        );


      if (om) {

        om.style.transform =
          `translateX(-50%)
           rotateY(${x * 14}deg)
           rotateX(${-y * 10}deg)`;

      }


      if (bowl) {

        bowl.style.transform =
          `rotateY(${x * 8}deg)
           rotateX(${-y * 5}deg)`;

      }

    }
  );


  heroVisual.addEventListener(
    "mouseleave",
    () => {

      const om =
        heroVisual.querySelector(
          ".om-3d"
        );


      const bowl =
        heroVisual.querySelector(
          ".havan-bowl"
        );


      if (om) {

        om.style.transform =
          "translateX(-50%)";

      }


      if (bowl) {

        bowl.style.transform =
          "none";

      }

    }
  );

}


/* =====================================================
   THREE.JS PARTICLE BACKGROUND
===================================================== */

function initThreeJS() {

  if (
    typeof THREE === "undefined"
  ) {

    return;

  }


  const container =
    document.querySelector(
      ".hero"
    );


  if (!container) {
    return;
  }


  const canvas =
    document.createElement(
      "canvas"
    );


  canvas.style.position =
    "absolute";

  canvas.style.inset = "0";

  canvas.style.width = "100%";

  canvas.style.height = "100%";

  canvas.style.pointerEvents =
    "none";

  canvas.style.opacity = ".25";

  canvas.style.zIndex = "1";


  container.appendChild(canvas);


  const scene =
    new THREE.Scene();


  const camera =
    new THREE.PerspectiveCamera(
      45,
      window.innerWidth /
      window.innerHeight,
      .1,
      1000
    );


  camera.position.z = 35;


  const renderer =
    new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });


  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      2
    )
  );


  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );


  const geometry =
    new THREE.BufferGeometry();


  const particleCount = 700;


  const positions =
    new Float32Array(
      particleCount * 3
    );


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const radius =
      10 +
      Math.random() * 22;


    const angle =
      Math.random() *
      Math.PI * 2;


    positions[i * 3] =
      Math.cos(angle) * radius;

    positions[i * 3 + 1] =
      (Math.random() - .5) *
      18;

    positions[i * 3 + 2] =
      Math.sin(angle) * radius;

  }


  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );


  const material =
    new THREE.PointsMaterial({

      color: 0xd8a84e,

      size: .055,

      transparent: true,

      opacity: .75

    });


  const particles =
    new THREE.Points(
      geometry,
      material
    );


  scene.add(particles);


  let animationId;


  function animate() {

    animationId =
      requestAnimationFrame(
        animate
      );


    particles.rotation.y +=
      .0008;

    particles.rotation.x +=
      .0002;


    renderer.render(
      scene,
      camera
    );

  }


  animate();


  window.addEventListener(
    "resize",
    () => {

      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

    }
  );


  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        document.hidden
      ) {

        cancelAnimationFrame(
          animationId
        );

      } else {

        animate();

      }

    }
  );

}


initThreeJS();


/* =====================================================
   CONSOLE BRANDING
===================================================== */

console.log(
  "%c🪔 Shubh Puja Seva",
  "color:#d65a16;font-size:20px;font-weight:bold;"
);

console.log(
  "%cTraditional Vedic Services • 9588398563",
  "color:#5b160c;font-size:12px;"
);