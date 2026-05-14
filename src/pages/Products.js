import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

function Products({ addToCart, addToWishlist }) {

  const [search, setSearch] = useState('');

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className='products-page'>

      <h1>Our Perfumes</h1>

      <input
        type='text'
        placeholder='Search perfumes...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-box'
      />

      <div className='products-grid'>

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}

      </div>

    </div>

  );
}

export default Products;