import React from 'react'

import { Table } from 'antd'

import './ALContentFix.css'

const columns = [
  {
    title:
    <div className="TitleALContent">
        STT
    </div>,
    dataIndex: 'STT',
    width: 76
  },
    {
    title:
    <div className="TitleALContent">
        Ngày giờ
    </div>,
    dataIndex: 'Ngaygio',
    width: 239
  },
    {
    title:
    <div className="TitleALContent">
        Thao tác
    </div>,
    dataIndex: 'Thaotac',
    width: 226
  },
    {
    title:
    <div className="TitleALContent">
        Tên đăng nhập
    </div>,
    dataIndex: 'TDN',
    width: 175
  },
    {
    title:
    <div className="TitleALContent">
        Ghi chú
    </div>,
    dataIndex: 'Ghichu',
    width: 777
  },
];

const data = [
  {
    key: '1',
    STT:'1',
    Ngaygio:'10-06-2021 20:00:00',
    Thaotac:'Log in',
    TDN:'Admin',
    Ghichu:'',
  },
    {
    key: '2',
    STT:'2',
    Ngaygio:'10-06-2021 20:50:00',
    Thaotac:'Log out',
    TDN:'Admin',
    Ghichu:'',
  },
    {
    key: '3',
    STT:'3',
    Ngaygio:'10-06-2021 21:00:00',
    Thaotac:'Log in',
    TDN:'Admin',
    Ghichu:'',
  },
    {
    key: '4',
    STT:'4',
    Ngaygio:'10-06-2021 20:15:00',
    Thaotac:'Thêm thiết bị',
    TDN:'Admin',
    Ghichu:'Thêm thiết bị vào thành công!',
  },
    {
    key: '5',
    STT:'5',
    Ngaygio:'10-06-2021 23:00:00',
    Thaotac:'Thêm điểm giám sát',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
    {
    key: '6',
    STT:'6',
    Ngaygio:'10-06-2021 17:00:00',
    Thaotac:'Xóa thiết bị',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
    {
    key: '7',
    STT:'7',
    Ngaygio:'10-06-2021 08:00:00',
    Thaotac:'Log in',
    TDN:'Admin',
    Ghichu:'',
  },
    {
    key: '8',
    STT:'8',
    Ngaygio:'10-06-2021 10:00:00',
    Thaotac:'Xóa thiết bị',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
    {
    key: '9',
    STT:'9',
    Ngaygio:'10-06-2021 00:00:00',
    Thaotac:'Cập nhật điểm giám sát',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    key: '10',
    STT:'10',
    Ngaygio:'10-06-2021 12:00:00',
    Thaotac:'Thêm điểm giám sát',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    key: '11',
    STT:'11',
    Ngaygio:'10-06-2021 16:00:00',
    Thaotac:'Log out',
    TDN:'Admin',
    Ghichu:'',
  },
  {
    key: '12',
    STT:'12',
    Ngaygio:'10-06-2021 22:00:00',
    Thaotac:'Log in',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    key: '13',
    STT:'13',
    Ngaygio:'10-06-2021 11:00:00',
    Thaotac:'Cập nhật điểm giám sát',
    TDN:'Admin',
    Ghichu:'',
  },
  {
    key: '14',
    STT:'14',
    Ngaygio:'10-06-2021 08:00:00',
    Thaotac:'Log out',
    TDN:'Admin',
    Ghichu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

export default function ALContentFix () {
    return(
        <div className="bgTableALContentFix">
            <Table columns={columns} dataSource={data} pagination={false} className=""/>
        </div>
    );
}