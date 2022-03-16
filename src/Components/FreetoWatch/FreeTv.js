import { MovieCard } from '../MovieCard/MovieCard';
import React from 'react';

export function FreeTv(){
    const tvList = [
        {id:1,title:"Goblin",year:"02 Dec 2016",percent:"88",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/goblin.jpg')},
        {id:2,title:"Mayans M.C.",year:"04 Sep 2018",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/mayans.jpg')},
        {id:3,title:"Baywatch",year:"23 Apr 1989",percent:"57",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/baywatch.jpg')},
        {id:4,title:"Ray Donovan",year:"30 Jun 2013",percent:"75",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/ray.jpg')},
        {id:5,title:"Kaguya-sama : Love is War",year:"12 Jan 2019",percent:"88",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/kaguya.jpg')},
        {id:6,title:"Daydreamer",year:"26 Jun 2018",percent:"77",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/day.jpg')},
        {id:7,title:"Gold Rush",year:"03 Dec 2010",percent:"70",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/gold.jpg')},
        {id:8,title:"Wagle Ki Duniya",year:"08 Feb 2021",percent:"47",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/wagle.jpg')},
        {id:9,title:"The Queen of Flow",year:"12 Jun 2018",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/queen.jpg')},
        {id:10,title:"Devon Ke Dev..Mahadev",year:"18 Dec 2011",percent:"90",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/devon.jpg')},
        {id:11,title:"Doom Patrol",year:"15 Feb 2019",percent:"77",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/doom.jpg')},
        {id:12,title:"2 Broke Girls",year:"19 Sep 2011",percent:"71",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/2broke.jpg')},
        {id:13,title:"FBI",year:"25 Sep 2018",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/fbi.jpg')},
        {id:14,title:"Mayday",year:"03 Sep 2003",percent:"82",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/mayday.jpg')},
        {id:15,title:"The Expanse",year:"14 Dec 2015",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/expanse.jpg')},
        {id:16,title:"Shark Tank",year:"09 Aug 2009",percent:"68",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/shark.jpg')},
        {id:17,title:"SEAL Team",year:"27 Sep 2017",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/seal.jpg')},
        {id:18,title:"Parks and Recreation",year:"09 Apr 2009",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/parks.jpg')},
        {id:19,title:"Jojo's Bizarre Adcenture",year:"06 Oct 2012",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/jojo.jpg')},
        {id:20,title:"My Dress-Up Darling",year:"09 Jan 2022",percent:"83",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/dress.jpg')}
    ]
    return(
        <>
            {tvList.map((movie) => <MovieCard key={movie.id} title={movie.title} year={movie.year} percent={movie.percent} logo={movie.imageUrl}/>)}
        </>
    )
}