import React from 'react'

import './QLNDHeaderFix.css'

import ADD from './HinhQLND/ADD.png'
import Suyra from './HinhQLND/Right.png'

export default function QLNDHeaderFix23 () {
    return (
        <div>
            <p className="TitleQLHTinQLND">Quản lý hệ thống</p>
            <img src={Suyra} alt="" className="IconQLNDinHeader1"/>
            <p className="TitleQLNDinQLND23">Quản lý người dùng</p>

            <p className="TitleTTNDinQLND">Thông tin người dùng:</p>
            <div className="TextBoxinQLND23">
                <p className="txbNTTNDinQLND23">Nhập thông tin người dùng</p>
            </div>

            <button type="button" className="bgbtnTiminQLND23">
                <p className="btnTiminQLND">Tìm</p>
            </button>


            <button type="button" className="bgbtnADDinQLND23">
                <p className="btnADDinQLND">
                    <img src={ADD} alt="" className=""/>
                    Thêm mới
                </p>
            </button>
        </div>
    );
}