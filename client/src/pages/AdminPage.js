import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import '../assets/css/admin.css'
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const AdminPage = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container>
            <div className="admin-content w-25">
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-3"
                    onClick={()=>setTypeVisible(true)}
                >
                    Добавить тип
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-3"
                    onClick={()=>setBrandVisible(true)}
                >
                    Добавить бренд
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-3"
                    onClick={()=>setDeviceVisible(true)}
                >
                    Добавить устройство
                </Button>
                <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)} />
                <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)} />
            </div>

        </Container>
    );
};

export default AdminPage;