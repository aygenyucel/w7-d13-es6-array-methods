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
        console.log(book);

        const bookCardElement = document.createElement("div");
        bookCardElement.classList = "col-6 col-sm-4 col-md-3";
        bookCardElement.innerHTML = `
                                                <div class="card my-3">
                                                    <img
                                                    class="card-img-top"
                                                    src=${book.img}
                                                    alt="Card image cap"
                                                    />
                                                    <div class="card-body">
                                                    <h5 class="card-title book-title text-center">Card title</h5>
                                                    <div class="card-text d-flex flex-column text-center my-3">
                                                        <div class="book-id"><small>${book.id}</small></div>
                                                        <div class="book-category">${book.category}</div>
            
                                                        <div class="book-price"><span>$</span>${book.price}</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <a href="#" class="btn btn-primary add-to-cart-btn"
                                                        >Add to cart</a
                                                        >
                                                        <a href="#" class="btn btn-primary skip-btn">Skip</a>
                                                    </div>
                                                    </div>
                                                </div>
                                            `;
        bookRowElement.appendChild(bookCardElement);
      });
    });
};

// const displayBooks = function () {
//   const books = getBooksData();
//   bookRowElement = document.querySelector(".book-row");

//   books.forEach((book) => {
//     console.log("fdgfdhdfzh");
//     bookCardElement =
//       document.createElement(`<div class="col-6 col-sm-4 col-md-3">
//                                     <div class="card">
//                                         <img
//                                         class="card-img-top"
//                                         src="${book.title}"
//                                         alt="Card image cap"
//                                         />
//                                         <div class="card-body">
//                                         <h5 class="card-title book-title text-center">Card title</h5>
//                                         <div class="card-text d-flex flex-column text-center my-3">
//                                             <div class="book-category">scifi</div>

//                                             <div class="book-price"><span>$</span>5.92</div>
//                                         </div>
//                                         <div class="d-flex justify-content-between">
//                                             <a href="#" class="btn btn-primary add-to-cart-btn"
//                                             >Add to cart</a
//                                             >
//                                             <a href="#" class="btn btn-primary skip-btn">Skip</a>
//                                         </div>
//                                         </div>
//                                     </div>
//                                     </div>`);
//   });
// };
