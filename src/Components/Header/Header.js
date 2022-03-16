import './Header.css';

import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import {FiSearch} from 'react-icons/fi';
import SideBar1 from './SideBar/SideBar1';
import User from './User/User';
import footerlogo from '../../assets/footer-image.svg';
import logo from '../../assets/title_moviedb.svg';

export const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const[popupMovies,setPopUpMovies]=useState(false);
    const showPopUpMovies = () => setPopUpMovies(!popupMovies);
    const[popupTv,setPopUpTv]=useState(false);
    const showPopUpTv = () => setPopUpTv(!popupTv);
    const[popupPeople,setPopUpPeople]=useState(false);
    const showPopUpPeople = () => setPopUpPeople(!popupPeople);
    const[popupMore,setPopUpMore]=useState(false);
    const showPopUpMore = () => setPopUpMore(!popupMore);
    const[popupAddMore,setPopUpAddMore]=useState(false);
    const showPopUpAddMore = () => setPopUpAddMore(!popupAddMore);
    const searchLogoStyle = {
        color:"#03bafc",
        width:"30px",
        height:"20px"
    }
    return(
        <div className='header-wrapper'>
        <header className="header">
           <div className="content">
                <div className="sub_media">
                    <div className="nav_wrapper">
                        <a className="logo">
                            <img src={logo} alt="The Movie Database (TMDB)" width="154" height="20"></img>
                        </a>
                        <ul className="dropdown_menu">
                            <li>
                                <a className="no_click" 
                                onMouseEnter={showPopUpMovies}
                                onMouseLeave={showPopUpMovies}>Movies</a>
                                {popupMovies ?
                                    <div className="user-popup-movies show">
                                    <ul>
                                        <li>
                                            <a href="/popular">Popular</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/now-playing">Now Playing</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/upcoming">Upcoming</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/top-rated">Top Rated</a>
                                        </li>
                                    </ul>
                                </div>:null }
                            </li>
                            <li>
                                <a className='no_click' 
                                onMouseEnter={showPopUpTv}
                                onMouseLeave={showPopUpTv}>TV Shows</a>
                                {popupTv ?
                                    <div className="user-popup-tv show">
                                    <ul>
                                        <li>
                                            <a href="/popular">Popular</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/airing-today">Airing Today</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/on-tv">On Tv</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/top-rated">Top Rated</a>
                                        </li>
                                    </ul>
                                </div>:null }
                            </li>
                            <li>
                                <a className='no_click'
                                onMouseEnter={showPopUpPeople}
                                onMouseLeave={showPopUpPeople}>People</a>
                                {popupPeople ?
                                    <div className="user-popup-people show">
                                    <ul>
                                        <li>
                                            <a href="/popular">Popular People</a>
                                        </li>
                                    </ul>
                                </div>:null }
                            </li>
                            <li>
                                <a className='no_click' 
                                onMouseEnter={showPopUpMore}
                                onMouseLeave={showPopUpMore}>More</a>
                                {popupMore ?
                                    <div className="user-popup-more show">
                                    <ul>
                                        <li>
                                            <a href="/discussions">Discussions</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/leader-board">Leader Board</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/support">Support</a>
                                        </li>
                                        <hr/>
                                        <li>
                                            <a href="/api">API</a>
                                        </li>
                                    </ul>
                                </div>:null }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-1'>
                    <ul className="primary">
                        <li className="glyph new_buttons">
                            <a className="new_icone no_click" onClick={showPopUpAddMore}>
                                <span className="glyphicons_v2 plus white"></span>
                                {popupAddMore?
                                    <div className="user-popup-addmore show">
                                        <p>Can't find a movie or TV show? Login to create it.</p>
                                    </div>
                                    :
                                    null}
                                
                            </a>
                        </li>
                        <li className="translate">
                            <div className='en'>en</div>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/signup">Join TMDB</a>
                        </li>
                        <li className="glyph search_buttons">
                            <a className='search' href="/search">
                                <span className="glyphicons_v2 search blue"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div className="header-responsive">
                <div className="left-content">
                    <a className="list-logo" onClick={showSidebar}>
                        <BrowserRouter>
                        <SideBar1/>
                        </BrowserRouter>
                    </a>
                </div>        
                <div className="center-content">   
                    <a className="logo">
                        <img src={footerlogo} alt="The Movie Database (TMDB)" width="85" height="40"></img>
                    </a>
                </div>
                <div className="right-content">
                    <div className="user-logo wrapper">
                        <a className="user-logo">
                            <BrowserRouter>
                            <User/>
                            </BrowserRouter>
                        </a>
                    </div>
                    &nbsp;&nbsp;
                    <div className="search-wrapper">
                        <a className='search' href="/search">
                            <FiSearch style={searchLogoStyle}/>
                        </a>
                    </div>
                </div>
        </div>
        </div> 
    )
}
