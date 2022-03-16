import './TheatresTrailer.css';

import React from "react";
import { VideoCard } from './VideoCard';

export function TheatresTrailer(){
    const streamingList = [
        {id:1,title:"The Kashmir Files",description:"Season 1",imageUrl : require('./Images/Theatre/1.jpg')},
        {id:2,title:"Outsiders - Entertainment",description:"Season 1",imageUrl : require('./Images/Theatre/2.jpg')},
        {id:3,title:"Dog - Valentine's Day Trailer ",description:"Season 1",imageUrl : require('./Images/Theatre/3.jpg')},
        {id:4,title:"Gold Official Trailer",description:"Season 1",imageUrl : require('./Images/Theatre/4.jpg')},
        {id:5,title:"After Yang - Official Trailer",description:"Season 1",imageUrl : require('./Images/Theatre/5.jpg')},
        {id:6,title:"Death on the Nile",description:"Season 4",imageUrl : require('./Images/Theatre/6.jpg')},
        {id:7,title:"Uncharted - Final Trailer",description:"Season 1",imageUrl : require('./Images/Theatre/7.jpg')},
        {id:8,title:"The GodFather - 50th Anniversary",description:"Season 1",imageUrl : require('./Images/Theatre/8.jpg')},
        {id:9,title:"Jackass Forever",description:"",imageUrl : require('./Images/Theatre/9.jpg')},
        {id:10,title:"Moonfall - Official Trailer",description:"Season 6",imageUrl : require('./Images/Theatre/10.jpg')},
        {id:11,title:"Blacklight - Official Trailer",description:"Season 1",imageUrl : require('./Images/Theatre/11.jpg')},
        {id:12,title:"The Batman - Trailer",description:"Season 2",imageUrl : require('./Images/Theatre/12.jpg')},
        {id:13,title:"The Weekend Away",description:"Season 4",imageUrl : require('./Images/Theatre/13.jpg')},
        {id:14,title:"Marry Me - Official trailer",description:"",imageUrl : require('./Images/Theatre/14.jpg')},
    ]
    return(
        <div className="theatre">
            {streamingList.map((movie) => <VideoCard key={movie.id} title={movie.title} description={movie.description} logo={movie.imageUrl}/>)}
        </div>
    )
}