import * as React from 'react';
import "../../Styles/AppStyles.css";
import { InstagramIcon } from '../Icons/Instagram';
import { EmailIcon } from '../Icons/Email';

// TODO: Consider getting href and text for email from DB.

export const Footer: React.FunctionComponent = () => {
    return (
        <div className="footer__wrapper">
            <div className="footer__upper">
                <div className="footer__social-media">
                    <a href="mailto:info@grcrunning.com" className="footer__social-media-icon">
                        <EmailIcon />
                    </a>
                    <a href="https://www.instagram.com/grc_running/" className="footer__social-media-icon">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <div className="footer__lower">
                <div className="footer__about-links">
                    <a href="/staff" className="footer__about">
                        <span className="footer__about-text">Meet the staff</span>
                    </a>
                    <a href="/our-story" className="footer__about">
                        <span className="footer__about-text">Our mission</span>
                    </a>
                    <a href="/apply" className="footer__about">
                        <span className="footer__about-text">Join the team</span>
                    </a>
                </div>
                <div className="footer__email-wrapper">
                    <a href="mailto:info@grcrunning.com" className="footer__contact">
                        <span className="footer__email">Info@grcrunning.com</span>
                    </a>
                </div>
                <div className="footer__city-location">Washinton, D.C.</div>
            </div>
        </div>
    );
}