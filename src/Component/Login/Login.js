import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css';
import blood from '../../Img/blood-logo.png';
import { Link } from 'react-router-dom';
import { DataContext } from '../../App';
import { useContext } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(DataContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const onSubmit = (e) =>{
        const info = {...user};
        info.email = e.email;
        info.password = e.password;
        setUser(info);

        firebase.auth().signInWithEmailAndPassword(e.email, e.password)
            .then((result) => {
                user.success = "successfully";
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                const info = { ...user };
                info.error = errorMessage;
                setUser(info);
            });
    }

    return (
        <div className='login'>
            <Row className='align-items-center mt-5 pt-5'>
                <Col md={6} lg={4} xl={4} className='fadeInDown'>
                    <div className='d-flex flex-column'>
                        <img src={blood} className='blood-img' alt="blood img" />
                        <h3 className='text-center mb-5'><span style={{ color: "#C70100" }}>Blood</span> Donation</h3>
                <h6 className='text-center'>For entering homepage, you have to log in / sign up.</h6>
                    </div>
                </Col>

                <Col md={6} lg={8} xl={8}>
                    <main className="login-section">
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <div className="fadeIn first">
                                    <h3 className="main-color py-3">Login</h3>
                                    {user.error && <p className="text-danger">{user.error}</p>}
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="email" name="email" ref={register} required id="login" className="fadeIn second" placeholder="Email" />
                                    <input type="password" name="password" ref={register} required id="password" className="fadeIn third" placeholder="Password" />
                                    <input type="submit" className="fadeIn fourth main-button" value="Log In" />
                                </form>
                                {/* {user.success} */}
                                <div id="formFooter">
                                    <Link className="underlineHover" to="/#">Forgot Password?</Link>
                                    <span style={{ color: "#878585" }}>Don't Have a account?</span> <Link className="underlineHover" to="/signup">SignUp</Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </Col>
            </Row>
        </div>
    );
};

export default Login;









// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }