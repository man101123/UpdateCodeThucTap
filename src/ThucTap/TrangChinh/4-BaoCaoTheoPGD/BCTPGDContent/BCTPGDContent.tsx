import React from 'react'
import './BCTPGDContent.css'
import { Table } from 'antd';

const colums = [
  {
    title:
    <>
    <div className="TitleTableQLCB">
        STT
    </div>
    </>,
    dataIndex: 'stt',
    width: 76
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        GSM ID
    </div>
    </>,
    dataIndex: 'GSMID',
    width: 212
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        Địa chỉ
    </div>
    </>,   
    dataIndex: 'address',
    width: 1013
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        Số cảnh báo
    </div>
    </>,
    dataIndex: 'SoCB',
    width: 205
  },

];

const data = [
  {
    key: '1',
    stt: '1',
    GSMID:
    <>
        <div className="GSMID">
            0000001
        </div>
    </>,
    address:'...',
    SoCB:'121',
  },

  {
    key: '2',
    stt: '2',
    GSMID:
        <>
    <div className="GSMID">
        0000002
    </div>
    </>,
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    SoCB:'353',
  },

  {
    key: '3',
    stt: '3',
    GSMID:
        <>
    <div className="GSMID">
        0000003
    </div>
    </>,
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    SoCB:'3535',
  },

  {
    key: '4',
    stt: '4',
    GSMID:
        <>
    <div className="GSMID">
        0000004
    </div>
    </>,
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    SoCB:'235',
  },

  {
    key: '5',
    stt: '5',
    GSMID:
        <>
    <div className="GSMID">
        0000005
    </div>
    </>,
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    SoCB:'864',
  },

  {
    key: '6',
    stt: '6',
    GSMID:
        <>
    <div className="GSMID">
        0000006
    </div>
    </>,
    address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
    SoCB:'3412',
  },

  {
    key: '7',
    stt: '7',
    GSMID:
        <>
    <div className="GSMID">
        0000007
    </div>
    </>,
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
    SoCB:'564',
  },

  {
    key: '8',
    stt: '8',
    GSMID:
        <>
    <div className="GSMID">
        0000008
    </div>
    </>,
    address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
    SoCB:'321',
  },

  {
    key: '9',
    stt: '9',
    GSMID:
        <>
    <div className="GSMID">
        0000009
    </div>
    </>,
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
    SoCB:'4754',
  },

  {
    key: '10',
    stt: '10',
    GSMID:
        <>
    <div className="GSMID">
        00000010
    </div>
    </>,
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
    SoCB:'388',
  },

    {
    key: '11',
    stt: '11',
    GSMID:
        <>
    <div className="GSMID">
        0000011
    </div>
    </>,
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Qận Cầu Giấy, TP Hà Nội',
    SoCB:'2112',
  },

  {
    key: '12',
    stt: '12',
    GSMID:
        <>
    <div className="GSMID">
        0000012
    </div>
    </>,
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    SoCB:'434',
  },
    
  {
    key: '13',
    stt: '13',
    GSMID:
        <>
    <div className="GSMID">
        0000013
    </div>
    </>,
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
    SoCB:'0452',
  },

  {
    key: '14',
    stt: '14',
    GSMID:
        <>
    <div className="GSMID">
        0000014
    </div>
    </>,
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    SoCB:'242',
  },
];

export default function BCTPGD() {
    return (
      <div className="FixBCTPGD1">
        <Table columns={colums} dataSource={data} pagination={false} className=""/>
      </div>
    );
}