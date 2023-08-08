// const productsList = require('./src/scripts/tarefa1/database.js');

const calculateTotalCost = (customerName, products, discount = 0) => {
  const totalWithoutDiscount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const discountAmount = (discount / 100) * totalWithoutDiscount;
  const totalWithDiscount = totalWithoutDiscount - discountAmount;

  const formattedTotal = totalWithDiscount.toFixed(2);
  const formattedDiscount = discount > 0 ? ` (com desconto de ${discount}%)` : '';

  return `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotal}${formattedDiscount}.`;
};

// Exemplos de uso:
console.log(calculateTotalCost("Joao", productsList));
console.log(calculateTotalCost("Maria", productsList, 15));
