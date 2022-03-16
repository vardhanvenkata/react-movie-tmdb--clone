import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;
color:#fff;

&:hover {
	// background: rgba(3,37,65,0.9);
	cursor: pointer;
}
`;

const SidebarLabel = styled.span`
// margin-left: 16px;
`;

const DropdownLink = styled(Link)`
// background: rgba(3,37,65,0.9);
margin-left:20px;
height: 60px;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 14px;

&:hover {
	// background: rgba(3,37,65,0.9);
	cursor: pointer;
}
`;

const SubMenu = ({ item }) => {
const [subnav, setSubnav] = useState(false);

const showSubnav = () => setSubnav(!subnav);

return (
	<>
	<SidebarLink to={item.path}
	onClick={item.subNav && showSubnav}>
		<div>
		{item.icon}
		<SidebarLabel>{item.title}</SidebarLabel>
		</div>
		<div>
		{item.subNav && subnav
			? item.iconOpened
			: item.subNav
			? item.iconClosed
			: null}
		</div>
	</SidebarLink>
	{subnav &&
		item.subNav.map((item, index) => {
		return (
			<DropdownLink to={item.path} key={index}>
			{item.icon}
			<SidebarLabel>{item.title}</SidebarLabel>
			</DropdownLink>
		);
		})}
	</>
);
};

export default SubMenu;
