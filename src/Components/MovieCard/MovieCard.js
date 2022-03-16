import './MovieCard.css';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import React from "react";

export function MovieCard(props) {
    return (
        <div className="card style_1">
            <div className="image">
                <div className="wrapper">
                    <a className="image" title={props.title}>
                        <img className="poster" src={props.logo} width="120px" height="120px"/>    
                    </a>
                </div>
                <div className="options">
                    <a className="no_click" href="#">
                        <div className="glyphicons_v2 circle-more white"></div>    
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="consensus tight">
                    <div className="outer_ring">
                    <CircularProgressbar 
                        value={props.percent} 
                        text={`${props.percent}%`} 
                        background
                        strokeWidth={6}
                        backgroundPadding={10}
                        styles={buildStyles({
                        textSize:'30px',
                        textColor:'#fff',
                        backgroundColor:'rgba(3,37,65,1)',
                        pathColor:`${props.pathcolor}`,
                        trailColor:"transparent", 
                    })}/>;
                    </div>    
                </div>
                <h2>
                    <a title={props.title}>{props.title}</a>
                </h2>
                <p>{props.year}</p>
            </div>    
        </div>
    )
}