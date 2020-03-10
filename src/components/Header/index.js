import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

export default function Header(){
    return(
        <Container>
            <Link to="/">
                <img src={logo} alt="arturio" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>
                    <span>3 items</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
