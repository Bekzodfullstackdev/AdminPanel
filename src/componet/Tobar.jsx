import React from "react";
import "./topbar.css"
import { GrNotification } from 'react-icons/gr'
import { MdOutlineLanguage } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'

export default function Tobar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <GrNotification />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <MdOutlineLanguage />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <FiSettings />
                     
                    </div>
                    <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar" />
                </div>
               
            </div>
        </div>
    )
}