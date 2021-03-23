import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import "./campaign.css";
import dBlood from '../../Img/db.png';
import dBlood2 from '../../Img/db.jpg';
import dBlood3 from '../../Img/db3.jpg';
import john from '../../Img/john.jpg';
import { DataContext } from '../../App';


const Campaign = () => {
    const [user,] = useContext(DataContext);

    return (
        <div className="home-right container-fluid mb-5">

            <Row className="d-flex mb-4 pt-4">
                <Col xl={6} lg={6} md={12} sm={12} xs={12} className="d-flex">
                    <h3 className="mr-5">Campaign</h3>
                    <h5 className="mt-2 d-sm-none d-none">Available</h5>
                    <label className="switch m-3 d-sm-none d-none">
                        <input type="checkbox d-sm-none d-none" />
                        <span className="slider round d-sm-none d-none"></span>
                    </label>
                </Col>

                <Col xl={6} lg={6} md={12} sm={12} xs={12} className="row justify-content-end">
                     <div>
                         <h4>{user.username}</h4>
                         <p>Blood Donor</p>
                     </div>
                     <img src={john} alt="donor" className="donor-img"/>
                     <div className="test ml-4"></div>
                </Col>
            </Row>




            <Row>
                <Col md={4} className='radious'>
                    <div className="card text-white radious">
                        <img src={dBlood} className="card-img radious" alt="Donating blood img" />
                        <div className="card-img-overlay radious">
                            <h5 className="card-title">Blood Donation Campaign 2021 <br /> held on Today</h5>

                            <div className="d-flex justify-content-between">
                                <p>by admin</p>
                                <p>1 min ago</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4} className='radious '>
                    <div className="card text-white radious">
                        <img src={dBlood2} className="card-img radious" alt="Donating blood img" />
                        <div className="card-img-overlay radious">
                            <h5 className="card-title">Blood Donation Campaign 2021 <br /> held on Today</h5>

                            <div className="d-flex justify-content-between">
                                <p>by admin</p>
                                <p>1 min ago</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4} className='radious'>
                    <div className="card text-white radious">
                        <img src={dBlood3} className="card-img radious" alt="Donating blood img" />
                        <div className="card-img-overlay radious">
                            <h5 className="card-title">Blood Donation Campaign 2021 <br /> held on Today</h5>

                            <div className="d-flex justify-content-between">
                                <p>by admin</p>
                                <p>1 min ago</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Campaign;