import './VideoCard.css';

import React from "react";
import videocardlogo from '../../assets/video-card1.jpg'

export function VideoCard(props){
    return(
    <div className="card video style_2 true">
        <div className="card-zoom">
        <div className="image">
            <div className="wrapper">
                <a className="image play_trailer">
                    <img className="backdrop" src={props.logo}/>
                    <div className="play">
                        <span className="glyphicons_v2 play invert svg">
                        </span>
                    </div>
                </a>
            </div>
        </div>
        </div>
        <div className="content">
            <h2>
                <a>{props.title}</a>
            </h2>
            <h3>{props.description} Trailer</h3>
        </div>
    </div>
    )
}