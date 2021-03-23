import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../Login/Login.css';
import './BloodRequ.css'

const BloodRequ = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (e) => { console.log(e); }
    return (
        <div className='blood-requ'>

            <main className="login-section">
                <div className="wrapper fadeInDown">
                    <div id="formContent" className="p-4">
                        <h4 className="mb-4">Blood Requests</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" name="city" ref={register} required id="city" className="fadeIn second mb-4 " placeholder="Area or City" />
                            <Row className="">
                                <Col md={6}>
                                <label>Blood Group</label>
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
                                    <label>I'm his/her - </label>
                                    <select name="blood" ref={register} required>
                                        <option className='text-center' value="">Select...</option>
                                        <option className='text-center' value="father">Father</option>
                                        <option className='text-center' value="mother">Mother</option>
                                        <option className='text-center' value="brother">Brother</option>
                                        <option className='text-center' value="sister">Sister</option>
                                    </select>
                                </Col>
                            </Row>

                            <input type="submit" className="fadeIn fourth main-button mt-4" value="Submit" />

                        </form>

                    </div>
                </div>
            </main>

        </div>
    );
};

export default BloodRequ;