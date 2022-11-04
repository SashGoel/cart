import React from 'react';
import './App.css';

import Cart from './Cart';
import NavBar from './Navbar';

//firebase

// import 'firebase/firestore';
// import * as firebase from 'firebase';
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
} from 'firebase/firestore';
import { db } from './index';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }
  handleOnIncreaseQty = async (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);
    const docRef = doc(collection(db, 'products'), products[index].id);
    await updateDoc(docRef, {
      qty: products[index].qty + 1,
    });
  };
  handleOnDecreaseQty = async (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty !== 0) {
      const docRef = doc(collection(db, 'products'), products[index].id);
      await updateDoc(docRef, {
        qty: products[index].qty - 1,
      });
    }
  };
  handleOnDeleteProduct = (productToDelete) => {
    const docRef = doc(collection(db, 'products'), productToDelete.id);
    deleteDoc(docRef)
      .then(() => {
        console.log('product deleted');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getCartCount = () => {
    const { products } = this.state;
    return products.length;
  };
  getTotalPrice = () => {
    const { products } = this.state;
    let amount = 0;
    products.map((product) => {
      amount += product.qty * product.price;
      return amount;
    });
    return amount;
  };
  async componentDidMount() {
    // const unsub = await onSnapshot(
    //   collection(db, 'products'),
    //   (querySnapshot) => {
    //     const getProducts = [];
    //     querySnapshot.forEach((doc) => {
    //       const product = doc.data();
    //       product.id = doc.id;
    //       getProducts.push(product);
    //     });
    //     this.setState({ products: getProducts, loading: false });
    //   }
    // );
    const q = query(
      collection(db, 'products'),
      where('price', '>', 0),
      orderBy('price')
    );
    const unsub = await onSnapshot(q, (querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        getProducts.push(product);
      });
      this.setState({ products: getProducts, loading: false });
    });
  }
  addProduct = async () => {
    await setDoc(doc(collection(db, 'products')), {
      title: 'Laptop',
      price: 85000,
      qty: 1,
      img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className='App'>
        <NavBar count={this.getCartCount()} />
        {/* add product just for testing  */}
        <button onClick={this.addProduct}>Add Product</button>
        <Cart
          products={products}
          onIncreaseQty={this.handleOnIncreaseQty}
          onDecreaseQty={this.handleOnDecreaseQty}
          OnDeleteProduct={this.handleOnDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        {!loading && <div>Total Price: {this.getTotalPrice()}</div>}
      </div>
    );
  }
}

export default App;