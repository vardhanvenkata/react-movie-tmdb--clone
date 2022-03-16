import './Footer.css';

import React from 'react';
import logo from '../../assets/footer-image.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <nav>
                <div className="join">
                    <img src={logo}
                        alt="The Movie Database(TMDB)" width="130" height="100"/>
                    <a className="rounded" href="signup">Join the Community</a>
                </div>
                <div>
                    <h3>The Basics</h3>
                    <ul>
                        <li><a href="/about">About TMDB</a></li>
                        <li><a href="/about/contact-us">Contact Us</a></li>
                        <li><a href="/about/forum">Support Forums</a></li>
                        <li><a href="/documentation/api">API</a></li>
                        <li><a href="/status">System Status</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Get Involved</h3>
                    <ul>
                        <li><a href="/bible">Contribution Bible</a></li>
                        <li><a href="/movie/new">Add New Movie</a></li>
                        <li><a href="/tv/new">Add New TV Show</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li><a href="/guidelines">Guidelines</a></li>
                        <li><a href="/discuss">Discussions</a></li>
                        <li><a href="/leaderboard">Leaderboard</a></li>
                        <li><a href="/twitter">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/website/terms-of-use">Terms of Use</a></li>
                        <li><a href="/api/terms-of-use">API Terms of Use</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
            </nav>

        </footer>
    )

}