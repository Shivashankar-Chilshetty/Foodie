import {useState} from 'react';
import {LOGO_URL} from '../utils/constants';

const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src={LOGO_URL} />
    </a>
)

const Header = () => {
    let [btnName, setBtnName] = useState('login')
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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