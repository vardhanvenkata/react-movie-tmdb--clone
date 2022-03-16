import React from "react";
import { VideoCard } from './VideoCard';

export function TvTrailer(){
    const streamingList = [
        {id:1,title:"Restless - Movie",description:"Season 1",imageUrl : require('./Images/OnTv/1.jpg')},
        {id:2,title:"The Matrix Resurrections",description:"Season 1",imageUrl : require('./Images/OnTv/2.jpg')},
        {id:3,title:"Loop Lapeta - Movie",description:"Season 1",imageUrl : require('./Images/OnTv/3.jpg')},
        {id:4,title:"The Pirates : The Last Royal Treasure",description:"Season 1",imageUrl : require('./Images/OnTv/4.jpg')},
        {id:5,title:"Red Notice -  Movie",description:"Season 1",imageUrl : require('./Images/OnTv/5.jpg')},
        {id:6,title:"The Seven Deadly Sins : Cursed by Light",description:"Season 4",imageUrl : require('./Images/OnTv/6.jpg')},
        {id:7,title:"Encanto - Movie",description:"Season 1",imageUrl : require('./Images/OnTv/7.jpg')},
        {id:8,title:"Texas Chainsaw Massacre",description:"Season 1",imageUrl : require('./Images/OnTv/8.jpg')},
        {id:9,title:"Through My Window",description:"",imageUrl : require('./Images/OnTv/9.jpg')},
        {id:10,title:"The Ice Age Adventures of Buck Wild",description:"Season 6",imageUrl : require('./Images/OnTv/10.jpg')},
        {id:11,title:"Kimi - Adventure Movie",description:"Season 1",imageUrl : require('./Images/OnTv/11.jpg')},
        {id:12,title:"All of Us Are Dead",description:"Season 2",imageUrl : require('./Images/OnTv/12.jpg')},
    ]
    return(
        <>
            {streamingList.map((movie) => <VideoCard key={movie.id} title={movie.title} description={movie.description} logo={movie.imageUrl}/>)}
        </>
    )
}