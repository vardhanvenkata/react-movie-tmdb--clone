import React from "react";

export const SidebarData = [
{
	title: "Movies",
	path: "/movies",

	subNav: [
	{
		title: "Popular",
		path: "/movies/popular",
	},
	{
		title: "Top Rated",
		path: "/movies/top-rated",
	},
	{
		title : "UpComing",
		path:"/movies/upcoming",
	},
	{
		title:"Now Playing",
		path:"/movies/now-playing"
	}
	],
},
{
	title: "Tv",
	path: "/tv",

	subNav: [
	{
		title: "Popular",
		path: "/tv/popular",
		cName: "sub-nav",
	},
	{
		title: "Top Rated",
		path: "/tv/top-rated",
		cName: "sub-nav",
	},
	{
		title: "On TV",
		path: "/tv/on-tv",
	},
	{
		title:"Airing Today",
		path:"/tv/airing"
	}
	],
},
{
	title: "People",
	path: "/people",
	subNav: [
		{
			title: "Popular People",
			path: "/people/popular-people",
		},
	]
},
{
	title: "Support",
	path:"/support",
},
{
	title:"Contribution Bible",
	path:"/contribution"
},
{
	title:"Apps",
	path:"/apps"
},
{
	title:"Discussions",
	path:"/discussions"
},
{
	title:"Leader Board",
	path:'/leaderboard'
},
{
	title:"Contribute",
	path:"/contribute"
},
{
	title:"API",
	path:"/api"
},
{
	title:"Support",
	path:"/support"
},
{
	title:"About",
	path:"/about"
},
{
	title:"Login",
	path:"/login"
},
];
