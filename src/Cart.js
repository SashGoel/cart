import React from 'react';

import CartItem from './CartItem';

const Cart = (props) => {
  const { products } = props;
  return (
    <div className='cart'>
      {products.map((product) => (
        <CartItem
          product={product}
          key={product.id}
          onIncreaseQty={props.onIncreaseQty}
          onDecreaseQty={props.onDecreaseQty}
          OnDeleteProduct={props.OnDeleteProduct}
        />
      ))}
    </div>
  );
};

export default Cart;