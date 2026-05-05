// A simple unit test testing pure logic (e.g., sorting products)
function sortProductsByPrice(products, order = 'asc') {
  return [...products].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
}

describe('Unit Test: sortProductsByPrice', () => {
  it('should sort products by price in ascending order', () => {
    const products = [{ price: 50 }, { price: 10 }, { price: 30 }];
    const sorted = sortProductsByPrice(products, 'asc');
    expect(sorted).toEqual([{ price: 10 }, { price: 30 }, { price: 50 }]);
  });

  it('should sort products by price in descending order', () => {
    const products = [{ price: 50 }, { price: 10 }, { price: 30 }];
    const sorted = sortProductsByPrice(products, 'desc');
    expect(sorted).toEqual([{ price: 50 }, { price: 30 }, { price: 10 }]);
  });
});
