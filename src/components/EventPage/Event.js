import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/Context';
import Arrow from './img/arrow.png';
import Fill from './img/Fill.png';
import Location from './img/loc.png';
import './Event.css';
import moment from 'moment';

const Event = () => {
    const navigate = useNavigate();
    const {
        event,
        host,
        start,
        end,
        location,
        pic
    } = useContext(GlobalContext);

    useEffect(() => {
        if (event === '') navigate('/create');
    }, []);

    return (
        <div className='event-main'>
            <Container>
                <Row>
                    <Col className='event-parent'>
                        <div className='event-name'>
                            <span className='event-name-img1'>{event && event}</span>
                            <span className='event-name-img2'>{host && host}</span>
                        </div>
                        <div className='event-date-time'>
                            <img className='fill' alt="" src={Fill} />
                            <section className='event-date-time-child'>
                                <span className='date'>{moment(start && start).format('LL')}</span>
                                <span className='datetime'>to {moment(end && end).format('LL')}</span>
                            </section>
                            <img className='arrow' alt="" src={Arrow} />
                        </div>
                        <div className='event-date-time'>
                            <img className='fill' alt="" src={Location} />
                            <section className='event-date-time-child'>
                                <span className='street'>Street name</span>
                                <span className='streetplus'>{location && location}</span>
                            </section>
                            <img className='arrow' alt="" src={Arrow} />
                        </div>
                        <section className='next-btn-parent'>
                            <Button onClick={() => navigate('/create')} className='create-btn' variant="primary" type="submit">Edit Info</Button>
                        </section>
                    </Col>
                    <Col className='cake-parent'>
                        <img className='cake' alt="" src={pic && URL.createObjectURL(pic)} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Event;