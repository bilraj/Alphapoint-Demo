import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {

        return (

            <MenuWrapper className="navbar-nav flex-column" >
                <Link to="/wallet/dashboard" className="nav-item">
                    <ButtonContainer selected className="px-3 py-2">
                        <span className="mr-2"><i className="fas fa-home"></i></span>
                        Dashboard
                    </ButtonContainer>
                </Link>
                <Link to="/wallet/buy-sell" className="nav-item">
                    <ButtonContainer selected className="px-3 py-2" >
                        <span className="mr-2"><i className="fas fa-shopping-cart"></i></span>
                        Buy & Sell
                    </ButtonContainer>
                </Link>
                <Link to="/wallet/transactions" className="nav-item">
                    <ButtonContainer selected className="px-3 py-2">
                        <span className="mr-2"><i className="fas fa-shopping-cart"></i></span>
                        Transactions
                    </ButtonContainer>
                </Link>
                <Link to="/wallet/transactions" className="nav-item">
                    <ButtonContainer selected className="px-3 py-2">
                        <span className="mr-2"><i className="fas fa-shopping-cart"></i></span>
                        Transactions
                    </ButtonContainer>
                </Link>


            </MenuWrapper>
        )
    }
}

const MenuWrapper = styled.ul`
    font-size: 1.1rem;
    width: 15%;
    color: var(--menuTextBlue);
    font-weight: 500;
    display:flex;
    .nav-item {
        margin-top: 10px;
    }
`

const ButtonContainer = styled.button`
text-transform: capitalize;
text-align:left;
font-size: 1.4 rem;
background: transparent;
border: none;
border-radius: 0.3rem;
color: var(--mainGrey);
padding: 0.2rem 0.5rem;
cursor: pointer;
flex: 1;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
width: 100%;
justify-content: flex-start;
background: ${props => props.selected ? "var(--lightTextBlue)" : "var(--white)"};
&:hover{
    background: var(--lightTextBlue);
    color: var(--menuTextBlue);
    border-radius: 0.25rem;
}
&:focus{
  outline:none;
}
`
