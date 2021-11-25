function setCartProductsNum() {
  cartProductsNum.textContent = `Numero prodotti: ${cartList.length}`;
}

function createProduct(parent, imgUrl, productTitle, textPrice, idProduct) {
  const product = document.createElement("div");
  product.className = "product";
  product.setAttribute("id", idProduct);

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);

  const modal = document.querySelector(".modal")

  product.addEventListener("click", (e) => {
    cartList.push(
      productsList.find(
        (product) => parseInt(e.currentTarget.id) === product.id
      )
    );
    setCartProductsNum();

    modal.style.display =  "flex"

    setTimeout(() => {
      modal.style.display =  "none"
    }, 2000)


    // alert(`Prodotto aggiunto al carrello, numero prodotti: ${cartList.length}`);
    // Nel caso in cui volessimo aggiungere una interazione col LocalStorage
    localStorage.setItem("totCartitems", cartList.length);
  });
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}



function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price);
  });
}

// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  productsList = data;

  // Nella eventualità di aggiungere una quantità per prodotto
  // productsList = data.map((product) => {
  //   product.quantity = 0;
  //   return product;
  // });

  return renderProducts(data);
};

let productsList = [];
const wrapperProducts = document.querySelector(".wrapper__products");

getProductsList();


// Cambio immagine ogni 3 secondi

const imgs = [
  'https://images.unsplash.com/photo-1618842738491-7235639dfac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  'https://dr.savee-cdn.com/things/6/1/76ad6afe82f0d0ad49bb7d.jpg',
  'https://images.unsplash.com/photo-1594262254144-8a0e068f4215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
  'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
];

const change = document.querySelector('.overlay'); 

let imagesIndex = 0;

let changeImg = setInterval( () => {

  change.style.backgroundImage = `url(${imgs[imagesIndex]})`;

  imagesIndex < imgs.length - 1 ? imagesIndex++ : imagesIndex = 0;

}, 3000)


// Parte inerente alla logica del carrello
let cartList = [];

let localStorageTot = localStorage.getItem("totCartitems");
const cartBtn = document.querySelector(".cartBtn");
const cartProductsNum = document.querySelector(".cartProductsNum");
const clearCartBtn = document.querySelector(".clearCart");

// Flusso generale

cartProductsNum.textContent = `Numero prodotti: ${localStorageTot || 0}`;
getProductsList();


clearCartBtn.addEventListener("click", () => {
  cartList.length = 0;
  setCartProductsNum();
});


// Sezione recensioni

// ----------- METODO FUNZIONE RENDER DINAMICA

// const reviews = [
//   {
//     id: 1,
//     review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, erat sed euismod ultrices, enim neque rutrum enim, nec condimentum.",
//     name: "Maggggherita Grasso",
//   },
//   {
//     id: 2,
//     review: "Quisque id ligula venenatis, pulvinar urna non, efficitur odio. Sed eu hendrerit libero. In id sollicitudin lacus. Quisque leo nunc.",
//     name: "Zuliae Notaro",
//   },
//   {
//     id: 3,
//     review: "Aliquam vel eleifend nulla. Maecenas ultrices, velit at sollicitudin dictum, quam ligula pulvinar metus, non congue nunc tellus non nunc.",
//     name: "Reburtu Tirrito",
//   },
// ];

// const wrapperReview = document.querySelector(".wrapper_reviews")

// function createReview (parent, textReview, textNames) {
//   const review = document.createElement("div");
//   review.className = "review";

//   createText(review, textReview, textNames);
//   parent.appendChild(review);
// }


// function createTextReview (parent, textReview, textNames) {
//   const textRev = document.createElement("p");
//   textRev.textContent = textReview;
  
//   const textName = document.createElement("p");
//   textName.textContent = textNames;

//   parent.append(textRev, textName)
// };

// function renderReviews(listReview) {
//   listReview.map((reviews) => {
//     createReview(wrapperReview, reviews.review, reviews.name)
//   });
// }

// renderReviews(reviews);


// ----------- METODO INNERTEXT

const reviews = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum, erat sed euismod ultrices, enim neque rutrum enim, nec condimentum.",
  "Aliquam vel eleifend nulla. Maecenas ultrices, velit at sollicitudin dictum, quam ligula pulvinar metus, non congue nunc tellus non nunc.",
  "Quisque id ligula venenatis, pulvinar urna non, efficitur odio. Sed eu hendrerit libero. In id sollicitudin lacus. Quisque leo nunc.",
];

const reviewElement = document.querySelector('#par-rev')

let revIndex = 0;

let changeReview = setInterval( () => {

  reviewElement.innerText = `${reviews[revIndex]}`;

  revIndex < reviews.length - 1 ? revIndex++ : revIndex = 0;

}, 3000)







