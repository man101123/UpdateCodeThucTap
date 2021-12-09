import React from 'react'
import './Sidebar.css';
import { Menu } from 'antd'

import DB from './HinhSidebar/Dashboard.png';
import GSM from './HinhSidebar/GSM.png';
import QLCB from './HinhSidebar/QLCB.png';
import BCTPGD from './HinhSidebar/BCTPGD.png';
import BCTATM from './HinhSidebar/BCTATM.png';
import QTC from './HinhSidebar/QTC.png';
import QLTBGSM from './HinhSidebar/QLTBGSM.png';
import QLND from './HinhSidebar/QLND.png';
import AuditLog from './HinhSidebar/AuditLog.png';
import YT from './HinhSidebar/Youtube.png';
import So12 from './HinhSidebar/So12.png';

import { Link, Routes, Route } from 'react-router-dom';

import TrangDashBoard from '../1-DashBoard/DashBoardFinal/DashBoardFinal'
import TrangGSM from '../2-GSM/GSMFinal/GSM'
import TrangQLCB from '../3-QuanLyCanhBao/QLCBFinal/QLCBFinal'
import TrangBCTPGD from '../4-BaoCaoTheoPGD/BCTPGDFinal/BCTPGDFinal'
import TrangBCTATM from '../5-BaoCaoTheoATM/BCATMMain/BCATMMain'
import TrangQTC from '../6-QuyenTruyCap/QTCFinal/QTCFinal'
import TrangQLTBGSM from '../7-QuanLyThietBiGSM/QLTBGSMFinal/QLTBGSMFinal'
import TrangQLND from '../8-QuanLyNguoiDung/QLNDFinal/QLNDFinal'
import TrangAuditLog from '../9-AuditLog/ALFinal/ALFinal'

export default function Sidebar() {
    return (
            <div className="backgroundSideBar">

                <Menu
                mode="inline"
                defaultSelectedKeys={['Dashboard']}
                defaultOpenKeys={['Dashboard']}
                style={{ height: '1032px' }}
                >

                    <Menu style={{ padding: '25px'}}>
                        <img src={YT} alt="" className=""/>
                    </Menu>

                    <Menu style={{ padding: '25px'}}/>

                    <h1>
                        <Menu style={{ padding: '32px'}}>Tổng quan</Menu>
                    </h1>

                    <Menu.Item key="Dashboard">
                        <Link to="/Dashboard">
                            <img src={DB} alt="" className=""/>
                            Dashboard
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="GSM Modern on Map">
                        <Link to="/GSM">
                            <img src={GSM} alt="" className=""/>
                            GSM Modern on Map
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="Quản lý cảnh báo">
                        <Link to="/QLCB">
                            <img src={QLCB} alt="" className=""/>
                            Quản lý cảnh báo
                            <img src={So12} alt="" className="So12"/>
                        </Link>
                    </Menu.Item>

                    <Menu style={{ padding: '25px'}}/>
                                            
                    <h1>
                        <Menu style={{ padding: '32px'}}>Báo cáo</Menu>
                    </h1> 

                    <Menu.Item key="Báo cáo theo PGD">
                        <Link to="/BCTPGD">
                            <img src={BCTPGD} alt="" className=""/>
                            Báo cáo theo PGD
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="Báo cáo theo ATM">
                        <Link to="/BCTATM">
                            <img src={BCTATM} alt="" className=""/>
                            Báo cáo theo ATM
                        </Link>
                    </Menu.Item>

                    <Menu style={{ padding: '25px'}}/>

                    <h1>
                        <Menu style={{ padding: '32px'}}>Quản lý hệ thống</Menu>
                    </h1>

                    <Menu.Item key="Quyền truy cập">
                        <Link to="/QTC">
                            <img src={QTC} alt="" className=""/>
                            Quyền truy cập
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="Quản lý thiết bị - GSM">
                        <Link to="/QLTB-GSM">
                            <img src={QLTBGSM} alt="" className=""/>
                            Quản lý thiết bị - GSM
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="Quản lý người dùng">
                        <Link to="/QLND">
                            <img src={QLND} alt="" className=""/>
                            Quản lý người dùng
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="Audit log">
                        <Link to="/AuditLog">
                            <img src={AuditLog} alt="" className=""/>
                            Audit log
                        </Link>
                    </Menu.Item>
                </Menu>

                <Routes>
                    <Route path="/Dashboard" element={ <TrangDashBoard/> }/>
                    <Route path="/GSM"  element={ <TrangGSM/> }/>
                    <Route path="/QLCB"  element={ <TrangQLCB/> }/>
                    <Route path="/BCTPGD"  element={ <TrangBCTPGD/> }/>
                    <Route path="/BCTATM"  element={ <TrangBCTATM/> }/>
                    <Route path="/QTC"  element={ <TrangQTC/> }/>
                    <Route path="/QLTB-GSM"  element={ <TrangQLTBGSM/> }/>
                    <Route path="/QLND" element={ <TrangQLND/> }/>
                    <Route path="/AuditLog" element={ <TrangAuditLog/> }/>
                </Routes>
            </div>
    )
}
