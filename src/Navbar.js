import React from 'react';

const NavBar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          src='https://cdn-icons-png.flaticon.com/512/4290/4290854.png'
          alt=''
          style={styles.cartIcon}
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 60,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '2px 8px',
    position: 'absolute',
    right: 0,
    top: -9,
  },
};

export default NavBar;