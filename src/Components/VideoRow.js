import React from 'react'
import './VideoRow.css'
const VideoRow = ({ views, subs, description, timestamp, channel, title, image }) => {
    return (
        <div className='videoRow'>
            <div className='thumbnil-img'>
                <img alt='thumbnil' src={image} />
                <p className='timestamp'>{timestamp}</p>
            </div>
            <div className='search-video-text'>
                <h4 className='title'>{title}</h4>
                <p>Views {views} </p>
                <p>{channel}</p>
                <p>8 days ago</p>
            </div>
        </div>
    )
}

export default VideoRow