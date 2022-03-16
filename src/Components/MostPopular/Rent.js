import { MovieCard } from '../MovieCard/MovieCard';
import React from "react";

export function Rent(){
    const rentList = [
        {id:1,title:"The Walking Dead",year:"21 Oct 2010",percent:"81",imageUrl : require('../../assets/Card-Images/Popular/Streaming/walking.jpg')},
        {id:2,title:"Mayans M.C.",year:"04 Sep 2018",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/mayans.jpg')},
        {id:3,title:"Devon Ke Dev..Mahadev",year:"18 Dec 2011",percent:"90",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/devon.jpg')},
        {id:4,title:"The Ice Age Adventures of Buck Wild",year:"28 Jan 2022",percent:"90",imageUrl : require('../../assets/Card-Images/Popular/Streaming/iceage.jpg')},
        {id:5,title:"Red Notice",year:"04 Nov 2021",percent:"88",imageUrl : require('../../assets/Card-Images/Popular/Streaming/rednotice.jpg')},
        {id:6,title:"The Seven Deadly Sins : Cursed by Light",year:"02 Jul 2021",percent:"77",imageUrl : require('../../assets/Card-Images/Popular/Streaming/sevensins.jpg')},
        {id:7,title:"Gold Rush",year:"03 Dec 2010",percent:"70",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/gold.jpg')},
        {id:8,title:"Wagle Ki Duniya",year:"08 Feb 2021",percent:"47",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/wagle.jpg')},
        {id:9,title:"The Queen of Flow",year:"12 Jun 2018",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/queen.jpg')},
        {id:10,title:"Peter Pan",year:"05 Feb 1953",percent:"72",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/peterpan.jpg')},
        {id:11,title:"Hercules",year:"20 Jun 1997",percent:"75",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/hercules.jpg')},
        {id:12,title:"Cell 211",year:"06 Nov 2009",percent:"75",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/cell211.jpg')},
        {id:13,title:"Cindrella",year:"12 Mar 2015",percent:"68",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/cinderella.jpg')},
        {id:14,title:"Attack on Titan",year:"01 Aug 2015",percent:"59",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/attackontitan.jpg')},
        {id:16,title:"Hotel Transylvania : Tranformania ",year:"25 Feb 2022",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/hotel.jpg')},
        {id:17,title:"Legacies",year:"25 Oct 2018",percent:"85",imageUrl : require('../../assets/Card-Images/Popular/Streaming/legacies.jpg')},
        {id:18,title:"Game of Thrones",year:"17 Apr 2011",percent:"84",imageUrl : require('../../assets/Card-Images/Popular/Streaming/got.jpg')},
        {id:19,title:"Jojo's Bizarre Adcenture",year:"06 Oct 2012",percent:"80",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/jojo.jpg')},
        {id:20,title:"My Dress-Up Darling",year:"09 Jan 2022",percent:"83",imageUrl : require('../../assets/Card-Images/Free-to-watch/Tv/dress.jpg')}

    ]
    return(
        <>
            {rentList.map((movie) => <MovieCard key={movie.id} title={movie.title} year={movie.year} percent={movie.percent} logo={movie.imageUrl}/>)}
        </>
    )
}