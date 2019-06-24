import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { MenuItemContainer } from './MenuItem';
import { LoginConsumer } from '../LoginContext';

export default class Navbar extends Component {
  handleClick = (value) => {
    value.logout();
  }
  
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
          {/* <span><i class="fas fa-shopping-cart"></i></span> */}
        </Link>

        <ul className="navbar-nav align-items-center">
          <MenuItemContainer className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Store
            </Link>
          </MenuItemContainer>
          <MenuItemContainer className="nav-item ml-5">
            <Link to="/wallet/dashboard" className="nav-link">
              Wallet
            </Link>
          </MenuItemContainer>
          {/* <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Withdraw
            </Link>
          </li> */}
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2"><i className="fas fa-cart-plus" /> </span>
            My cart
          </ButtonContainer>
        </Link>
        <LoginConsumer>
          {(value) => {
            return (
              <Link to='/' className="">
                <ButtonContainer onClick={() => this.handleClick(value)}>
                  <span className="mr-2"><i className="fas fa-sign-out-alt"></i>
                  </span>
                  Logout
          </ButtonContainer>
              </Link>
            )
          }}
        </LoginConsumer>

      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`