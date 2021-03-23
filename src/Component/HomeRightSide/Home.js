import React from 'react';
import { Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Campaign from './Campaign';
// import { Maps } from './Maps';
import MenuRequest from './MenuRequest'

const Home = () => {
    return (
        <div style={{'margin':'0px'}} className='row'>
            <Col xl={2} lg={3} md={4} sm={5} xs={6}>
                <Sidebar></Sidebar>
            </Col>
            <Col xl={10} lg={9} md={8} sm={7} xs={6} style={{ 'background': '#F6F7F9'}}>
                <Campaign></Campaign>
                <MenuRequest></MenuRequest>
            </Col>
        </div>
    );
};

export default Home;