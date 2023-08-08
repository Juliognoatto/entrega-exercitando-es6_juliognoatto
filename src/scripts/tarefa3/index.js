// filtrar por categoria
const findBooksByCategory = (bookList, category) => {
  const filteredBooks = bookList.filter(book => 
    book.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  );

  return filteredBooks;
};

const romanceBooks = findBooksByCategory(bookStoreBooks, 'Romance');
console.log(romanceBooks);

// buscar pelo ID
const findBookById = (bookList, bookId) => bookList.find(book => book.id === bookId);

const bookIdToFind = 3;
const foundBook = findBookById(bookStoreBooks, bookIdToFind);

if (foundBook) {
  console.log('Livro encontrado:', foundBook);
} else {
  console.log('Livro não encontrado.');
}

// realizar a venda do livro, considerando seu id e o tipo de usuário 

const sellBook = (bookList, bookId, userType = 'normal') => {
  const book = bookList.find(book => book.id === bookId);

  if (!book || book.quantity <= 0) {
    return 'Livro indisponível para compra.';
  }

  const discountPercentage = userTypeDiscount[userType] || 0;
  const discountedPrice = book.price * (1 - discountPercentage);
  const finalPrice = Math.round(discountedPrice * 100) / 100;

  book.quantity--;

  return `Livro ${book.title} vendido com sucesso por R$ ${finalPrice} (${(discountPercentage * 100).toFixed(2)}% de desconto).`;
};

const bookIdToSell = 2;
const userType = 'silver';
const sellResult = sellBook(bookStoreBooks, bookIdToSell, userType);
console.log(sellResult);
console.log(bookStoreBooks); // Verifica a quantidade de livros após a venda


// calcula a média de avaliações

const calculateAverageRating = (bookList, bookId) => {
  const book = bookList.find(book => book.id === bookId);

  if (!book) {
    return 'Livro não encontrado.';
  }

  if (!book.ratings || book.ratings.length === 0) {
    return `O livro ${book.title} não possui nenhuma avaliação.`;
  }

  const sumRatings = book.ratings.reduce((sum, rating) => sum + rating, 0);
  const averageRating = sumRatings / book.ratings.length;
  const roundedAverage = Math.round(averageRating * 100) / 100;

  return `O livro ${book.title} possui uma média de avaliação igual a ${roundedAverage}.`;
};

const bookIdToCalculate = 2;
const averageRatingResult = calculateAverageRating(bookStoreBooks, bookIdToCalculate);
console.log(averageRatingResult);
