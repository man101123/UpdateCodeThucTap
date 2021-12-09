import React from 'react'
import './QTCContent.css'
import { Table } from 'antd';
import { Switch } from 'antd';


const colums = [
  {
    title:
    <>
    <div className="TitleTable">
        STT
    </div>
    </>,
    dataIndex: 'stt',
    width: 92
  },

  {
    title:
    <>
    <div className="TitleTable">
        Quyền truy cập
    </div>
    </>,
    dataIndex: 'QTC',
    width: 724
  },

  {
    title:
    <>
    <div className="TitleTable">
        Trạng thái
    </div>
    </>,
    dataIndex: 'TT',
    width: 494
  },

  {
    title:
    <>
    <div className="TitleTable">
        
    </div>
    </>,
    dataIndex: 'Update',
    width: 88
  },

  {
    title:
    <>
    <div className="TitleTable">
        
    </div>
    </>,
    dataIndex: 'Xoa',
    width: 95
  },
];

const data = [
  {
    key: '1',
    stt: '1',
    QTC:'Quản trị viên',
    TT:
    <div>
        <Switch defaultChecked/> Kích hoạt    
    </div>,
    Update:
    <>
    <div className="Update">
        Cập nhật
    </div>
    </>,
    Xoa:
    <>
    <div className="Xoa">
        Xóa
    </div>
    </>,
  },

  {
    key: '2',
    stt: '2',
    QTC:'Phòng giao dịch',
    TT:
    <div>
        <Switch defaultChecked/> Kích hoạt
    </div>,
    Update:
    <>
    <div className="Update">
        Cập nhật
    </div>
    </>,
    Xoa:
    <>
    <div className="Xoa">
        Xóa
    </div>
    </>,
  },

  {
    key: '3',
    stt: '3',
    QTC:'Adminitrator',
    TT:
    <div>
        <Switch/>    Không kích hoạt
    </div>,
    Update:
    <>
    <div className="Update">
        Cập nhật
    </div>
    </>,
    Xoa:
    <>
    <div className="Xoa">
        Xóa
    </div>
    </>,
  },

  {
    key: '4',
    stt: '4',
    QTC:'Nhân viên',
    TT:
    <div>
        <Switch defaultChecked/> Kích hoạt  
    </div>,
    Update:
    <>
    <div className="Update">
        Cập nhật
    </div>
    </>,
    Xoa:
    <>
    <div className="Xoa">
        Xóa
    </div>
    </>,
  },
];

export default function QTC() {
    return (
      <div className="bgTableQTC">
        <Table columns={colums} dataSource={data} pagination={false} className=""/>
      </div>
    );
}