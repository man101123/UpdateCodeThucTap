import React from 'react'
import Right from './HinhBCTPGD/Right.png'
import DropDown from './HinhBCTPGD/Down.png'
import { DatePicker } from 'antd';
import './BCTPGDHeader.css'

export default function BCATMHeader() {
    const dateFormat='DD/MM/YY'
    return (
        <div className="">

            <p className="TitleBaoCao">Báo Cáo</p>
            <img src={Right} alt="" className="IconSuyRaFix"/>
            <p className="TitleBCTPGD">Báo cáo theo phòng giao dịch</p>

        <div className="">

            <p className="TitleDVQLFix1">Đơn vị quản lý:</p>

            <div className="bgNDVQLFix1">
                <p className="WriteNDVQl1"> Nhập đơn vị quản lý </p>
            </div>

            <p className="TitleFix5">Loại cảnh báo:</p>

            <div className="bgFix6">
                <img src={DropDown} alt="" className="LanThu46FixIcon"/>
                <p className="TC111">Tất cả</p>
            </div>

            <p className="TitleFix7">Trạng thái:</p> 

            <div className="bgFix8">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="LanThu32FixIcon"/>
            </div>   

            <p className="TitleFix9">Thời gian:</p>

            <div className="bgFix10">
                <DatePicker format={dateFormat} className="DatePickerBCTPGDFix"/>
                <p className="TT101">Từ ngày đến ngày</p>
            </div>

            <button type="button" className="btnTimBCTPGDFix2">
                <p className="btntim">Tìm</p>
            </button>
            
            <button type="button" className="btnXFEFix3">
                <p className="btnxuatfile">Xuất file Excel</p>
            </button>
        </div>

       
    </div>
    )
}
