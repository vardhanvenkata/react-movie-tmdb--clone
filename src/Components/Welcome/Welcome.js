import './Welcome.css'

import React from "react";

export const Welcome = () =>{
    return(
        <section className="inner_content new_index">
            <div id="media_v4" className="media discover">
                <div className="column_wrapper">
                    <div className="content_wrapper wrap">
                        <div className="title">
                            <h2>Welcome.</h2>
                            <h3>Millions of movies, TV shows and people to discover.
                                Explore now.
                            </h3>    
                        </div>    
                        <div className="search">
                            <form id="inner_search_form" action="/search" method="get">
                                <label>
                                    <input dir="auto" id="inner_search_v4" name="query" type="text"
                                        tabIndex="1" autoCorrect="off" autoComplete="off" spellCheck="false"
                                        placeholder="Search for a movie, tv showm person....."/>    
                                </label>    
                                <input type="submit" value="Search"></input>
                            </form>
                        </div>
                    </div>    
                </div>    
            </div>    
        </section>

    )
}