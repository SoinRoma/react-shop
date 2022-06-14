import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import '../assets/css/shop.css';

const Shop = () => {
    return (
        <Container>
            <Row className="shop-content">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;