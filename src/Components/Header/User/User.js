import './User.css'

import React, { useState } from "react";

import {FaUser} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const User = () =>{
    const[popup,setPopUp]=useState(false);
    const showPopUp = () => setPopUp(!popup);
    return(
        <>  
            <div className="user-popup">
                <FaUser onClick={showPopUp}/>
                {popup ?
                <div className="user-popup show">
                <ul>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <hr/>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                </ul>
            </div>:null }
                
            </div>
        </>
    )
}
export default User;