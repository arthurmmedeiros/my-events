import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';


export default function Header() {
    const cartSize = useSelector(state => state.cart.length);
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="arturio" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>
                    <span>{`${cartSize} items`}</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

