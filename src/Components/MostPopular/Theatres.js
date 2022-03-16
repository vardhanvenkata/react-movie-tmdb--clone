import { MovieCard } from '../MovieCard/MovieCard';
import React from "react";

export function Theatres(){
    const theatreList = [
        {id:1,title:"Fistful of Vengeance",year:"17 Feb 2022",percent:"59",imageUrl : require('../../assets/Card-Images/Popular/Streaming/fistful.jpg')},
        {id:2,title:"Reacher",year:"03 Feb 2022",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/reacher.jpg'),pathcolor : "#c2d60b"},
        {id:3,title:"Juvenile Justice",year:"25 Feb 2022",percent:"63",imageUrl : require('../../assets/Card-Images/Popular/Streaming/juvenile.jpg')},
        {id:4,title:"Rick and Morty",year:"02 Dec 2013",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/rick.jpg')},
        {id:5,title:"Vikings",year:"03 Mar 2013",percent:"88",imageUrl : require('../../assets/Card-Images/Popular/Streaming/vikings.jpg'),pathcolor : "#c2d60b"},
        {id:6,title:"Grey's Anatomy",year:"27 Mar 2005",percent:"77",imageUrl : require('../../assets/Card-Images/Popular/Streaming/grey.jpg')},
        {id:7,title:"Sin senos si hay paraiso",year:"19 Jul 2016",percent:"70",imageUrl : require('../../assets/Card-Images/Popular/Streaming/sin.jpg'),pathcolor : "#c2d60b"},
        {id:8,title:"Venom : Let There Be Carnage",year:"30 Sep 2021",percent:"47",imageUrl : require('../../assets/Card-Images/Popular/Streaming/venom.jpg'),pathcolor : "#c2d60b"},
        {id:9,title:"S.W.A.T",year:"02 Nov 2017",percent:"80",imageUrl : require('../../assets/Card-Images/Popular/Streaming/swat.jpg')},
        {id:10,title:"The Blacklist",year:"23 Sep 2013",percent:"90",imageUrl : require('../../assets/Card-Images/Popular/Streaming/blacklist.jpg'),pathcolor : "#c2d60b"},
        {id:11,title:"Euphoria",year:"16 Jun 2019",percent:"77",imageUrl : require('../../assets/Card-Images/Popular/Streaming/euphoria.jpg'),pathcolor : "#c2d60b"},
        {id:12,title:"The Book of Boba Fett",year:"29 Dec 2021",percent:"71",imageUrl : require('../../assets/Card-Images/Popular/Streaming/boba-fett.jpg'),pathcolor : "#c2d60b"},
        {id:13,title:"Dark Desire",year:"15 Jul 2020",percent:"80",imageUrl : require('../../assets/Card-Images/Popular/Streaming/darkdesire.jpg'),pathcolor : "#c2d60b"},
        {id:14,title:"The Simpsons",year:"17 Dec 1989",percent:"82",imageUrl : require('../../assets/Card-Images/Popular/Streaming/simpsons.jpg')},
        {id:15,title:"Peaky Blinders",year:"12 Sep 2013",percent:"80",imageUrl : require('../../assets/Card-Images/Popular/Streaming/peaky.jpg')},
        {id:16,title:"The Queen of Flow",year:"12 Jun 2018",percent:"68",imageUrl : require('../../assets/Card-Images/Popular/Streaming/queen.jpg')},
        {id:17,title:"Eternals",year:"03 Nov 2021",percent:"85",imageUrl : require('../../assets/Card-Images/Popular/Streaming/eternals.jpg'),pathcolor : "#c2d60b"},
        {id:18,title:"Shang-Chi and the Legend of the Ten Rings",year:"01 Sep 2021",percent:"84",imageUrl : require('../../assets/Card-Images/Popular/Streaming/shangchi.jpg')},
        {id:19,title:"The Flash",year:" 07 Oct 2014",percent:"76",imageUrl : require('../../assets/Card-Images/Popular/Streaming/flash.jpg'),pathcolor : "#c2d60b"},
        {id:20,title:"The House",year:"14 Jan 2022",percent:"81",imageUrl : require('../../assets/Card-Images/Popular/Streaming/thehouse.jpg')}
    ]
    return(
        <>
            {theatreList.map((movie) => <MovieCard key={movie.id} title={movie.title} year={movie.year} percent={movie.percent} logo={movie.imageUrl} pathcolor={movie.pathcolor}/>)} 
        </> 
    )
}