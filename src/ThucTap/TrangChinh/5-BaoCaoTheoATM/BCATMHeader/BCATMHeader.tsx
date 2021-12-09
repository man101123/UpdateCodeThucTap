import React from 'react'
import Suyra from '../HinhBCATM/Right.png';
import DropDown from '../HinhBCATM/Down.png';
import { DatePicker } from 'antd';
import './BCATMHeader.css'

export default function BCATMHeader() {
    const dateFormat='DD/MM/YY'
    return (
        <div className="">

            <p className="BaoCaoHD">Báo Cáo</p>
            <img src={Suyra} alt="" className="SuyRa"/>
            <p className="BCTPGD1">Báo Cáo theo ATM</p>

        <div className="">

            <p className="TitleDVQLFix2">Đơn vị quản lý:</p>

            <div className="asd">
                <p className="WriteNDVQl1"> Nhập đơn vị quản lý </p>
            </div>

            <p className="TitleLCBFix5">Loại cảnh báo:</p>

            <div className="asdFix2">
                <img src={DropDown} alt="" className="IconFixLanThu38"/>
                <p className="TC111">Tất cả</p>
            </div>

            <p className="TitleTTFix28">Trạng thái:</p> 

            <div className="asdFix5">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="dd221"/>
            </div>   

            <p className="Thoigian221">Thời gian:</p>

            <div className="Boxxtime1">
                <DatePicker format={dateFormat} className="FixDTPK2"/>
                <p className="TT101">Từ ngày đến ngày</p>
            </div>

            <button type="button" className="btnTimFix87">
                <p className="btntim">Tìm</p>
            </button>
            
            <button type="button" className="btnXFEFix36">
                <p className="btnxuatfile">Xuất file Excel</p>
            </button>
        </div>

       
    </div>
    )
}
