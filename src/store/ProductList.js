import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

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
        <Divcontainer style={{marginLeft:"auto", marginRight:"auto"}}>
          <h3 className="text-blue" style={{
            textAlign:"center",
            fontFamily: "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "20px"
          }}> Search:</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input value={this.state.value} style={{ borderRadius: "4px" }} type="text" onChange={this.handleValue} />
          </div>
        </Divcontainer>


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

const Divcontainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 10%;
    margin-left: 30px;
    margin-top: 50px;
`