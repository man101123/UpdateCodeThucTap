import React from 'react'
import './QLTBGSMContent.css'
import { Table } from 'antd';

import Trangthai1 from './HinhQLTBGSMContent/Trangthai1.png';
import Trangthai2 from './HinhQLTBGSMContent/Trangthai2.png';
import Trangthai3 from './HinhQLTBGSMContent/Trangthai3.png';
import Trangthai4 from './HinhQLTBGSMContent/Trangthai4.png';
import Trangthai5 from './HinhQLTBGSMContent/Trangthai5.png';
import Trangthai6 from './HinhQLTBGSMContent/Trangthai6.png';
import Dau3cham from './HinhQLTBGSMContent/Dau3Cham.png';

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
        GSM ID
    </div>
    </>,
    dataIndex: 'GSMID',
    width: 155
  },

  {
    title:
    <>
    <div className="TitleTable">
        Số điện thoại
    </div>
    </>,
    dataIndex: 'SDT',
    width: 164
  },

  {
    title:
    <>
    <div className="TitleTable">
        Loại GSM
    </div>
    </>,
    dataIndex: 'LGSM',
    width: 241
  },

  {
    title:
    <>
    <div className="TitleTable">
        Địa chỉ
    </div>
    </>,   
    dataIndex: 'address',
    width: 667
  },

  {
    title:
    <>
    <div className="TitleTable">
        Trạng thái
    </div>
    </>,
    dataIndex: 'trangthai',
    width: 142
  },

  {
    title:
    <>
    <div className="TitleTable">
        
    </div>
    </>,
    dataIndex: 'Button',
    width: 48
  },
];

const data = [
  {
    key: '1',
    stt: '1',
    GSMID:'0000001',
    SDT:'...',
    LGSM:'ATM',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    trangthai:
    <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai2} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '2',
    stt: '2',
    GSMID:'0000002',
    SDT:'090 024 0256',
    LGSM:'ATM',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    trangthai:
    <>
    <img src={Trangthai4} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '3',
    stt: '3',
    GSMID:'0000003',
    SDT:'097 754 0254',
    LGSM:'ATM',
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    trangthai:
      <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai5} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '4',
    stt: '4',
    GSMID:'0000004',
    SDT:'079 656 4541',
    LGSM:'ATM',
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '5',
    stt: '5',
    GSMID:'0000005',
    SDT:'097 754 0254',
    LGSM:'ATM',
    address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '6',
    stt: '6',
    GSMID:'0000006',
    SDT:'030 054 0544',
    LGSM:'030 054 0544',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    trangthai:
        <>
    <img src={Trangthai4} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai5} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '7',
    stt: '7',
    GSMID:'0000007',
    SDT:'093 025 0232',
    LGSM:'Phòng giao dịch',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '8',
    stt: '8',
    GSMID:'0000008',
    SDT:'030 054 0544',
    LGSM:'ATM',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '9',
    stt: '9',
    GSMID:'0000009',
    SDT:'030 054 0544',
    LGSM:'ATM',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    trangthai:
        <>
    <img src={Trangthai4} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '10',
    stt: '10',
    GSMID:'0000010',
    SDT:'030 054 0544',
    LGSM:'Phòng giao dịch',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '11',
    stt: '11',
    GSMID:'0000011',
    SDT:'Phòng giao dịch',
    LGSM:'ATM',
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '12',
    stt: '12',
    GSMID:'0000012',
    SDT:'097 754 0254',
    LGSM:'Phòng giao dịch',
    address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '13',
    stt: '13',
    GSMID:'0000013',
    SDT:'030 054 0544',
    LGSM:'Phòng giao dịch',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },

  {
    key: '14',
    stt: '14',
    GSMID:'0000014',
    SDT:'030 054 0544',
    LGSM:'Phòng giao dịch',
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    trangthai:
        <>
    <img src={Trangthai1} alt="" className=""/>
    <img src={Trangthai6} alt="" className=""/>
    <img src={Trangthai3} alt="" className=""/>
    </>,
    Button:
    <>
    <img src={Dau3cham} alt="" className=""/>
    </>,
  },
];

export default function GSM() {
    return (
      <div className="TestLocation2">
        <Table columns={colums} dataSource={data} pagination={false} className=""/>
      </div>
    );
}