import React from 'react'
import './ResponsibeBar.css'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import HomeIcon from '@mui/icons-material/Home'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import { Link } from 'react-router-dom';
import SidebarRow from './SidebarRow'


const ResponsibeBar = () => {
    return (
        <div className='responsibeBar'>
            <Link to='/' className='homeLink'>
                <SidebarRow selected Icon={HomeIcon} className='responsibevarIcon' />
            </Link>
            <SidebarRow Icon={WhatshotIcon} className='responsibevarIcon' />
            <SidebarRow Icon={SubscriptionsIcon} className='responsibevarIcon' />
            <SidebarRow Icon={VideoLibraryIcon} className='responsibevarIcon' />
        </div>
    )
}

export default ResponsibeBar