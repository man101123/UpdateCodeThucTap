import React from 'react'

import './TrangChinh.css'

import TopBar from '../TopBar/topbar'
import SideBar from '../Sidebar/Sidebar'

export default function TrangChinh() {
    return(
        <div className="bgTrangChinh">
            <TopBar/>
            <SideBar/>
        </div>
            
    );
}