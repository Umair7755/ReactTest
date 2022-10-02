import React from 'react';
import ImageLeft from './img/img1.png';
import Button from './img/Button.png';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-main'>
            <section className='home-left-div'>
                <img alt="" className='home-img-left' src={ImageLeft} />
            </section>
            <section className='home-right-div'>
                <span className='home-text1'>Imagine if</span>
                <span className='home-text3'>Snapchat</span>
                <span className='home-text2'>had events.</span>
                <span className='home-para'>Easily host and share events with your friends across any social media.</span>
                <img alt="" className='home-btn' src={Button} onClick={() => navigate('/create')} />
            </section>
        </div>
    )
}

export default Home;