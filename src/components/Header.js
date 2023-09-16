import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src={LOGO_URL} />
    </a>
)

const Header = () => {
    let [btnName, setBtnName] = useState('login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={
                        () => btnName == 'login' ? setBtnName('logout') : setBtnName('login')
                    }>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;