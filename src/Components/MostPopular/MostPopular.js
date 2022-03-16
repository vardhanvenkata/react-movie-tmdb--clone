import './MostPopular.css';

import React, { useState } from "react";

import { MovieCard } from '../MovieCard/MovieCard';
import { Rent } from './Rent';
import { Streaming } from './Streaming';
import { Theatres } from './Theatres';
import { Tv } from './Tv';

export function MostPopular  (){

    const[shouldRender,setShouldRender]=useState("streaming");
    const handleChange = (e) => {
        setShouldRender(e.target.value);
    };
    const[anchorNameStreaming,setAnchorNameStreaming] = useState("anchor tab-selected");
    const[anchorNameTv,setAnchorNameTv] = useState("anchor");
    const[anchorNameRent,setAnchorNameRent] = useState("anchor");
    const[anchorNameTheatres,setAnchorNameTheatres] = useState("anchor");
   
    return(
        <section className="inner_content no_pad most-popular">
            <div className="column_wrapper">
                <div className="content_wrapper no_bottom_pad wrap">
                    <div className="column">
                        <div className="column_header">
                            <h2>What's Popular</h2>
                            <div className="selector_wrap">
                                <div className="selector">
                                    <div className={anchorNameStreaming}>
                                        <h3>
                                            <a  className="no_click"  onClick={()=> {setShouldRender("streaming");setAnchorNameStreaming("anchor tab-selected");setAnchorNameTv("anchor ");setAnchorNameRent("anchor");setAnchorNameTheatres("anchor")}}>
                                                Streaming
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>
                                        {/* //style="left: 191.297px; width:98.0312px;" */}
                                        <div className="background" ></div>
                                    </div>
                                    <div className={anchorNameTv}>
                                        <h3>
                                            <a  className="no_click"  onClick={()=>{setShouldRender("tv");setAnchorNameStreaming("anchor");setAnchorNameTv("anchor tab-selected");setAnchorNameRent("anchor");setAnchorNameTheatres("anchor")}}>
                                                On TV
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>
                                        <div className="background"></div>
                                    </div>  
                                    <div className={anchorNameRent} >
                                        <h3>
                                            <a  className="no_click"  onClick={()=>{setShouldRender("rent");setAnchorNameStreaming("anchor");setAnchorNameTv("anchor ");setAnchorNameRent("anchor tab-selected");setAnchorNameTheatres("anchor")}}>
                                                For Rent
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>                    
                                    </div>  
                                    <div className={anchorNameTheatres}>
                                        <h3>
                                            <a  className="no_click"  onClick={ () => { setShouldRender("theatre");setAnchorNameStreaming("anchor");setAnchorNameTv("anchor ");setAnchorNameRent("anchor");setAnchorNameTheatres("anchor tab-selected")}}>
                                                In Theatres
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>
                                    </div>      
                                </div> 
                                <div className="hidden-section">
                                    <select className="selected-value" value={shouldRender} onChange={handleChange}>
                                        <option value="streaming">Streaming</option>
                                        <option value="tv">On Tv</option>
                                        <option value="rent">For Rent</option>
                                        <option value="theatre">Theatres</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="media discover scroller_wrap should_fade is_hidden">
                            <div className="column_content flex scroller loaded">
                                <div className="card-wrapper">
                                    {shouldRender==="streaming" ? <Streaming/> : shouldRender==="tv" ? <Tv/> : shouldRender==="rent" ? <Rent/> :shouldRender==="theatre" ? <Theatres/>: <h1>No Movies Found</h1>} 
                                </div>
                            </div>
                            <div className="card spacer"></div>
                        </div>    
                    </div>    
                </div>    
            </div>
                
        </section>
    
    )
}