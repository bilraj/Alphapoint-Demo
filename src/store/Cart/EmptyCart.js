import React from 'react';
import { ButtonContainer } from '../Button';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Your cart is empty</h1>
                </div>
            </div>
            <div className="row">
                <Link to="/">
                    <ButtonContainer className="text-center">Go to Store</ButtonContainer>
                </Link>
            </div>
        </div>
    )
}