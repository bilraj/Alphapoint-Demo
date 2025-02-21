import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            return (!cart.length ? <EmptyCart /> :
              <React.Fragment>
                <Title name='your' title='cart' />
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history}/>
                
              </React.Fragment>)
          }}
        </ProductConsumer>

      </section>
    );
  }
}
