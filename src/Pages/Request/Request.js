import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BloodRequ from '../../Component/Requ/BloodRequ';
import MyRequ from '../../Component/Requ/MyRequ';
import Requ from '../../Component/Requ/Requ'
import UrgentRequ from '../../Component/Requ/UrgentRequ';
import Sidebar from '../../Component/Sidebar/Sidebar';
import './Request.css'

const Request = () => {
    return (
        <div className="Request bg-light  pt-3">
            <Row className='req'>
                <Col md={2} className='bg-white'>
                    <Sidebar></Sidebar>
                </Col>

                <div className='col-md-3'>
                    <Col>
                        <Requ></Requ>
                    </Col>
                    <Col className='mt-5'>
                        <h4 className='mb-4'>Urgent Requests</h4>
                        <UrgentRequ></UrgentRequ>
                    </Col>
                    <Col className='mt-5'>
                    <h4 className='mb-4'>My Requests</h4>
                        <MyRequ></MyRequ>
                    </Col>
                </div>

                <Col md={5}>
                    <BloodRequ></BloodRequ>
                </Col>
            </Row>
        </div>
    );
};

export default Request;