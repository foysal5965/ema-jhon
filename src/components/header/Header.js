import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link>

                <Link to="/order">Orders</Link>
                <Link to='/inventory'>INventory</Link>
                <Link to="/about">about</Link>

               {
                user?.uid?
               <button className='btn-logout' onClick={logOut}>Log out</button>
                :
                <>
                 <Link to='/login'>login</Link>
                 <Link to='/signup'>signup</Link>
                </>
               }
               
            </div>

        </nav>
    );
};

export default Header;