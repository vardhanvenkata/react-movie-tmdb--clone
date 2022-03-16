import React from "react";
import { VideoCard } from './VideoCard';

export function StreamingTrailer(){
    const streamingList = [
        {id:1,title:"Restless - Movie",description:"Season 1",imageUrl : require('./Images/1.jpg')},
        {id:2,title:"The Matrix Resurrections",description:"Season 1",imageUrl : require('./Images/2.jpg')},
        {id:3,title:"Loop Lapeta - Movie ",description:"Season 1",imageUrl : require('./Images/3.jpg')},
        {id:4,title:"The Pirates : The Last Royal Treasure",description:"Season 1",imageUrl : require('./Images/4.jpg')},
        {id:5,title:"Red Notice - Movie ",description:"Season 1",imageUrl : require('./Images/5.jpg')},
        {id:6,title:"The Seven Deadly Sins : Cursed by Light",description:"Season 4",imageUrl : require('./Images/6.jpg')},
        {id:7,title:"Encanto - Movie ",description:"Season 1",imageUrl : require('./Images/7.jpg')},
        {id:8,title:"Texas Chainsaw Massacre",description:"Season 1",imageUrl : require('./Images/8.jpg')},
        {id:9,title:"Through My Window",description:"",imageUrl : require('./Images/9.jpg')},
        {id:10,title:"The Ice Age Adventures of Buck Wild",description:"Season 6",imageUrl : require('./Images/10.jpg')},
        {id:11,title:"GhostRider - Movie ",description:"Season 1",imageUrl : require('./Images/11.jpg')},
        {id:12,title:"All of Us Are Dead",description:"Season 2",imageUrl : require('./Images/12.jpg')},
        {id:13,title:"The Weekend Away",description:"Season 4",imageUrl : require('./Images/13.jpg')},
        {id:14,title:"Brazen - Romatic Movie",description:"",imageUrl : require('./Images/14.jpg')},
        {id:15,title:"West Side Story - FeelGood Movie",description:"",imageUrl : require('./Images/15.jpg')},
        {id:16,title:"Hotel Transylvania : Tranformania ",description:"",imageUrl : require('./Images/16.jpg')},
        {id:17,title:"Legacies - Thriller Movie",description:"Season 2",imageUrl : require('./Images/17.jpg')},
        {id:18,title:"Game of Thrones",description:"Season 1",imageUrl : require('./Images/18.jpg')},
        {id:19,title:"NCIS - Adventure,Suspense Movie",description:"Season 5",imageUrl : require('./Images/19.jpg')},
        {id:20,title:"The Walking Dead",description:"Season 3",imageUrl : require('./Images/20.jpg')}
    ]
    return(
        <>
            {streamingList.map((movie) => <VideoCard key={movie.id} title={movie.title} description={movie.description} logo={movie.imageUrl}/>)}
        </>
    )
}