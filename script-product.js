// Product list + filtering + add to cart

const products = [
  { id: 1, name: "Whey Protein", category: "supplement", price: 2199.99, image: "https://images-static.nykaa.com/media/catalog/product/c/7/c7fba408939111427128_1.jpg" },
  { id: 2, name: "Creatine Powder", category: "supplement", price: 1499.99, image: "https://www.nutrishop.in/wp-content/uploads/2024/12/wellcore-micronised-creatine-monohydrate45.webp" },
  { id: 3, name: "Resistance Bands", category: "equipment", price: 1199.99, image: "https://media.istockphoto.com/id/1456961072/photo/image-showing-elastic-bands-for-stretching-exercises-of-the-wrist-and-forearm-muscles-on-a.jpg?s=612x612&w=0&k=20&c=6SiyuofUkFrFhJGEb2YzfFUwu-ZvONSg1swCTWrqWtI=" },
  { id: 4, name: "Running Shoes", category: "apparel", price: 3699.99, image: "https://c8.alamy.com/comp/TWGTHD/black-sports-running-shoes-with-white-sole-isolated-on-white-background-concept-of-fitness-and-healthy-lifestyle-TWGTHD.jpg" },
  { id: 5, name: "Gym T-Shirt", category: "apparel", price: 999.99, image: "https://m.media-amazon.com/images/I/51gLonI8VsL._AC_UY1100_.jpg" },
  { id: 6, name: "Dumbbells Set", category: "equipment", price: 2899.99, image: "https://m.media-amazon.com/images/I/61MwNosjgaL.jpg" },
  { id: 7, name: "BCAA Supplement", category: "supplement", price: 1799.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOcZWdJ2N48lzu1rMxsjwSAx4sgVtRMt16w&s" },
  { id: 8, name: "Yoga Mat", category: "equipment", price: 1399.99, image: "https://www.shutterstock.com/image-illustration/blank-yoga-mat-branding-3d-260nw-2370886201.jpg" }
];

const productList = document.getElementById("product-list");
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");

function renderProducts() {
  const checkedCategories = Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  productList.innerHTML = "";
  const filteredProducts = products.filter(p => checkedCategories.includes(p.category));

  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  // Save cart in localStorage so it can persist between pages
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Added ${product.name} to cart!`);
}

filterCheckboxes.forEach(cb => cb.addEventListener("change", renderProducts));

// Initial render
renderProducts();
