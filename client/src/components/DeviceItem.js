import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import '../assets/css/deviceitem.css';
import star from '../assets/svg/rating-star.svg';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className="mt-3">
            <Card className='device-item' onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)}>
                <Image src={process.env.REACT_APP_API_URL + device.img} className="device-img" />
                <div className="d-flex justify-content-between mt-2">
                    <div className="text-black-50">Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star} />
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;