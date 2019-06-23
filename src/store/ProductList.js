import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context';
import { ButtonContainer } from './Button';

export default class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleValue = this.handleValue.bind(this);
  }

  handleValue = (event) => {
    event.persist();
    this.setState(() => {
      return {
        value: event.target.value
      }
    }, () => {
    });
  }

  render() {
    let filteredProducts = [];

    return (
      <React.Fragment>
        <h3>Filter:</h3>
        <input value={this.state.value} style={{ borderRadius: "10px" }} type="text" onChange={this.handleValue} />
        <ButtonContainer className="ml-3">Submit</ButtonContainer>

        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.filter(product => {
                    return product.title.indexOf(this.state.value) !== -1;
                  }
                  ).map(prod => {
                    return <Product key={prod.id} product={prod} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment> //2:18
      // <div><Product/>  </div>
    );
  }
}
