import React from 'react'
import { Avatar } from '@mui/material'
import CheckCircleOutlineOutlined from '@mui/icons-material/CheckCircleOutlineOutlined'
import './ChannelRow.css'
const ChannelRow = ({ image, description, channel, subs, noOfVideos, verified }) => {
    return (
        <div className='ChannelRow'>
            <Avatar className='videoCard-avatar' alt={channel} src={image} />
            <div className='channelRow-text'>
                <h4>{channel} {verified && <CheckCircleOutlineOutlined />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow