import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';

import Nutxuong from './HinhQLCBHeader/Down.png'
import Kinhlup from './HinhQLCBHeader/KinhLup.png'

import './QLCBHeader.css'

export default function QLCBHeader() {
    const dateFormat='DD/MM/YY'
    return(
        <div>
            <p className="TitleQLCB">Quản lý cảnh báo</p>

            <div>
                <p className="TitleGSM">GSM:</p>
                <div className="NGSMID">
                    <p className="WriteGSMID"> GSM ID </p>
                </div>


                <p className="TitleKhuvuc">Khu vực:</p>
                <div className="NDC">
                    <img src={Kinhlup} alt="" className="IconKinhlup"/>
                    <p className="WriteNDC">Nhập địa chỉ</p>
                </div>


                <p className="TitleLCB">Loại cảnh báo:</p>
                <div className="bgTatCa">
                    <img src={Nutxuong} alt="" className="IconDown"/>
                    <p className="TitleTatCa">Tất cả</p>
                </div>


                <p className="TitleTT">Trạng thái:</p>
                <div className="bgTatCa2">
                    <img src={Nutxuong} alt="" className="IconDown2"/>
                    <p className="TitleTatCa">Tất cả</p>
                </div>


                <p className="TitleThoiGianLeft">Thời gian:</p>
                <div className="LocationTGLeft">
                    <DatePicker defaultValue={moment()} format={dateFormat} className="DatePickerFix"/>
                    <p className="TitleTuNgayDenNgay">Từ ngày - đến ngày</p>
                </div>

                
                <button type="button" className="btnbgTim">
                    <p className="btnTim">Tìm</p>
                </button>


            </div>
        </div>
    );
}