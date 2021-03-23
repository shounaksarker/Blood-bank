import React from 'react';
import { Row } from 'react-bootstrap';
import "./MenuRequest.css"
import menu1 from '../../Img/icon (2).png';
import menu2 from '../../Img/icon (4).png';
import menu3 from '../../Img/icon (3).png';
import menu4 from '../../Img/icon (1).png';
import Requ from '../Requ/Requ'
import { Link } from 'react-router-dom';
const MenuRequest = () => {
    return (
        <div className="col-md-5 menu" >
            <h4 className="mr-3 mb-3">Menu</h4>
            <Row className="mb-5 text-center">
                <div className="col-md-3">
                    <Link to={'/request'}><img className="menu-icon" src={menu1} alt="icon" /></Link>
                    <h5 className="ml-3">Book</h5>
                </div>
                <div className="col-md-3">
                    <Link to={'/request'}><img className="menu-icon" src={menu2} alt="icon" /></Link>
                    <h5>Donation</h5>
                </div>
                <div className="col-md-3">
                    <Link to={'/request'}><img className="menu-icon" src={menu3} alt="icon" /></Link>
                    <h5>Donors</h5>
                </div>
                <div className="col-md-3">
                    <Link to={'/request'}><img className="menu-icon" src={menu4} alt="icon" /></Link>
                    <h5>My List</h5>
                </div>
            </Row>
            <Requ></Requ>
        </div>
    );
};

export default MenuRequest;