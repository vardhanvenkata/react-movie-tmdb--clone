import { MovieCard } from "../MovieCard/MovieCard";
import React from "react";

export function Movie(){
    const movies = [
        {id:1,title:"Mulan",year:"18 Jun 1998",percent:"79",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/mulan.jpg')},
        {id:2,title:"Train to Busan",year:"20 Jul 2016",percent:"78",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/traintobusan.jpg')},
        {id:3,title:"The lion king",year:"23 Jun 199",percent:"83",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/thelionking.jpg')},
        {id:4,title:"Texas Chainsaw",year:"03 Jan 2013",percent:"55",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/texaschainsaw.jpg')},
        {id:5,title:"Law Citizen",year:"15 oct 2009",percent:"73",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/lawcitizen.jpg')},
        {id:6,title:"Bad  Boys for life",year:"15 Jan 2020",percent:"72",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/badboysforlife.jpg')},
        {id:7,title:"The Piligrim's Progress",year:"18 Apr 2019",percent:"79",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/thepiligrims.jpg')},
        {id:8,title:"The Expendables",year:"03 Aug 2010",percent:"62",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/theexpendables.jpg')},
        {id:9,title:"Jumanji: The Next Level",year:"04 Dec 2019",percent:"70",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/jumanji.jpg')},
        {id:10,title:"Peter Pan",year:"05 Feb 1953",percent:"72",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/peterpan.jpg')},
        {id:11,title:"Hercules",year:"20 Jun 1997",percent:"75",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/hercules.jpg')},
        {id:12,title:"Cell 211",year:"06 Nov 2009",percent:"75",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/cell211.jpg')},
        {id:13,title:"Cindrella",year:"12 Mar 2015",percent:"68",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/cinderella.jpg')},
        {id:14,title:"Attack on Titan",year:"01 Aug 2015",percent:"59",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/attackontitan.jpg')},
        {id:15,title:"Black Water : Abyss",year:"9 Jul 2020",percent:"51",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/blackwater.jpg')},
        {id:16,title:"Universal Soldier Regeneration",year:" 01 Oct 2009",percent:"56",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/universalsoldier.jpg')},
        {id:17,title:"Crank:High Voltage",year:"16  Apr 2009",percent:"60",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/crank.jpg')},
        {id:18,title:"Cinderella",year:"22 Feb 1950",percent:"70",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/cinderella1.jpg')},
        {id:19,title:"The Scientist",year:"21 Sep 2020",percent:"64",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/thescientist.jpg')},
        {id:20,title:"Wild Card",year:"14 Jan 2015",percent:"56",imageUrl : require('../../assets/Card-Images/Free-to-watch/Movies/wildcard.jpg')}
    ]
    return(
        <> 
            {movies.map((movie) => <MovieCard key={movie.id} title={movie.title} year={movie.year} percent={movie.percent} logo={movie.imageUrl}/>)}
        </>
    )
}