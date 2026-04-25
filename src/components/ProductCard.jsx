import React from 'react';

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div className={product.inStock ? '' : 'outOfStockClass'}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;