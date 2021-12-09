import React from 'react'

import './topbar.css';

import VNM from './HinhTopBar/VNM.png';
import DropDown from './HinhTopBar/Down.png';


export default function sidebar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topRight">
                    <div className="topbg">

                        <img src={VNM} alt="" className=""/>
                        <p className="writeVNM">VNM </p>
                        <img src={DropDown} alt="" className="DropDown"/>

                    </div>

                    <div>
                        <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.15752-9/245970042_952857021991299_813896412688376440_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aczIXhz-bL4AX_9jQ10&_nc_ht=scontent.fsgn6-1.fna&oh=6f5215b555ee2ddbd03560ac25b8aed5&oe=61CE1F0C" alt="" className="Avatar" />  
                        <p className="DTMM">Minh Mẫn</p>
                        <img src={DropDown} alt="" className="DropDown1"/>
                    </div>
                </div>
            </div>  
        </div>
    )
}
