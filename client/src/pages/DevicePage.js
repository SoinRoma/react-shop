import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import '../assets/css/devicepage.css'
import star from '../assets/svg/rating-star.svg';
import {useParams} from 'react-router-dom';
import {fetchOneDevices} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data));
        // eslint-disable-next-line
    }, []);

    return (
        <Container className="device-page">
           <div className="d-flex">
               <Col md={8} className="device-left">
                   <div className="d-flex align-items-start">
                       <Image src={process.env.REACT_APP_API_URL + device.img} className="device-big-image" />
                       <div>
                           <h2 className="device-title">{device.name}</h2>
                           <div className="device-rating">
                               <p>Рейтинг: {device.rating}</p>
                               <Image src={star} />
                           </div>
                       </div>
                   </div>
               </Col>
               <Col md={4}>
                   <Card className="device-right">
                       <h2 className="price-title">
                           Цена от: {device.price} руб
                       </h2>
                       <Button className="device-btn-basket">
                           Добавить в корзину
                       </Button>
                   </Card>
               </Col>
           </div>
            <div className="d-flex flex-column mt-4 mb-5">
                <h3 className="p-0">Характеристики</h3>
                {device.info.map((info, index) =>
                    <div
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: '20px'}}
                    >
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default DevicePage;