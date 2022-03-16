import React from "react";
import { VideoCard } from './VideoCard';

export function RentTrailer(){
    const rentList = [
        {id:1,title:"Free Guy-Movie ",description:"Season 1",imageUrl : require('./Images/ForRent/1.jpg')},
        {id:2,title:"Eternals-Series",description:"Season 1",imageUrl : require('./Images/ForRent/2.jpg')},
        {id:3,title:"Desperate Riders",description:"Season 1",imageUrl : require('./Images/ForRent/3.jpg')},
        {id:4,title:"The Matrix Resurrections",description:"Season 1",imageUrl : require('./Images/ForRent/4.jpg')},
        {id:5,title:"Venom - Movies",description:"Season 1",imageUrl : require('./Images/ForRent/5.jpg')},
        {id:6,title:"Legacies - Series",description:"Season 4",imageUrl : require('./Images/ForRent/6.jpg')},
        {id:7,title:"Resident Evil:Welcome tot Reaccooon City",description:"Season 1",imageUrl : require('./Images/ForRent/7.jpg')},
        {id:8,title:"Ghost Busters - Movie ",description:"Season 1",imageUrl : require('./Images/ForRent/8.jpg')},
        {id:9,title:"The Queen of Flow Movie",description:"",imageUrl : require('./Images/ForRent/9.jpg')},
        {id:10,title:"Clifford the Big Red Dog",description:"Season 6",imageUrl : require('./Images/ForRent/10.jpg')},
        {id:11,title:"Dune - Thriller Series",description:"Season 1",imageUrl : require('./Images/ForRent/11.jpg')},
        {id:12,title:"Shang-Chi and the Legend of the Ten Rings",description:"Season 2",imageUrl : require('./Images/ForRent/12.jpg')},
        {id:13,title:"Ron's Gone Wrong",description:"Season 4",imageUrl : require('./Images/ForRent/13.jpg')},
        {id:14,title:"No Time to Die - Movie ",description:"",imageUrl : require('./Images/ForRent/14.jpg')},
        {id:16,title:"The Suicide Squad - Movie",description:"",imageUrl : require('./Images/ForRent/19.jpg')},
        {id:17,title:"Mortal Kombat - Series",description:"",imageUrl : require('./Images/ForRent/16.jpg')},
        {id:18,title:"Cruella - Thriller Movie",description:"Season 2",imageUrl : require('./Images/ForRent/17.jpg')},
        {id:19,title:"The Boss Baby : Family Business",description:"Season 1",imageUrl : require('./Images/ForRent/18.jpg')},
        {id:20,title:"F9 - Series Adventure",description:"Season 3",imageUrl : require('./Images/ForRent/20.jpg')}

    ]
    return(
        <>
            {rentList.map((movie) => <VideoCard key={movie.id} title={movie.title} description={movie.description} logo={movie.imageUrl}/>)}
        </>
    )
}