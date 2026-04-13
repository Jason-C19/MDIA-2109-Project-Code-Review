const products = [
    {
        title: "Little Oak",
        price: 40,
        distance: "2.8km away",
        recent: "2h ago",
        image: "images/little-oak.png",
    },
    {
        title: "ZZ Plant",
        price: 5,
        distance: "1.2km away",
        recent: "1h ago",
        image: "images/zz-plant.png",
    },
    {
        title: "Coastline Sofa",
        price: 70,
        distance: "2km away",
        recent: "3d ago",
        image: "images/coastline-sofa.png",
    },
    {
        title: "Timber Table",
        price: 35,
        distance: "5km away",
        recent: "4d ago",
        image: "images/timber-table.png",
    },
    {
        title: "Oak Writing Desk",
        price: 40,
        distance: "5km away",
        recent: "2h ago",
        image: "images/oak-writing-desk.png",
    },
    {
        title: "Round Dining Set",
        price: 85,
        distance: "6km away",
        recent: "5d ago",
        image: "images/round-dining-set.png",
    },
    {
        title: "Tiny Plant",
        price: 8,
        distance: "1km away",
        recent: "5m ago",
        image: "images/tiny-plant.png",
    },
    {
        title: "Natural Beech Chair",
        price: 35,
        distance: "5km away",
        recent: "4d ago",
        image: "images/natural-beech-chair.png",
    },
];

function createProductCard(product) {
    const card = document.createElement("div");

    card.innerHTML = `
        <div class="product-card__image-wrapper">
            <img src="${product.image}" class="product-card__image" alt="${product.title}">
        </div>
    `;

    return card;
}

function createListingSection(productList) {
    const section = document.createElement("section");

    const grid = document.createElement("div");
    grid.className = "product-grid";

    productList.forEach((product) => {
        grid.appendChild(createProductCard(product));
    });

    section.appendChild(grid);

    return section;
}


const container = document.querySelector(".container");
container.appendChild(createListingSection(products));
