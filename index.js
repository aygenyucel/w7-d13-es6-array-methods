window.onload = () => {
  displayBooks();
};

//Function for getting all products from the API
const getBooksData = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );

    const { booksData: books } = await response.json();
    console.log("booksData:", books);
    return books;
  } catch (error) {
    console.log(error);
  }
};

//Displaying all books
const displayBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((resp) => {
      return resp.json();
    })
    .then((books) => {
      console.log(books);
      const bookRowElement = document.querySelector(".book-row");

      books.forEach((book) => {
        const bookCardElement = document.createElement("div");
        bookCardElement.classList = "col-6 col-sm-4 col-md-3";
        bookCardElement.innerHTML = `
                                                <div class="card my-3 ">
                                                    <img
                                                    class="card-img-top"
                                                    src=${book.img}
                                                    alt="Card image cap"
                                                    />
                                                    <div class="card-body">
                                                    <h5 class="card-title book-title text-center">Card title</h5>
                                                    <div class="card-text d-flex flex-column text-center my-3">
                                                        <div class="book-id"><small>${book.asin}</small></div>
                                                        <div class="book-category">${book.category}</div>
            
                                                        <div class="book-price"><span>$</span>${book.price}</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <button href="#" class="btn btn-primary add-to-cart-btn" id= "${book.asin}"
                                                        onclick= "addToCart()">Add to cart</button
                                                        >
                                                        <button href="#" class="btn btn-primary skip-btn">Skip</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            `;
        bookRowElement.appendChild(bookCardElement);
      });
    });
};

const addToCart = function () {
  //get book's ID
  let bookId = event.target.id; //book.asin
  console.log(`selected book id: ${bookId}`);

  //change the button style
  const addToCartButton = document.getElementById(`${bookId}`);
  addToCartButton.innerHTML = "Added to cart!";
  addToCartButton.style.backgroundColor = "red";

  //fetch all data and filter the book id
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((resp) => {
      return resp.json();
    })
    .then((books) => {
      let selectedBook = books.filter((book) => book.asin == bookId);
      console.log("selectedBook:", selectedBook);
      console.log("xx", selectedBook[0].img);

      const newCartElement = document.createElement("div");
      const cartRow = document.querySelector(".cart-row");
      newCartElement.classList = "col-6 col-sm-4 col-md-3";
      newCartElement.innerHTML = `
                                    <div class="card my-3 ">
                                        <img
                                        class="card-img-top"
                                        src=${selectedBook[0].img}
                                        alt="Card image cap"
                                        />
                                        <div class="card-body">
                                        <h5 class="card-title book-title text-center">Card title</h5>
                                        <div class="card-text d-flex flex-column text-center my-3">
                                            <div class="book-id"><small>${selectedBook[0].asin}</small></div>
                                            <div class="book-category">${selectedBook[0].category}</div>

                                            <div class="book-price"><span>$</span>${selectedBook[0].price}</div>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <button href="#" class="btn btn-primary add-to-cart-btn" id= "${selectedBook[0].asin}"
                                            onclick= "addToCart()">Add to cart</button
                                            >
                                            <button href="#" class="btn btn-primary skip-btn">Skip</button>
                                        </div>
                                        </div>
                                    </div>
                                `;

      cartRow.appendChild(newCartElement);
    });
};
