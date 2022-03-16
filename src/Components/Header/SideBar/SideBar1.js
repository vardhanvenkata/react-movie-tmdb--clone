import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import React, { useState } from "react";

import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import styled from "styled-components";

const Nav = styled.div`
// background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
padding-left:20px;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: rgba(3,37,65,0.9);
width: 90%;
height: 100%;
display: flex;
justify-content: center;
position: fixed;
top: 58px;
backdrop-filter:blur(50px);
z-index:9999;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: ease .3s;
box-sizing:border-box;
`;

const SidebarWrap = styled.div`
width: 100%;
max-width:350px;
`;

const SideBar1 = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default SideBar1;
