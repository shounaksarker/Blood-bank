import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import './UrgentRequ.css';

const UrgentRequ = () => {

    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const user = <FontAwesomeIcon icon={faUser} />

    return (
        <div className='urgent-requ'>
            <div className='urgent-main p-4'>
                <Row className='d-flex justify-content-between'>
                    <Col md={8}>
                        <h5>Scheduled</h5>
                        <p className='text-muted'>at Sun 11.30 PM</p>
                        <h5>Jarin Hospital</h5>
                        <p className='text-muted'>{location} los angles, CA</p>
                    </Col>
                    <Col md={4} className='text-right'>
                        <Link to={'#'} className="btn btn-warning">Contact</Link>
                        <h5>O+</h5>
                        <p className='text-muted'>1 min ago</p>
                        <p>{user} Brother</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default UrgentRequ;