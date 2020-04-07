import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: [],
      detailItem: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.deleteProductCart = this.deleteProductCart.bind(this);
  }

  addToCart(product) {
    // console.log(product);
    // this.state.cartItem.push(product);

    this.setState({
      cartItem: this.state.cartItem.concat(product),
      //ghép các phần tử đc thêm vào cartItem
    });
    // console.log(this.state.cartItem);
  }
  deleteProductCart(product) {
    var id = product.id;
    // console.log(this.state.cartItem);
    // this.setState({
    //   cartItem: this.state.cartItem.splice(id, 1)
    // });
  }
  render() {
    return (
      <CartContext.Provider
        value={{
          cartItem: this.state.cartItem,
          addToCart: this.addToCart,
          deleteProductCart: this.deleteProductCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
