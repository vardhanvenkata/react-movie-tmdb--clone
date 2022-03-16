import { MovieCard } from '../MovieCard/MovieCard';
import React from "react";

export function Streaming(){
    const streamingList = [
        {id:1,title:"Restless",year:"25 Feb 2022",percent:"59",imageUrl : require('../../assets/Card-Images/Popular/Streaming/restless.jpg'),pathcolor : "#c2d60b"},
        {id:2,title:"The Matrix Resurrections",year:"16 Dec 2021",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/matrix.jpg'),pathcolor : "#74de66"},
        {id:3,title:"Loop Lapeta",year:"04 Feb 2022",percent:"63",imageUrl : require('../../assets/Card-Images/Popular/Streaming/loop.jpg'),pathcolor : "#74de66"},
        {id:4,title:"The Pirates : The Last Royal Treasure",year:"26 Jan 2022",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/pirates.jpg'),pathcolor : "#74de66"},
        {id:5,title:"Red Notice",year:"04 Nov 2021",percent:"88",imageUrl : require('../../assets/Card-Images/Popular/Streaming/rednotice.jpg'),pathcolor : "#74de66"},
        {id:6,title:"The Seven Deadly Sins : Cursed by Light",year:"02 Jul 2021",percent:"77",imageUrl : require('../../assets/Card-Images/Popular/Streaming/sevensins.jpg'),pathcolor : "#c2d60b"},
        {id:7,title:"Encanto",year:"24 Nov 2021",percent:"70",imageUrl : require('../../assets/Card-Images/Popular/Streaming/encanto.jpg'),pathcolor : "#74de66"},
        {id:8,title:"Texas Chainsaw Massacre",year:"18 Feb 2022",percent:"47",imageUrl : require('../../assets/Card-Images/Popular/Streaming/texas.jpg'),pathcolor : "#c2d60b"},
        {id:9,title:"Through My Window",year:"04 Feb 2022",percent:"80",imageUrl : require('../../assets/Card-Images/Popular/Streaming/through.jpg'),pathcolor : "#74de66"},
        {id:10,title:"The Ice Age Adventures of Buck Wild",year:"28 Jan 2022",percent:"90",imageUrl : require('../../assets/Card-Images/Popular/Streaming/iceage.jpg'),pathcolor : "#c2d60b"},
        {id:11,title:"Kimi",year:"10 Feb 2022",percent:"77",imageUrl : require('../../assets/Card-Images/Popular/Streaming/kimi.jpg'),pathcolor : "#74de66"},
        {id:12,title:"All of Us Are Dead",year:"28 Jan 2022",percent:"71",imageUrl : require('../../assets/Card-Images/Popular/Streaming/allofus.jpg')},
        {id:13,title:"The Weekend Away",year:"03 Mar 2022",percent:"80",imageUrl : require('../../assets/Card-Images/Popular/Streaming/weekend.jpg'),pathcolor : "#74de66"},
        {id:14,title:"Brazen",year:"13 Jan 2022",percent:"82",imageUrl : require('../../assets/Card-Images/Popular/Streaming/brazen.jpg'),pathcolor : "#74de66"},
        {id:15,title:"West Side Story",year:"08 Dec 2021",percent:"80",imageUrl : require('../../assets/Card-Images/Popular/Streaming/west.jpg')},
        {id:16,title:"Hotel Transylvania : Tranformania ",year:"25 Feb 2022",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/hotel.jpg'),pathcolor : "#74de66"},
        {id:17,title:"Legacies",year:"25 Oct 2018",percent:"85",imageUrl : require('../../assets/Card-Images/Popular/Streaming/legacies.jpg')},
        {id:18,title:"Game of Thrones",year:"17 Apr 2011",percent:"84",imageUrl : require('../../assets/Card-Images/Popular/Streaming/got.jpg')},
        {id:19,title:"NCIS",year:" 23 Sep 2003",percent:"76",imageUrl : require('../../assets/Card-Images/Popular/Streaming/ncis.jpg')},
        {id:20,title:"The Walking Dead",year:"21 Oct 2010",percent:"81",imageUrl : require('../../assets/Card-Images/Popular/Streaming/walking.jpg'),pathcolor : "#c2d60b"}
    ]
    return(
        <>
            {streamingList.map((movie) => <MovieCard key={movie.id} title={movie.title} year={movie.year} percent={movie.percent} logo={movie.imageUrl} pathcolor={movie.pathcolor}/>)}
        </>
    )
}