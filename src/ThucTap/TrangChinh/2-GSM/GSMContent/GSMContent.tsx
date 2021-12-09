import React from 'react'
import './GSMContent.css'
import { Table } from 'antd';

import Trangthai1 from './HinhGSM/Trangthai1.png';
import Trangthai2 from './HinhGSM/Trangthai2.png';
import Trangthai3 from './HinhGSM/Trangthai3.png';
import Trangthai4 from './HinhGSM/Trangthai4.png';
import Trangthai5 from './HinhGSM/Trangthai5.png';
import Trangthai6 from './HinhGSM/Trangthai6.png';
import Thongtin from './HinhGSM/1.png';
import Reset from './HinhGSM/2.png';

import GSMThongtinATM from '../GSM-ThongtinATM/GSM-ThongtinATMFinal/GSM-ThongtinATMFinal'

import { Link, Routes, Route } from 'react-router-dom';


const colums = [
  {
    title:
    <>
    <div className="TitleTable">
        STT
    </div>
    </>,
    dataIndex: 'stt',
    width: 76
  },

  {
    title:
    <>
    <div className="TitleTable">
        Mã thiết bị/ Series number
    </div>
    </>,
    dataIndex: 'Seriesnumber',
    width: 139
  },

  {
    title:
    <>
    <div className="TitleTable">
        Loại điểm giám sát
    </div>
    </>,
    dataIndex: 'LDGS',
    width: 208
  },

  {
    title:
    <>
    <div className="TitleTable">
        Tên điểm giám sát
    </div>
    </>,
    dataIndex: 'TDGS',
    width: 223
  },

  {
    title:
    <>
    <div className="TitleTable">
        Địa chỉ
    </div>
    </>,   
    dataIndex: 'address',
    width: 623
  },

  {
    title:
    <>
    <div className="TitleTable">
        Trạng thái
    </div>
    </>,
    dataIndex: 'trangthai',
  },

  {
    title:
    <>
    <div className="TitleTable">
        
    </div>
    </>,
    dataIndex: 'Button',
    width: 79
  },
];

const data = [
  {
    key: '1',
    stt: '1',
    Seriesnumber:'0000001',
    LDGS:'ATM',
    TDGS:'ATM - Giang Văn Minh',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    trangthai:
    <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai2} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <Link to="/GSMThongtinATM">
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </Link>,
  },

  {
    key: '2',
    stt: '2',
    Seriesnumber:'0000002',
    LDGS:'ATM',
    TDGS:'ATM - Giang Văn Minh',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    trangthai:
    <>
    <img src={Trangthai4} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '3',
    stt: '3',
    Seriesnumber:'0000003',
    LDGS:'ATM',
    TDGS:'ATM - Nguyễn Ái Quốc',
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    trangthai:
      <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai5} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '4',
    stt: '4',
    Seriesnumber:'0000004',
    LDGS:'Phòng giao dịch',
    TDGS:'Phòng giao dịch - Cờ Đỏ',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '5',
    stt: '5',
    Seriesnumber:'0000005',
    LDGS:'ATM',
    TDGS:'ATM - Nguyễn Ái Quốc',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '6',
    stt: '6',
    Seriesnumber:'0000006',
    LDGS:'Phòng giao dịch',
    TDGS:'ATM - Giang Văn Minh',
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    trangthai:
        <>
    <img src={Trangthai4} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai5} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '7',
    stt: '7',
    Seriesnumber:'0000007',
    LDGS:'ATM',
    TDGS:'ATM - Nguyễn Ái Quốc',
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '8',
    stt: '8',
    Seriesnumber:'0000008',
    LDGS:'Phòng giao dịch',
    TDGS:'Phòng giao dịch',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '9',
    stt: '9',
    Seriesnumber:'0000009',
    LDGS:'Phòng giao dịch',
    TDGS:'Phòng giao dịch Trung Yên',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
    trangthai:
        <>
    <img src={Trangthai4} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },

  {
    key: '10',
    stt: '10',
    Seriesnumber:'0000010',
    LDGS:'ATM',
    TDGS:'ATM - Giang Văn Minh',
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
        <>
    <img src={Thongtin} alt="" className=""/>
    <img src={Reset} alt="" className=""/>
    </>,
  },
];

export default function GSM() {
    return (
      <div className="bgTableGSMFix">
        <Table columns={colums} dataSource={data} pagination={false} className=""/>

        <Routes>
          <Route path="/GSMThongtinATM" element={ <GSMThongtinATM/> } />
        </Routes>,
      </div>
    );
}