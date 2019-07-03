import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoginConsumer } from '../../LoginContext';

export default class Menu extends Component {

    render() {

        return (

            <MenuWrapper className="navbar-nav flex-column" style={{backgroundColor:"var(--three)"}}>
                <Link to="/wallet/dashboard" className="nav-item">
                    <ButtonContainer selected className="px-3 py-2 nav-items">
                        <span className="mr-2"><i className="fas fa-home"></i></span>
                        Dashboard
                    </ButtonContainer>
                </Link>

                <Link to="/wallet/transactions" className="nav-item">
                    <ButtonContainer selected className="px-3 py-2 nav-items">
                        <span className="mr-2"><i className="fas fa-money-check-alt"></i>

                        </span>
                        Transactions
                    </ButtonContainer>
                </Link>
                <LoginConsumer>
                    {(value) => {
                        return (
                            value.isAdmin ?
                                <Link to="/wallet/tokenize" className="nav-item">
                                    <ButtonContainer selected className="px-3 py-2 nav-items">
                                        <span className="mr-2"><i className="fas fa-plus-square"></i>

                                        </span>
                                        Tokenize
                    </ButtonContainer>
                                </Link> : <div></div>

                        )
                    }}
                </LoginConsumer>


            </MenuWrapper>
        )
    }
}

const MenuWrapper = styled.ul`
    font-size: 1.1rem;
    width: 250px;
    max-width:250px;
    min-width:250px;
    height: 100%;
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
