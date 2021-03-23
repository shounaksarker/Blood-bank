import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../../App';
import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
/* === import css & image === */
import './Login.css';
import blood from '../../Img/blood-logo.png';

/* === import Firebase ====== */
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const SignUp = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory()

    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(DataContext);
    const [show, setShow] = useState({
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
    });


    const onSubmit = (e) => {

        const info = { ...user }
        info.username = e.username
        info.email = e.email;
        info.password = e.password;
        setUser(info);

        const shw = { ...show }
        shw.first = false;
        shw.second = true;
        setShow(shw)
    }

    const onSubmit2 = (e) => {
        const info = { ...user }
        info.phone = e.phone
        info.altphone = e.altphone;
        info.social = e.social
        setUser(info);

        const shw = { ...show }
        shw.first = false;
        shw.second = false;
        shw.third = true;
        setShow(shw)
    }

    const onSubmit3 = (e) => {
        console.log(e)
        const info = { ...user }
        info.blood = e.blood
        info.weight = e.weight
        setUser(info);

        const shw = { ...show }
        shw.third = false;
        shw.fourth = true;
        setShow(shw)
    }

    const onSubmit4 = (e) => {
        const info = { ...user }
        info.gender = e.gender;
        info.age = e.age;
        setUser(info);

        const shw = { ...show }
        shw.fourth = false;
        shw.fifth = true;
        setShow(shw)
    }

    const onSubmit5 = (e) => {
        const info = { ...user }
        info.adress = e.adress
        info.city = e.city;
        info.postcode = e.postcode
        setUser(info);

        const shw = { ...show }
        shw.fifth = false;
        shw.sixth = true;
        setShow(shw)
    }

    const finalSubmit = () => {
        /* === firebase signup & put data in firebase database */

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                console.log(result);
                const usr = { ...user }
                usr.email = '';
                usr.password = '';
                console.log("user : ", usr);
            })
            .catch((error) => {
                const err = error.message;
                const usr = { ...user };
                user.error = err;
                setUser(usr)
            });

        firebase.database().ref('user/' + user.username).set({
            username: user.username,
            email: user.email,
            password: user.password,
            phone: user.phone,
            altphone: user.altphone,
            social: user.social,
            blood: user.blood,
            weight: user.weight,
            gender: user.gender,
            adress: user.adress,
            city: user.city,
            postcode: user.postcode,
            age: user.age,
        })

        history.replace('/home')
    }



    return (
        <div className='sign-up'>
            <Row className='align-items-center mt-5 pt-5'>
                <Col md={6} lg={4} xl={4} className='fadeInDown'>
                    <div className='d-flex flex-column'>
                        <img src={blood} className='blood-img' alt="blood img" />
                        <h3 className='text-center mb-5'><span style={{ color: "#C70100" }}>Blood</span> Donation</h3>
                    </div>
                </Col>
                <Col md={6} lg={8} xl={8}>
                    <main className="login-section">
                        <div className="wrapper fadeInDown">
                            <div id="formContent">

                                {/* ==== sign up 1st page ==== */}

                                {show.first ? <div>
                                    <div className="fadeIn first">
                                        <h3 className="main-color py-4">Let us know about you</h3>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="text" name="username" ref={register} required id="username" className="fadeIn second  " placeholder="Username" />

                                        <input type="email" name="email" ref={register} required id="email" className="fadeIn third" placeholder="Email" />

                                        <input type="password" name="password" ref={register} required id="password" className="fadeIn fourth" placeholder="Password" />
                                        <input type="submit" className="fadeIn fourth main-button mt-4" value="Next" />
                                    </form>
                                </div> : null}

                                {/* ==== sign up 2nd page ==== */}

                                {show.second ? <div>
                                    <div className="fadeIn first">
                                        <h3 className="main-color py-4">Contact Information</h3>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit2)}>
                                        <input type="text" name="phone" ref={register} required id="phone" className="fadeIn second  " placeholder="Phone No." />

                                        <input type="text" name="altphone" ref={register} required id="altphone" className="fadeIn third" placeholder="Alternative Phone No." />

                                        <input type="text" name="social" ref={register} required id="social" className="fadeIn fourth" placeholder="Social (optional)" />
                                        <input type="submit" className="fadeIn fourth main-button" value="Next" />
                                    </form>
                                </div> : null}

                                {/* ==== sign up 3rd page (option) ==== */}

                                {show.third ? <div>
                                    <div className="fadeIn first row">
                                        <h3 className="main-color py-4 col-md-6">Blood Group</h3>
                                        <h3 className="main-color py-4 col-md-6">Weight</h3>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit3)}>
                                        <Row className="mb-4">
                                            <Col md={6}>
                                                <select name="blood" ref={register} required>
                                                    <option className='text-center' value="">Select...</option>
                                                    <option className='text-center' value="A+">A+</option>
                                                    <option className='text-center' value="A-">A-</option>
                                                    <option className='text-center' value="B+">B+</option>
                                                    <option className='text-center' value="B-">B-</option>
                                                    <option className='text-center' value="O+">O+</option>
                                                    <option className='text-center' value="O-">O-</option>
                                                    <option className='text-center' value="AB+">AB+</option>
                                                    <option className='text-center' value="AB-">AB-</option>
                                                </select>
                                            </Col>
                                            <Col md={6}>
                                                <select name="weight" ref={register} required>
                                                    <option className='text-center' value="">Select...</option>
                                                    <option className='text-center' value="50+"> 50+ </option>
                                                    <option className='text-center' value="50-"> 50- </option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <input type="submit" className="fadeIn fourth main-button" value="Next" />
                                    </form>
                                </div> : null}

                                {/* ==== sign up 4th page ==== */}

                                {show.fourth ? <div>
                                    <div className="fadeIn first row">
                                        <h3 className="main-color py-4 col-md-6">Gender</h3>
                                        <h3 className="main-color py-4 col-md-6">Age</h3>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit4)}>
                                        <Row className="mb-4 fadeIn fourth">
                                            <Col md={6}>
                                                <select name="gender" ref={register} required>
                                                    <option value="">Select...</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </Col>
                                            <Col md={6}>
                                                <input type="number" name="age" ref={register} required id="age" placeholder="Your Age" />
                                            </Col>
                                        </Row>
                                        <input type="submit" className="fadeIn fourth main-button" value="Next" />
                                    </form>
                                </div> : null}

                                {/* ==== sign up 5th page ==== */}

                                {show.fifth ? <div>
                                    <div className="fadeIn first">
                                        <h3 className="main-color py-4">Where Do You Live</h3>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit5)}>
                                        <input type="text" name="adress" ref={register} required id="username" className="fadeIn second  " placeholder="Strret Adress" />

                                        <input type="text" name="city" ref={register} required id="email" className="fadeIn third" placeholder="City" />

                                        <input type="text" name="postcode" ref={register} required id="password" className="fadeIn fourth" placeholder="Postal code" />
                                        <input type="submit" className="fadeIn fourth main-button" value="Next" />
                                    </form>
                                </div> : null}

                                {/* ==== Final Submit ==== */}

                                {show.sixth ? <div>
                                    <div className="fadeIn first">
                                        {user.error ? <h3 className="text-danger">{user.error}</h3> :
                                            <h3 className="main-color py-4">Thanks For your joining...</h3>
                                        }
                                    </div>

                                    <form onSubmit={handleSubmit(finalSubmit)}>
                                        <input type="submit" className="fadeIn secont main-button" value="Done" />
                                    </form>
                                </div> : null}


                            </div>
                        </div>
                    </main>
                </Col>
            </Row>
        </div >
    );
};

