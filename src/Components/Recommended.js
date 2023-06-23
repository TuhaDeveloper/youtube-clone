import React from 'react'
import './recommended.css'
import youtubeImg1 from '../Images/1.jpg'
import youtubeImg2 from '../Images/2.jpg'
import youtubeImg3 from '../Images/3.jpg'
import youtubeImg9 from '../Images/9.jpg'
import youtubeImg5 from '../Images/5.jpg'
import youtubeImg6 from '../Images/6.jpg'
import youtubeImg7 from '../Images/7.jpg'
import youtubeImg8 from '../Images/8.jpg'
import Video from './Video'
const Recommended = () => {
    return (
        <div className='recommended'>
            <h2>Recommended</h2>
            <div className='recommendedVideos'>
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg9}
                    image={youtubeImg9}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg1}
                    image={youtubeImg1}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg2}
                    image={youtubeImg2}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg3}
                    image={youtubeImg3}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg5}
                    image={youtubeImg5}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg6}
                    image={youtubeImg6}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg7}
                    image={youtubeImg7}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg8}
                    image={youtubeImg8}
                />
                <Video
                    title='Become a web developer in 2023'
                    views='2.4M Views'
                    timestamp='3 days ago'
                    channel='Toha Developer'
                    channelImage={youtubeImg9}
                    image={youtubeImg9}
                />
            </div>
        </div>
    )
}

export default Recommended