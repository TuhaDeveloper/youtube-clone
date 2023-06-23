import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import youtubeImg2 from '../Images/2.jpg'
import youtubeImg9 from '../Images/9.jpg'
import youtubeImg5 from '../Images/5.jpg'
import youtubeImg6 from '../Images/6.jpg'
import youtubeImg7 from '../Images/7.jpg'
import youtubeImg8 from '../Images/8.jpg'

import VideoRow from './VideoRow'

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage-filter'>
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image={youtubeImg2}
                channel='Jahidu Islam Toha'
                verified
                subs='659k'
                noOfVideos={343}
                description="you can find awesome programing vidoes here all time..."
            />
            <hr />
            <VideoRow
                image={youtubeImg5}
                title="how to learn web development in 2023"
                channel="Jahidu Islam Toha "
                subs='659k'
                views="495k"
                timestamp='9:34'
                description="Roadmap of web development in 2023..."
            />
            <VideoRow
                image={youtubeImg6}
                title="best book reviews in 2023"
                channel="Jahidu Islam Toha "
                subs='2M'
                views="895k"
                timestamp='3:34'
                description="book reviews in 2023..."
            />
            <VideoRow
                image={youtubeImg7}
                title="motivational speace in 2023"
                channel="Jahidu Islam Toha "
                subs='349k'
                views="1M"
                timestamp='7:34'
                description="best motivational speace  in 2023..."
            />
            <VideoRow
                image={youtubeImg8}
                title="Top 10 Advice for student"
                channel="Jahidu Islam Toha "
                subs='1M'
                views="875k"
                timestamp='5:34'
                description="Top 10 Advice for students..."
            />
            <VideoRow
                image={youtubeImg9}
                title="Best University in selicon Vally"
                channel="Jahidu Islam Toha "
                subs='839k'
                views="945k"
                timestamp='33:34'
                description="Best University in sellicon vally..."
            />
        </div>
    )
}

export default SearchPage