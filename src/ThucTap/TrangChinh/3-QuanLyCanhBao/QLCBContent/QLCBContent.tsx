import React from 'react'
import './QLCBContent.css'
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
    width: 128
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        Loại GSM
    </div>
    </>,
    dataIndex: 'LGSM',
    width: 165
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        Địa chỉ
    </div>
    </>,   
    dataIndex: 'address',
    width: 463
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        Nội dung cảnh báo
    </div>
    </>,
    dataIndex: 'NDCB',
    width: 393
  },

  {
    title:
    <>
    <div className="TitleTableQLCB">
        Ngày giờ
    </div>
    </>,
    dataIndex: 'Time',
    width: 268
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
    LGSM:'ATM',
    address:'...',
    NDCB:'Cảm biến dịch chuyển &  gia tốc: Mất kết nối',
    Time:'10-06-2021 20:00:00',
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
    LGSM:'ATM',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
    NDCB:'Cảm biến cửa trên máy ATM: Báo động',
    Time:'10-06-2021 20:20:00',
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
    LGSM:'ATM',
    address:'1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
    NDCB:'Cảm biến điều khiển tại chổ bằng Remote RF: Bật',
    Time:'10-06-2021 20:03:00',
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
    LGSM:'ATM',
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    NDCB:'Cảm biến nhiệt độ: Cao',
    Time:'10-06-2021 20:20:00',
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
    LGSM:'ATM',
    address:'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    NDCB:'Cảm biến nhiệt độ: Thấp',
    Time:'10-06-2021 20:21:00',
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
    LGSM:'Phòng giao dịch',
    address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
    NDCB:'Cảm biến dịch chuyển: Biến động',
    Time:'10-06-2021 20:12:00',
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
    LGSM:'Phòng giao dịch',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
    NDCB:'Cảm biến rò điện: Báo động',
    Time:'10-06-2021 20:54:00',
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
    LGSM:'ATM',
    address:'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
    NDCB:'Cảm biến khói: Báo động',
    Time:'10-06-2021 20:22:00',
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
    LGSM:'ATM',
    address:'16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, TP Hà Nội',
    NDCB:'Pin dự phòng: Không sạc pin',
    Time:'10-06-2021 20:44:00',
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
    LGSM:'Phòng giao dịch',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
    NDCB:'Điện áp nguồn: Bình thường',
    Time:'10-06-2021 20:54:00',
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
    LGSM:'ATM',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Qận Cầu Giấy, TP Hà Nội',
    NDCB:'Cảm biến rung: Báo động',
    Time:'10-06-2021 20:12:00',
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
    LGSM:'Phòng giao dịch',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    NDCB:'Cảm biến ngoài máy ATM: Báo động',
    Time:'10-06-2021 20:12:00',
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
    LGSM:'Phòng giao dịch',
    address:'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, TP Hà Nội',
    NDCB:'Cảm biến nhiệt: Thấp',
    Time:'10-06-2021 20:12:00',
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
    LGSM:'Phòng giao dịch',
    address:'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
    NDCB:'Cảm biến rò điện: Báo động',
    Time:'10-06-2021 20:00:00',
  },
];

export default function GSM() {
    return (
      <div className="Test1">
        <Table columns={colums} dataSource={data} pagination={false} className=""/>
      </div>
    );
}