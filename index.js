//Getting all products from the API
const getBooksData = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    const booksData = await response.json();
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};
