import React from 'react';

const CartItem = (props) => {
  const { title, price, qty, img } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, OnDeleteProduct } = props;
  return (
    <div className='cart-item'>
      <div className='left-block'>
        <img src={img} style={styles.image} alt='' />
      </div>
      <div className='right-block'>
        <div>{title}</div>
        <div>Rs: {price}</div>
        <div>qty: {qty}</div>
        <div className='cart-item-actions'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1828/1828926.png'
            className='action-icons'
            alt='increase'
            onClick={() => onIncreaseQty(product)}
          />
          <img
            src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png'
            className='action-icons'
            alt='decrease'
            onClick={() => onDecreaseQty(product)}
          />
          <img
            src='https://cdn-icons-png.flaticon.com/512/1828/1828843.png'
            className='action-icons'
            alt='delete'
            onClick={() => OnDeleteProduct(product)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'fill',
  },
};

export default CartItem;