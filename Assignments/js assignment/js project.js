
// 1. getElementById()
let container = document.getElementById("productContainer");

let input = document.getElementById("productInput");

let total = document.getElementById("total");

let selected = document.getElementById("selected");

let navigation = document.getElementById("navigation");


// 2. getElementsByTagName()
let allProducts = container.getElementsByTagName("p");


// 3. querySelectorAll()
let products = document.querySelectorAll(".product");


// Function to update total products
function updateTotal() {

    // 4. innerHTML
    total.innerHTML = "Total Products: " + container.children.length;

}


// Function to update product events
function productEvents(product) {

    // 5. Click event
    product.addEventListener("click", function() {

        // Remove previous selection
        let items = container.querySelectorAll(".product");

        items.forEach(function(item) {
            item.classList.remove("selected");
        });

        product.classList.add("selected");

        // 6. textContent
        selected.textContent = product.textContent;

        // 7. innerText
        navigation.innerText = "Selected: " + product.innerText;

        // 8. previousElementSibling
        let previous = product.previousElementSibling;

        // 9. nextElementSibling
        let next = product.nextElementSibling;

        console.log("Previous Product:", previous?.innerText || "None");
        console.log("Next Product:", next?.innerText || "None");

        // 10. parentElement
        console.log("Parent:", product.parentElement);

    });


    // 11. Double click event - Delete
    product.addEventListener("dblclick", function() {

        product.remove();

        updateTotal();

        selected.textContent = "Product deleted";

    });


    // 12. Mouseover event
    product.addEventListener("mouseover", function() {

        product.style.color = "red";

    });


    // 13. Mouseout event
    product.addEventListener("mouseout", function() {

        product.style.color = "black";

    });

}


// Add events to existing products
function loadProducts() {

    let items = container.querySelectorAll(".product");

    items.forEach(function(product) {
        productEvents(product);
    });

    updateTotal();

}

loadProducts();


// 14. createElement()
function createProduct() {

    let name = input.value.trim();

    if (name === "") {
        alert("Please enter product name");
        return;
    }

    let newProduct = document.createElement("p");

    newProduct.className = "product";

    newProduct.textContent = name;

    productEvents(newProduct);

    // 15. append()
    container.append(newProduct);

    updateTotal();

    input.value = "";

}


// Add Product Button
document.getElementById("addBtn").addEventListener("click", function() {

    createProduct();

});


// 16. prepend()
document.getElementById("startBtn").addEventListener("click", function() {

    let name = input.value.trim();

    if (name === "") {
        alert("Enter product name");
        return;
    }

    let newProduct = document.createElement("p");

    newProduct.className = "product";

    newProduct.textContent = name;

    productEvents(newProduct);

    // Add at beginning
    container.prepend(newProduct);

    updateTotal();

    input.value = "";

});


// 17. appendChild()
function addUsingAppendChild() {

    let newProduct = document.createElement("p");

    newProduct.className = "product";

    newProduct.textContent = "Smart Watch";

    productEvents(newProduct);

    container.appendChild(newProduct);

    updateTotal();

}


// firstElementChild
console.log("First Product:", container.firstElementChild.innerText);


// lastElementChild
console.log("Last Product:", container.lastElementChild.innerText);


// children[0] and other indexes
console.log("First Product:", container.children[0].innerText);

console.log("Second Product:", container.children[1].innerText);


// getElementsByTagName()
console.log("All Products:", allProducts);


// querySelectorAll()
console.log("Product Items:", products);


// Test appendChild()
addUsingAppendChild();
