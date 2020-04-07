import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import axios from "axios";
import { CartContext } from "../context/Cart";
import Loading from "../Loading";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      products: [],
    };
  }
  componentDidMount() {
    this.isComponentMouted = true;
    axios
      .get("https://uh48h.sse.codesandbox.io/products")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .then((result) => {
        this.setState({
          loading: true,
          products: result.products,
        });
      })
      .catch((error) => <div>{error}</div>);
  }
  componentWillUnmount() {
    this.isComponentMouted = false;
  }

  // componentDidMount() {
  //   axios.get("https://uh48h.sse.codesandbox.io/products").then(
  //     (result) => {
  //       this.setState({
  //         loading: true,
  //         products: result.products,
  //       });
  //     },
  //     (err) => {
  //       this.setState({
  //         loading: true,
  //         err,
  //       });
  //     }
  //   );
  // }
  // hiển thị sản phẩm
  render() {
    const { products } = this.state;

    return (
      <Container>
        <Row>
          {products.map((product) => (
            <Col sm="4" key={products.id}>
              <Card>
                <CardImg top width="100%" src={product.imageUrl} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.description}</CardSubtitle>
                </CardBody>
                {/* Khi click add to card thì thêm sản phẩm vào giỏ hàng */}
                <Col sm="6">
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>
                        Add to cart{" "}
                      </Button>
                    )}
                  </CartContext.Consumer>
                  <Button
                    onClick={() => {
                      // console.log(product);
                      // var index = this.findIndex(x => x.id === product.id);
                      // console.log(index);

                      var id = products.indexOf(product);
                      console.log(id);
                      if (id < 0) return;
                      products.splice(id, 1);
                      // this.setState({
                      //   products: this.state.products,
                      // });
                    }}
                  >
                    delete
                  </Button>
                </Col>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
