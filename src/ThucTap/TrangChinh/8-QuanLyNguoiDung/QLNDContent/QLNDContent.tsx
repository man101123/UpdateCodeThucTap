import React from 'react'
import { Table } from 'antd';


import './QLNDContent.css'

const columns = [
  {
    title:
    <div className ="TitleQLND">
        STT
    </div>,
    dataIndex: 'STT',
    width: 92
  },
  {
    title:
    <div className ="TitleQLND">
        Tên đăng nhập 
    </div>,
    dataIndex: 'TDN',
    width: 193
  },
  {
    title:
    <div className ="TitleQLND">
        Họ và tên
    </div>,
    dataIndex: 'Hoten',
    width: 217
  },
    {
    title:
    <div className ="TitleQLND">
        Số điện thoại
    </div>,
    dataIndex: 'SDT',
    width: 175
  },
  {
    title:
    <div className ="TitleQLND">
        Email
    </div>,
    dataIndex: 'email',
    width: 279
  },
  {
    title:
    <div className ="TitleQLND">
        Đơn vị quản lý
    </div>,
    dataIndex: 'DVQL',
    width: 358
  },
    {
    title: '',
    dataIndex: 'Capnhat',
    width: 96
  },
  {
    title: '',
    dataIndex: 'Xoa',
    width: 89
  },
];

const data = [
  {
    key: '1',
    STT: '1',
    TDN: 'ND1120',
    Hoten: 'Tạ Duy Nguyên',
    SDT: '030 252 0311',
    email:'dnnsns@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Tiền Giang
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '2',
    STT: '2',
    TDN: 'ND2212',
    Hoten: 'Lê Quang liêm',
    SDT: '090 024 0256',
    email:'lequangliem@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Hà Nội
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '3',
    STT: '3',
    TDN: 'ND3920',
    Hoten: 'Phương Mỹ Lệ',
    SDT: '097 754 0254',
    email:'Pml@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Đồng Nai
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '4',
    STT: '4',
    TDN: 'ND2929',
    Hoten: 'Lê Thành Huy',
    SDT: '079 656 4541',
    email:'Lth@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Vũng Tàu
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '5',
    STT: '5',
    TDN: 'ND1201',
    Hoten: 'Nguyễn Thành An',
    SDT: '097 754 0254',
    email:'nta@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Vũng Tàu
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '6',
    STT: '6',
    TDN: 'ND1202',
    Hoten: 'Đinh Hoài An',
    SDT: '030 054 0544',
    email:'Dha@gmail.com.vn',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Tiền Giang
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '7',
    STT: '7',
    TDN: 'ND9322',
    Hoten: 'Văn Lệ Thu',
    SDT: '093 025 0232',
    email:'vlt@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Hà Nội
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '8',
    STT: '8',
    TDN: 'ND3923',
    Hoten: 'Vũ Minh Khôi',
    SDT: '030 054 0544',
    email:'vmkk@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Hà Nội
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '9',
    STT: '9',
    TDN: 'ND2302',
    Hoten: 'Trần Gia Lập',
    SDT: '030 054 0544',
    email:'tgl2020@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Hà Nội
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '10',
    STT: '10',
    TDN: 'ND3943',
    Hoten: 'Đinh Hoài An',
    SDT: '030 054 0544',
    email:'monglung@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Hà Nội
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
    {
    key: '11',
    STT: '11',
    TDN: 'ND5632',
    Hoten: 'Đinh Hoài An',
    SDT: '030 054 0544',
    email:'gahs@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - TP.HCM
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
  {
    key: '12',
    STT: '12',
    TDN: 'ND7458',
    Hoten: 'Nguyễn Công Minh',
    SDT: '097 754 0254',
    email:'ncmm@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Cần Thơ
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
  {
    key: '13',
    STT: '13',
    TDN: 'ND9438',
    Hoten: 'Bùi Tấn Toàn',
    SDT: '030 054 0544',
    email:'Btt2020@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Hà Nội
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },
  {
    key: '14',
    STT: '14',
    TDN: 'ND7432',
    Hoten: 'Mai Văn Sĩ',
    SDT: '030 054 0544',
    email:'maisi@gmail.com',
    DVQL:
    <div className="TitleDVQLinQLND">
        ATM - Cần Thơ
    </div>,
    Capnhat:
    <div className="TitleCapNhatinQLND">
        Cập nhật
    </div>,
    Xoa:
    <div className="TitleXoainQLND">
        Xóa
    </div>,
  },

];

export default function QLNDContent () {
    return(
        <div className="bgQLNDContent">
            <Table columns={columns} dataSource={data} pagination={false} className=""/>
        </div>
    );
}