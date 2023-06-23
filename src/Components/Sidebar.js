import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import HomeIcon from '@mui/icons-material/Home'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import HistoryIcon from '@mui/icons-material/History'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to='/' className='homeLink'>
                <SidebarRow selected Icon={HomeIcon} title="Home" />
            </Link>
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your video" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Lided video" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar