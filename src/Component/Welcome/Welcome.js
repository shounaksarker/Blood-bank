import React from 'react';
import { Link } from 'react-router-dom';
import blood from '../../Img/blood-logo.png'

const Welcome = () => {

    /* ==== css part ==== */
    const main = {
        'marginTop': "15rem",
        'textAlign': 'center'
    }
    const img = {
        'width': '10rem',
    }
    const text = {
        'fontSize': "2rem",
        "fontWeight": "bold"
    }
    const btn = {
        'backgroundColor': "#C70100",
        'borderRadius': '50px',
        'padding': '15px 50px',
        'color': '#FFFFFF',
        'fontSize': '25px'
    }

    return (
        <div style={main}>
            <img style={img} src={blood} alt="blood img" />
            <h3 style={text}><span style={{ color: "#C70100" }}>Blood</span> Donation</h3>

            <Link to="/home" style={btn} type="button" className="btn mt-5">Start Journey</Link>
        </div>
    );
};

export default Welcome;