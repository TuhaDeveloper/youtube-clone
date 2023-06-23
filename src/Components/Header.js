import React, { useState } from 'react'
import './header.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccImg from '../Images/account.jpg'
import youtubeLogo from '../Images/Youtube-image.jpg'
import { Avatar } from '@mui/material'
// https://th.bing.com/th/id/OIP.NU52hEVMqEfc5NqzloeaaAAAAA?w=187&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7
import { Link } from 'react-router-dom';
const Header = () => {
    const [InputSearch, setInputSearch] = useState("")
    return (
        <div className='header'>

            <div className='header-left'>
                <MenuIcon className='manuIcon' />
                <Link to='/'>
                    <img className='header-logo' src={youtubeLogo} alt='youtube' />

                </Link>
            </div>

            <div className='header-input'>
                <input onChange={(e) => setInputSearch(e.target.value)} value={InputSearch} type='text' placeholder='search' />
                <Link to={`/search/${InputSearch}`}>
                    <SearchIcon className='header-inputButton' />
                </Link>
            </div>

            <div className='header-icons'>
                <VideoCallIcon className='header-icon' />
                <AppsIcon className='header-icon' />
                <NotificationsIcon className='header-icon' />
                <Avatar className='headerAvatar' src={AccImg} />
            </div>

        </div>
    )
}

export default Header