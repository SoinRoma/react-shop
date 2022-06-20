import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Page from "../components/Page";
import '../assets/css/shop.css';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";

const Shop = observer (() => {

    const  {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        // eslint-disable-next-line
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className="shop-content">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Page />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;