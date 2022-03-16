import './Sidebar.css'

import {React, useState} from 'react';

const  Sidebar = ()=> {
    const[sidebar,setSideBar]=useState(false);
    const showSidebar = () => setSideBar(!sidebar);
    return(
        <div className="sidebar">
            <ul className="primary">
                <li>
                    <a className="no_click">Movies</a>
                    <ul className="sub_menu movie hide">
                        <li>
                            <a>Popular</a>
                        </li>
                        <li>
                            <a>Top Rated</a>
                        </li>
                        <li>
                            <a>Upcoming</a>
                        </li>
                        <li>
                            <a>Now Playing</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="no_click">Tv</a>
                    <ul className="sub_menu tv hide">
                        <li>
                            <a>Popular</a>
                        </li>
                        <li>
                            <a>Top Rated</a>
                        </li>
                        <li>
                            <a>On Tv</a>
                        </li>
                        <li>
                            <a>Airing Today</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="no_click">People</a>
                    <ul className="sub_menu person hide">
                        <li>
                            <a>Popular People</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="small">
                <li>
                    <a>Contribution Bible</a>
                </li>
                <li>
                    <a>Apps</a>
                </li>
                <li>
                    <a>Discussions</a>
                </li>
                <li>
                    <a>Leader Board</a>
                </li>
                <li>
                    <a>Contribute</a>
                </li>
                <li>
                    <a>API</a>
                </li>
                <li>
                    <a>Support</a>
                </li>
                <li>
                    <a>About</a>
                </li>
            </ul>
            <ul className="small">
                <li>
                    <a>Login</a>
                </li>
            </ul>
        </div>
    )
} 