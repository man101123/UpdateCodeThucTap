import React from 'react'
import './DashBoardContent.css'

import Hinh1 from '../HinhDashBoard/Thongso1.png'
import Hinh2 from '../HinhDashBoard/Thongso2.png'
import Hinh3 from '../HinhDashBoard/Thongso3.png'
import Hinh4 from '../HinhDashBoard/Thongso4.png'

export default function DashBoardContent() {
    return (
        <div>
            <img src={ Hinh1 } alt="" className="Hinh1DBFixLan1"/>
            <img src={ Hinh2 } alt="" className="Hinh2DBFixLan2"/>
            <img src={ Hinh3 } alt="" className="Hinh3DBFixLan3"/>
            <img src={ Hinh4 } alt="" className="Hinh4DBFixLan4"/>
        </div>
    );
}