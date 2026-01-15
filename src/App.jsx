import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  const [filter, setFilter] = useState('all');

  const getFilteredProducts = () => {
    switch (filter) {
      case 'inStock':
        return products.filter((product) => product.inStock);
      case 'outOfStock':
        return products.filter((product) => !product.inStock);
      default:
        return products;
    }
  };

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')} style={{ marginRight: '10px' }}>
          All Products
        </button>
        <button onClick={() => setFilter('inStock')} style={{ marginRight: '10px' }}>
          In Stock
        </button>
        <button onClick={() => setFilter('outOfStock')}>
          Out of Stock
        </button>
      </div>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;

