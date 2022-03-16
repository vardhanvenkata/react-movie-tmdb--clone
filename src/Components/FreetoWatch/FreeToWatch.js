import './FreeToWatch.css';

import React, { useState } from "react";

import { FreeTv } from './FreeTv';
import { Movie } from './Movie';

export function FreeToWatch  (){

    const[shouldRender,setShouldRender]=useState("tv");
    const handleChange = (e) => {
        setShouldRender(e.target.value);
    };
    const[anchorNameStreaming,setAnchorNameStreaming] = useState("anchor");
    const[anchorNameTv,setAnchorNameTv] = useState("anchor tab-selected");
   
    return(
        <section className="inner_content no_pad free-watch">
            <div className="column_wrapper">
                <div className="content_wrapper no_bottom_pad wrap">
                    <div className="column">
                        <div className="column_header">
                            <h2>Free to Watch</h2>
                            <div className="selector_wrap">
                                <div className="selector">
                                    <div className={anchorNameStreaming}>
                                        <h3>
                                            <a className="no_click"  onClick={()=> {setShouldRender("streaming");setAnchorNameStreaming("anchor tab-selected");setAnchorNameTv("anchor ");}}>
                                                Movies
                                                <span className="glyphicons_v2 chevron-down"></span> 
                                            </a>
                                        </h3>
                                        {/* //style="left: 191.297px; width:98.0312px;" */}
                                        <div className="background" ></div>
                                    </div>
                                    <div className={anchorNameTv}>
                                        <h3>
                                            <a className="no_click"  onClick={()=>{setShouldRender("tv");setAnchorNameStreaming("anchor");setAnchorNameTv("anchor tab-selected");}}>
                                                TV
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
                                {shouldRender==="streaming" ? <Movie/> : <FreeTv/> } 
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