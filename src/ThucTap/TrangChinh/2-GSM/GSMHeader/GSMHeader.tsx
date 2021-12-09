import React from 'react'
import './GSMHeader.css'

import Find from './HinhGSMHeader/KinhLup.png'

export default function GSMHeader() {
    return(
        <div>
            <p className="TitleTDGS">Tìm điểm giám sát</p>

            <p className="TitleDGS">Điểm giám sát:</p>
            <div className="TextBoxDGS">
                <p className="WriteDGS">Nhập địa điểm</p>
                <img src={Find} alt="" className="IconFind"/>
            </div>
        </div>
    );
}