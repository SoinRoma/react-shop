import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import '../assets/css/devicepage.css'
import star from '../assets/svg/rating-star.svg';

const DevicePage = () => {
    const device = {id: 1, name: 'S3', price: 50000, rating: 4, img: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/Samsung_SGS3_Startseite.jpg'};
    const description = [
        {id:1, title: 'Оперативная память', description: '5 гб'},
        {id:2, title: 'Камера', description: '8 мп'},
        {id:3, title: 'Процессор', description: 'Snapdragon 3'},
        {id:4, title: 'Количество ядер', description: '2'},
        {id:5, title: 'Аккумулятор', description: '3200'},
    ]
    return (
        <Container className="device-page">
           <div className="d-flex">
               <Col md={8} className="device-left">
                   <div className="d-flex align-items-start">
                       <Image src={device.img} className="device-big-image" />
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
                {description.map((info, index) =>
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