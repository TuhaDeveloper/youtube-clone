import React from 'react'
import './video.css'
import { Avatar } from '@mui/material'
const Video = ({ image, channel, views, timestamp, title, channelImage }) => {
    return (
        <div className='videoCard'>
            <img className='thumbnil' src={image} alt='' />
            <div className='video-info'>
                <Avatar className='videoCard-avatar' alt={channel} src={channelImage} />
                <div className='video-text'>
                    <h4>{title}</h4>
                    <p>{channel} {views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Video