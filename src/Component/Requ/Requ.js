import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import req1 from '../../Img/iconReq (1).png';
import req2 from '../../Img/iconReq (2).png';
import req3 from '../../Img/iconReq (3).png';
import './Requ.css'

const Request = () => {
    return (
        <div>
            <div style={{ 'margin': '0px'}} className='request'>
                <h4 className="mr-3 mb-3">Request</h4>
                <Row>
                    <div className="col-md-4 text-center">
                        <Link to={'/request'}><img className="request-icon" src={req1} alt="icon" /><span class="badge rounded-pill bg-dark text-white">New</span></Link>
                        <h5 className="ml-1">Urgent<br/>Request</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to={'/request'}><img className="request-icon" src={req2} alt="icon" /></Link>
                        <h5>My<br/>Request</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to={'/request'}><img className="request-icon" src={req3} alt="icon" /></Link>
                        <h5 className="ml-2">Post<br/>Request</h5>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Request;

//badge rounded-pill bg-info text-dark