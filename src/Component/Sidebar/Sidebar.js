import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBell, faBandAid, faCog } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import blood from '../../Img/blood-logo.png';
import sidebarImg from '../../Img/sidebar.png'

const Sidebar = () => {
    /* ==== FontAwsome ==== */
    const home = <FontAwesomeIcon icon={faHome} />
    const user = <FontAwesomeIcon icon={faUser} />
    const bell = <FontAwesomeIcon icon={faBell} />
    const bandAid = <FontAwesomeIcon icon={faBandAid} />
    const setting = <FontAwesomeIcon icon={faCog} />

    return (
        <div className='sidebar position-fixed' style={{ height: '100vh' }}>
            <div>
                <img src={blood} alt="blood img" />
                <h5 className='text-center mb-5'><span style={{ color: "#C70100"}}>Blood</span> Donation</h5>
            </div>

            {/* ------------------ Links ------------------ */}
            <ul className='list-unstyled py-5 ml-2 position-fixed'>

                <li>
                    <Link to='/home' className='text-black'>
                        {
                            <h5 className='actv'>{home} Home</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/profile' className='text-black'>
                        {
                            <h5>{user} Profile</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/notification' className='text-black'>
                        {
                            <h5>{bell} Notification</h5>
                        }
                    </Link>
                </li>
                <li>
                    <Link to='/donors' className='text-black'>
                        {
                            <h5>{bandAid} Donors</h5>
                        }
                    </Link>
                </li>

                <li>
                    <Link to='/customise' className='text-black'>
                        {
                            <h5>{setting} Customise</h5>
                        }
                    </Link>
                </li>
                <div>
                <img src={sidebarImg} alt=""/>
            </div>
            </ul>
            
        </div>
    );
};

export default Sidebar;