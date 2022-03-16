import './JoinUs.css';

import React from "react";

export const JoinUs = () =>{
    return(
        <section className="join-us-community">
            <div className="column-wrapper">
                <div className="content-wrapper wrap">
                    <div className="column">
                        <div className="column-header">
                            <h2>Join Today</h2>    
                        </div>
                        <div className="column-content flex">
                            <div className="column">
                                <p>
                                Get access to maintain your own <em>custom personal lists</em>, 
                                <em>track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless 
                                if it's in theatres, on TV or available on popular streaming services like Netflix, 
                                Hotstar, and Amazon Prime Video.
                                </p>
                                <p className="button">
                                <a href="/signup" className="rounded background_color border_color purple">Sign Up</a>
                                </p>
                            </div>
                            <div className="column">
                                <ul>
                                    <li>Enjoy TMDB ad free</li>
                                    <li>Maintain a personal watchlist</li>
                                    <li>Filter by your subscribed streaming services and find something to watch</li>
                                    <li>Log the movies and TV shows you've seen</li>
                                    <li>Build custom lists</li>
                                    <li>Contribute to and improve our database</li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    )
}