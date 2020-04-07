import React, { Component } from "react";
import { CartContext } from "../../context/Cart";
import {
  Container,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Col,
  CardImg,
} from "reactstrap";

class Select extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>My cart</h1>
          <Row>
            <CartContext.Consumer>
              {({ cartItem }) => {
                console.log(cartItem);

                return cartItem.map((product) => (
                  <Col sm="4" key={product.id}>
                    <Card>
                      <CardImg top width="100%" src={product.imageUrl} />
                      <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>{product.description}</CardText>
                        {({ addToCart }) => (
                          <Button onClick={() => addToCart(product)}>
                            Add to cart{" "}
                          </Button>
                        )}
                      </CardBody>
                    </Card>
                  </Col>
                ));
              }}
            </CartContext.Consumer>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Select;