export default SignUp;











// import React, { useState } from 'react';
// import Menubar from '../HomePage/Menubar/Menubar';
// import firebaseConfig from './firebase.config';
// import firebase from "firebase/app";
// import "firebase/auth";
// import './Login.css'


// const SignUp = () => {
//     const [newUser, setNewUser] = useState({
//         success : false,
//         error : false,
//         email : '',
//         password : ''
//     });
//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     const handleblur = (e) => {
//         const user = { ...newUser };
//         user[e.target.name] = e.target.value;
//         setNewUser(user)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
//         .then((result) => {
//              const user = {...newUser}
//              user.success = true;
//              user.email = '';
//              user.password = '';
//              console.log(newUser);
//         })
//         .catch((error) => {
//             var errorMessage = error.message;
//             newUser.error = errorMessage;
//         });
//     }



//     return (
// <main>
//     <Menubar></Menubar>
//     <div className="wrapper fadeInDown">
//         <div id="formContent">
//             <div className="fadeIn first">
//                 <h3 className="main-color py-4">Sign Up</h3>
//             </div>

//             <form onSubmit={handleSubmit}>
//                 <input type="email" id="signup" onBlur={handleblur} className="fadeIn second" name="email" placeholder="Email" />
//                 <input type="password" id="password" onBlur={handleblur} className="fadeIn third" name="password" placeholder="Password" />
//                 <input type="submit" className="fadeIn fourth main-button" value="Sign Up" />
//             </form>
//         </div>
//     </div>
// </main>
//     );
// };

// export default SignUp;



