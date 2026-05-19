// HTML handles product rendering now
// Keeping products array and functions for future dynamic sections

const products = [
    {
        title: "Little Oak",
        price: 40,
        distance: "2.8km away",
        recent: "2h ago",
        image: "images/little-oak.png",
        alt: "Small wooden oak side table",
    },
    {
        title: "ZZ Plant",
        price: 5,
        distance: "1.2km away",
        recent: "1h ago",
        image: "images/zz-plant.png",
        alt: "ZZ plant in a pot with glossy green leaves",
    },
    {
        title: "Coastline Sofa",
        price: 70,
        distance: "2km away",
        recent: "3d ago",
        image: "images/coastline-sofa.png",
        alt: "Light-colored modern sofa with coastal-style design",
    },
    {
        title: "Timber Table",
        price: 35,
        distance: "5km away",
        recent: "4d ago",
        image: "images/timber-table.png",
        alt: "Wooden dining table with a natural timber finish",
    },
    {
        title: "Oak Writing Desk",
        price: 40,
        distance: "5km away",
        recent: "2h ago",
        image: "images/oak-writing-desk.png",
        alt: "Oak writing desk with a flat work surface and simple legs",
    },
    {
        title: "Round Dining Set",
        price: 85,
        distance: "6km away",
        recent: "5d ago",
        image: "images/round-dining-set.png",
        alt: "Round dining table with matching chairs",
    },
    {
        title: "Tiny Plant",
        price: 8,
        distance: "1km away",
        recent: "5m ago",
        image: "images/tiny-plant.png",
        alt: "Small potted plant with green leaves",
    },
    {
        title: "Natural Beech Chair",
        price: 35,
        distance: "5km away",
        recent: "4d ago",
        image: "images/natural-beech-chair.png",
        alt: "Natural beech wood chair with a simple modern frame",
    },
];

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

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

    productList.forEach((product) => {
        grid.appendChild(createProductCard(product));
    });

    section.appendChild(title);
    section.appendChild(grid);

    return section;
}