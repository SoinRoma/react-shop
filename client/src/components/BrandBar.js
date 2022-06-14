import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";
import '../assets/css/brandbar.css'

const BrandBar = observer (() => {
    const {device} = useContext(Context);
    return (
        <div className="d-flex flex-wrap">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className={brand.id === device.selectedBrand.id ? 'brandBar-card active-card-brand' : 'brandBar-card'}
                    onClick={()=> device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;