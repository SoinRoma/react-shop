import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import '../assets/css/shop.css';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchTypes} from "../http/deviceAPI";

const Shop = observer (() => {

    const  {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        // eslint-disable-next-line
    }, [])

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
});

export default Shop;