const menu = [
    {
        id: 1,
        title: "clicker",
        category: "js",
        img: "img/example.png",
        desc: "From the Bootstrap documentation: Set an element to display: block and center via margin . Available as a mixin and class. The img-responsive class adds a display:block instruction to the image tag, which stops text-align:center ( text-center class) from working.",
    },
    {
        id: 2,
        title: "no click",
        category: "html",
        img: "img/example.png",
        desc: "From the Bootstrap documentation: Set an element to display: block and center via margin . Available as a mixin and class. The img-responsive class adds a display:block instruction to the image tag, which stops text-align:center ( text-center class) from working.",
    },
    {
        id: 3,
        title: "click?",
        category: "css",
        img: "img/example.png",
        desc: "From the Bootstrap documentation: Set an element to display: block and center via margin . Available as a mixin and class. The img-responsive class adds a display:block instruction to the image tag, which stops text-align:center ( text-center class) from working.",
    }
];

// get parent element
const mainMenu = document.querySelector(".main-menu");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    // console.log("item");
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);
        return `<div class="col-6">
            <div class="card">
                <img class="card-img-top" src=${item.img} alt=${item.title}></img>
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <p class="card-text">${item.desc}</p>
                    <button class="card-subtitle">${item.category}</button>
                </div>
            </div>
        </div>`
    });

    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    mainMenu.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}