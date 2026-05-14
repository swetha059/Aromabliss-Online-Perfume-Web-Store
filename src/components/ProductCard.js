import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart, addToWishlist }) {

  return (

    <div className='card'>

      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

      <button onClick={() => addToWishlist(product)}>
        Wishlist
      </button>

    </div>

  );
}

export default ProductCard;