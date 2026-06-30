const services = [

    { category: 'Men', item: 'Shirt', price: '₹100' },
    { category: 'Men', item: 'Pant', price: '₹100' },
    { category: 'Men', item: 'Blazer', price: '₹200' },
    { category: 'Men', item: '3pc Suit', price: '₹350' },
    { category: 'Men', item: '2pc Suit', price: '₹300' },
    { category: 'Men', item: '3pc Serwani', price: '₹550' },
    { category: 'Men', item: '2pc Serwani', price: '400' },
    { category: 'Men', item: 'Serwani', price: '₹300' },
    { category: 'Men', item: 'kurta', price: '₹120' },
    { category: 'Men', item: '2pc kurta paijama', price: '₹200' },
    { category: 'Men', item: '3pc Serwani', price: '₹550' },
    { category: 'Men', item: 'T-shirt', price: '₹100' },
    { category: 'Men', item: 'vest coat', price: '₹200' },
    { category: 'Men', item: 'cap', price: '₹100' },
    { category: 'Men', item: 'shoes', price: '₹250' },


    { category: 'Women', item: 'Saree', price: '₹200' },
    { category: 'Women', item: 'Blouse', price: '₹100' },
    { category: 'Women', item: '3pc suit', price: '₹250' },
    { category: 'Women', item: '2pc suit', price: '₹200' },

    { category: 'Women', item: 'Top', price: '₹125' },
    { category: 'Women', item: 'Dress', price: '₹200' },
    { category: 'Women', item: '2pc Dress', price: '₹300' },
    { category: 'Women', item: '3pc Dress', price: '₹350' },

    { category: 'Women', item: '3pc Lehenga', price: '₹550' },
    { category: 'Women', item: '2pc Lehenga', price: '₹450' },
    { category: 'Women', item: 'Lehenga', price: '₹300' },
    { category: 'Women', item: 'Kurti', price: '₹120' },
    { category: 'Women', item: '3pc Gown', price: '₹350' },
    { category: 'Women', item: 'shoes', price: '₹250' },
    { category: 'Women', item: 'slipper', price: '₹100' },

    { category: 'Household', item: 'Blanket Single', price: '₹250' },
    { category: 'Household', item: 'Blanket Double', price: '₹350' },
    { category: 'Household', item: 'Quilt Single', price: '₹250' },
    { category: 'Household', item: 'Quilt Double', price: '₹350' },
    { category: 'Household', item: 'Ac Quilt Single', price: '₹250' },
    { category: 'Household', item: 'Ac Quilt Double', price: '₹350' },

    { category: 'Household', item: 'Curtain', price: '₹200' },
    { category: 'Household', item: 'Curtain per panel with astar', price: '₹250' },
    { category: 'Household', item: 'Curtain per panel without astar', price: '₹200' },
    { category: 'Household', item: 'Bedsheet single', price: '₹100' },
    { category: 'Household', item: 'Bedsheet double', price: '₹150' },
    { category: 'Household', item: 'carpet per sqt', price: '₹30' },


    { category: 'Laundry', item: 'Premium Laundry', price: '₹150 - Per Kg' },
    { category: 'Laundry', item: 'Wash & Iron', price: '₹90 - Per Kg' },
    { category: 'Laundry', item: 'Wash & Fold', price: '₹70 - Per Kg' },







];

let currentCategory = 'All';

let currentPage = 1;
const cardsPerPage = 9;

function renderServices() {

    const search = document
        .getElementById('search')
        .value.toLowerCase();

    const grid = document
        .getElementById('rateGrid');

    grid.innerHTML = '';

    const filtered = services.filter(service => {

        const categoryMatch =
            currentCategory === 'All' ||
            service.category === currentCategory;

        const searchMatch =
            service.item.toLowerCase()
                .includes(search);

        return categoryMatch && searchMatch;

    });

    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    const paginatedServices = filtered.slice(start, end);

    paginatedServices.forEach(service => {

        grid.innerHTML += `
<div class="card">
<h3>${service.item}</h3>
<p>${service.category}</p>
<div class="price">${service.price}</div>
</div>
`;

    });

    const totalPages = Math.ceil(filtered.length / cardsPerPage);

    const pageNum = document.getElementById("pageNum");

    if (pageNum) {
        pageNum.innerText = `Page ${currentPage} of ${totalPages || 1}`;
    }
}

function filterCategory(category, btn) {

    currentCategory = category;
    currentPage = 1;

    document.querySelectorAll('.tab-btn')
        .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    renderServices();

}

document.getElementById('search')
    .addEventListener('keyup', () => {

        currentPage = 1;
        renderServices();

    });

function orderNow() {

    window.open(
        'https://wa.me/918210244036?text=Hello%20Power%20Dry%20Clean,%20I%20want%20to%20place%20an%20order.',
        '_blank'
    );

}

document.getElementById("nextBtn")
    .addEventListener("click", () => {

        const search = document
            .getElementById('search')
            .value.toLowerCase();

        const filtered = services.filter(service => {

            const categoryMatch =
                currentCategory === 'All' ||
                service.category === currentCategory;

            const searchMatch =
                service.item.toLowerCase()
                    .includes(search);

            return categoryMatch && searchMatch;

        });

        const totalPages =
            Math.ceil(filtered.length / cardsPerPage);

        if (currentPage < totalPages) {

            currentPage++;
            renderServices();

        }

    });

document.getElementById("prevBtn")
    .addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;
            renderServices();

        }

    });

renderServices();

const text = "Free Pickup & Drop Service Available 24/7";

let i = 0;
let isDeleting = false;

function typeEffect() {

    const element = document.getElementById("typing-text");

    if (!isDeleting) {

        element.textContent = text.substring(0, i + 1);
        i++;

        if (i === text.length) {

            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        element.textContent = text.substring(0, i - 1);
        i--;

        if (i === 0) {

            isDeleting = false;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();

// for button scrool go to top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});