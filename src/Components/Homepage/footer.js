import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    For any queries, please input your email address. Our team will get back to you pretty soon.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </ section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='https://www.instagram.com/kundanmergu0704/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='https://www.youtube.com/channel/UCksuSxkZi6WHSkkReawmWBQ'>Youtube</Link>
                        <Link to='/'>Twitter</Link> 
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <i class='fab fa-typo3' />
                        Gamehub Central
                    </div>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/kundanmergu0704/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='https://www.youtube.com/channel/UCksuSxkZi6WHSkkReawmWBQ'
                            target='_blank'
                            aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer