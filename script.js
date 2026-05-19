const products = [
    {
        title: "Little Oak",
        price: 40,
        distance: "2.8km away",
        recent: "2h ago",
        image: "images/little-oak.png",
        alt: "Small wooden oak side table",
        category: "bedroom",
    },
    {
        title: "ZZ Plant",
        price: 5,
        distance: "1.2km away",
        recent: "1h ago",
        image: "images/zz-plant.png",
        alt: "ZZ plant in a pot with glossy green leaves",
        category: "plants",
    },
    {
        title: "Coastline Sofa",
        price: 70,
        distance: "2km away",
        recent: "3d ago",
        image: "images/coastline-sofa.png",
        alt: "Light-colored modern sofa with coastal-style design",
        category: "bedroom",
    },
    {
        title: "Timber Table",
        price: 35,
        distance: "5km away",
        recent: "4d ago",
        image: "images/timber-table.png",
        alt: "Wooden dining table with a natural timber finish",
        category: "dining",
    },
    {
        title: "Oak Writing Desk",
        price: 40,
        distance: "5km away",
        recent: "2h ago",
        image: "images/oak-writing-desk.png",
        alt: "Oak writing desk with a flat work surface and simple legs",
        category: "bedroom",
    },
    {
        title: "Round Dining Set",
        price: 85,
        distance: "6km away",
        recent: "5d ago",
        image: "images/round-dining-set.png",
        alt: "Round dining table with matching chairs",
        category: "dining",
    },
    {
        title: "Tiny Plant",
        price: 8,
        distance: "1km away",
        recent: "5m ago",
        image: "images/tiny-plant.png",
        alt: "Small potted plant with green leaves",
        category: "plants",
    },
    {
        title: "Natural Beech Chair",
        price: 35,
        distance: "5km away",
        recent: "4d ago",
        image: "images/natural-beech-chair.png",
        alt: "Natural beech wood chair with a simple modern frame",
        category: "dining",
    },
];

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.category = product.category;

    card.innerHTML = `
    <div class="product-card__image-wrapper">
      <img src="${product.image}" class="product-card__image" alt="${product.alt}">
      <div class="product-card__badge">${product.recent}</div>
    </div>

    <div class="product-card__info">
      <h3 class="product-card__title">${product.title}</h3>
      <h4 class="product-card__price">$${product.price}</h4>
      <p class="product-card__distance">${product.distance}</p>
    </div>
  `;

    return card;
}

function createListingSection(titleText, productList) {
    const section = document.createElement("section");
    section.className = "section";

    const title = document.createElement("h2");
    title.className = "section__title";
    title.textContent = titleText;

    const grid = document.createElement("div");
    grid.className = "product-grid";

    productList.forEach(function (product) {
        grid.appendChild(createProductCard(product));
    });

    section.appendChild(title);
    section.appendChild(grid);

    return section;
}

function setActiveButton(buttons, activeButton, activeClass) {
    buttons.forEach(function (button) {
        button.classList.remove(activeClass);
    });

    activeButton.classList.add(activeClass);
}

const navButtons = document.querySelectorAll(".nav__button");

navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        setActiveButton(navButtons, button, "nav__button--active");
    });
});

const categoryButtons = document.querySelectorAll(".category-nav__button");
const productCards = document.querySelectorAll(".product-card");

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        setActiveButton(
            categoryButtons,
            button,
            "category-nav__button--active",
        );

        const category = button.dataset.category;

        productCards.forEach(function (card) {
            if (category === "all" || card.dataset.category === category) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
    });
});

function initSearchBar() {
    const input = document.querySelector(".search-input");
    const placeholder = document.querySelector(".search-placeholder");

    const hideSettings = { y: -15, opacity: 0, duration: 0.2 };
    const showFromSettings = { y: 15, opacity: 0 };
    const showToSettings = { y: 0, opacity: 1, duration: 0.3 };

    input.addEventListener("focus", () => {
        if (input.value === "") {
            gsap.to(placeholder, {
                ...hideSettings,
                onComplete: () => {
                    placeholder.innerText = "What are you looking for?";
                    gsap.fromTo(placeholder, showFromSettings, showToSettings);
                },
            });
        }
    });

    input.addEventListener("input", () => {
        if (input.value.length > 0) {
            gsap.to(placeholder, { opacity: 0, duration: 0.1 });
        } else {
            gsap.to(placeholder, { opacity: 1, duration: 0.1 });
        }
    });

    input.addEventListener("blur", () => {
        if (input.value === "") {
            gsap.to(placeholder, {
                ...hideSettings,
                onComplete: () => {
                    placeholder.innerText = "Search";
                    gsap.fromTo(placeholder, showFromSettings, showToSettings);
                },
            });
        }
    });
}

function initNotificationBell() {
    const wrapper = document.querySelector(".bell-wrapper");
    const icon = document.querySelector(".bell-icon");

    const playBellAnimation = () => {
        gsap.set(icon, { transformOrigin: "top center" });
        gsap.to(icon, {
            rotation: 15,
            yoyo: true,
            repeat: 3,
            duration: 0.1,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(icon, { rotation: 0, duration: 0.1 });
            },
        });
    };

    wrapper.addEventListener("click", playBellAnimation);
    wrapper.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            playBellAnimation();
        }
    });
}

function renderApp() {
    const container = document.querySelector(".container");
    if (!container) return;

    initSearchBar();
    initNotificationBell();
}

renderApp();
