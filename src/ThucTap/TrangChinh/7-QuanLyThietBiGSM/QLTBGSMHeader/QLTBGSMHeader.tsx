import React from 'react'
import Suyra from './HinhQLTBGSMHeader/Right.png';
import DropDown from './HinhQLTBGSMHeader/Down.png';

import './QLTBGSMHeader.css'

export default function BCATMHeader() {
    return (
        <div className="">

            <p className="TitleQLHT-QLTBGSM">Quản lý hệ thống</p>
            <img src={Suyra} alt="" className="IconSuyRaQLTBGSM"/>
            <p className="TitleQLTBGSM5"> Quản lý thiết bị - GSM </p>

        <div className="">

            <p className="DVQL">Điểm giám sát:</p>

            <div className="NDVQL1">
                <p className="WriteNDVQl1"> GMS ID, địa chỉ... </p>
            </div>

            <p className="LCB51">ATM / Phòng giao dịch:</p>

            <div className="TC81">
                <img src={DropDown} alt="" className="dd1"/>
                <p className="TC111">Tất cả</p>
            </div>

            <p className="TT181">Kết nối nguồn:</p> 

            <div className="TC301">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="dd221"/>
            </div>   

            <p className="TitleKNM">Kết nối mạng:</p> 

            <div className="bgKNM">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="dd221"/>
            </div>   

            <p className="TitleCBFix4">Cảnh báo:</p> 

            <div className="bgCBFix4">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="dd221"/>
            </div>   

            <button type="button" className="btnlogin15">
                <p className="btntim">Tìm</p>
            </button>
            
            <button type="button" className="btnlogin16">
                <p className="btnxuatfile">Xuất file Excel</p>
            </button>
        </div>

       
    </div>
    )
}
