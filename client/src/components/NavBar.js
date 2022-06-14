import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';
import '../assets/css/header.css'

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark" className="navbar-store">
            <Container>
                <NavLink className="logo-title" to={SHOP_ROUTE}>Магазинус</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            onClick={()=> navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            className="btn-login"
                            variant={'outline-light'}
                            onClick={()=> navigate(LOGIN_ROUTE)}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            onClick={()=> user.setIsAuth(true)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;