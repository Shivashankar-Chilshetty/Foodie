import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => (
    <a href="/">
        <img className="w-36" alt="logo" src={LOGO_URL} />
    </a>
)

const Header = () => {
    let [btnName, setBtnName] = useState('login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    //subscribing to a store using a selector
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50">
            <Title />
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to='/cart'>Cart-{cartItems.length}</Link>
                    </li>
                    <button className='login' onClick={
                        () => btnName == 'login' ? setBtnName('logout') : setBtnName('login')
                    }>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;