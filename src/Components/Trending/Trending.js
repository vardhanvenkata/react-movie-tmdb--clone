import './Trending.css';

import React, { useState } from "react";

import { Streaming } from '../MostPopular/Streaming';
import { Tv } from '../MostPopular/Tv';

export function Trending  (){

    const[shouldRender,setShouldRender]=useState("streaming");
    const handleChange = (e) => {
        setShouldRender(e.target.value);
    };
    const[anchorNameStreaming,setAnchorNameStreaming] = useState("anchor tab-selected");
    const[anchorNameTv,setAnchorNameTv] = useState("anchor");
   
    return(
        <section className="inner_content no_pad trending">
            <div className="column_wrapper">
                <div className="content_wrapper no_bottom_pad wrap">
                    <div className="column">
                        <div className="column_header">
                            <h2>Trending</h2>
                            <div className="selector_wrap">
                                <div className="selector">
                                    <div className={anchorNameStreaming}>
                                        <h3>
                                            <a className="no_click"  onClick={()=> {setShouldRender("streaming");setAnchorNameStreaming("anchor tab-selected");setAnchorNameTv("anchor ");}}>
                                                Today
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>
                                        {/* //style="left: 191.297px; width:98.0312px;" */}
                                        <div className="background" ></div>
                                    </div>
                                    <div className={anchorNameTv}>
                                        <h3>
                                            <a className="no_click"  onClick={()=>{setShouldRender("tv");setAnchorNameStreaming("anchor");setAnchorNameTv("anchor tab-selected");}}>
                                                This Week 
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>
                                        <div className="background"></div>
                                    </div>        
                                </div> 
                                <div className="hidden-section">
                                    <select className="selected-value" value={shouldRender} onChange={handleChange}>
                                        <option value="streaming">Movies</option>
                                        <option value="tv">Tv</option>
                                    </select>
                                </div>   
                            </div>
                        </div>
                        <div className="media discover scroller_wrap should_fade is_hidden">
                            <div className="column_content flex scroller loaded">
                                {shouldRender==="streaming" ? <Streaming className="card" /> : <Tv className="card" /> } 
                            </div>
                            <div className="card spacer"></div>
                        </div>    
                    </div>    
                </div>    
            </div>    
        </section>
    
    )
}

const styles = {

}