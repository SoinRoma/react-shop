import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import '../assets/css/header.css'
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="logo-title" to={SHOP_ROUTE}>Магазинус</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button className="btn-login" variant={'outline-light'}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={()=> user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;