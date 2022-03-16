import './LeaderBoard.css'

import React from "react";
import logo1 from '../../assets/LeaderBoard/1.jpg';

export function LeaderBoard(){
    return(
        <section className="inner_content leaderboard">
            <div className="column_wrapper">
                <div className="column_wrapper wrap">
                    <div className="column">
                        <div className="column_header">
                            <h2>Leaderboard</h2>
                            <div>
                                <p>
                                    <span className="dot all"></span>
                                    All Time Edits
                                </p>
                                <p>
                                    <span className="dot this_week"></span>
                                    Edits This Week
                                </p>
                            </div>
                        </div>
                        <div className="column_content">
                            <ol className="leaderboard">
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color red">S</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">Samara</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "75%",marginRight : "15px"}}></div>
                                            <h4>2,529,314</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "80%",marginRight : "15px"}}></div>
                                            <h4>10,592</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href="">
                                            <span className="round initials background_color purple">S</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">talestalker</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "20%",marginRight : "15px"}}></div>
                                            <h4>681,211</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "80%",marginRight : "15px"}}></div>
                                            <h4>9,639</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color pink">w</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">wang_peak</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "15%",marginRight : "15px"}}></div>
                                            <h4>8,306</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "70%",marginRight : "15px"}}></div>
                                            <h4>7,216</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color magenta">A</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">Adam</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "15%",marginRight : "15px"}}></div>
                                            <h4>32,576</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "50%",marginRight : "15px"}}></div>
                                            <h4>6,553</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color blue">B</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">bahbugandHum</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "15%",marginRight : "15px"}}></div>
                                            <h4>31,895</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "55%",marginRight : "15px"}}></div>
                                            <h4>153,750</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color orange">S</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">Steve</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "18%",marginRight : "15px"}}></div>
                                            <h4>514,325</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "43%",marginRight : "15px"}}></div>
                                            <h4>5,016</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color pink">M</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">Micky</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge"  style={{width : "15%",marginRight : "15px"}}></div>
                                            <h4>11,994</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge"  style={{width : "47%",marginRight : "15px"}}></div>
                                            <h4>4,511</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color purple">R</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">Raze464</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge" style={{width : "15%",marginRight : "15px"}}></div>
                                            <h4>274,732</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge" style={{width : "52%",marginRight : "15px"}}></div>
                                            <h4>4,095</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color orangered">n</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">nimbretill</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge" style={{width : "40px",marginRight : "15px"}}></div>
                                            <h4>153,750</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge" style={{width : "100px",marginRight : "15px"}}></div>
                                            <h4>153,750</h4>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar">
                                        <a href = "">
                                            <span className="round initials background_color pink">p</span>
                                        </a>
                                    </span>
                                    <div className="data">
                                        <h3>
                                            <a href="">pingu51</a>
                                        </h3>
                                        <div className="meter all">
                                            <div className="gauge" style={{width : "40px",marginRight : "15px"}}></div>
                                            <h4>252,296</h4>
                                        </div>
                                        <div className="meter this_week">
                                            <div className="gauge" style={{width : "100px",marginRight : "15px"}}></div>
                                            <h4>3,962</h4>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}