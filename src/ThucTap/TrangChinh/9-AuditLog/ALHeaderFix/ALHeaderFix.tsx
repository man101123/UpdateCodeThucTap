import React from 'react'

import './ALHeaderFix.css'

import Suyra from './HinhALHeaderFix/Right.png'

export default function ALHeaderFix () {
    return(
        <div>
            <p className="TitleQLHTinAL">Quản lý hệ thống</p>
            <img src={Suyra} alt="" className="IconQLNDinHeader1"/>
            <p className="TitleQLNDinQLND23">Audit log</p>

            <p className="TitleTTNDinQLND">Đơn vị quản lý:</p>
            <div className="TextBoxinQLND23">
                <p className="txbNTTNDinQLND23">Đơn vị quản lý, điểm giám sát</p>
            </div>

            <button type="button" className="bgbtnTiminQLND23">
                <p className="btnTiminQLND">Tìm</p>
            </button>
        </div>
    );
}