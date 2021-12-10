import React from 'react';
import './Login.css';
import { Link, Routes, Route } from 'react-router-dom';

import TrangChinh from '../../TrangChinh/0-TrangChinhFinal/TrangChinh'

import Logo from '../HinhLogin/Logo.png';
import Bong from '../HinhLogin/Bong.png';
import CayATM from '../HinhLogin/Group.png';
import Hinh1 from '../HinhLogin/Hinh1.png';
import Hinh2 from '../HinhLogin/Hinh2.png';
import Hinh3 from '../HinhLogin/Hinh3.png';

export default function Login() {
    return(
            <div className="Login">
                <div className="IconYT">
                    <img src={Logo} alt="" className="Logo"/>
                </div>

                <div className="Background">
                   <div className="Contentleft">
                        <img src={CayATM} alt="" className="atm"/>
                        <img src={Bong} alt="" className="bongatm"/>
                        <img src={Hinh1} alt="" className="f1"/>
                        <img src={Hinh2} alt="" className="f2"/>
                        <img src={Hinh3} alt="" className="f3"/>
                        <p className="bg_ATM"/>
                    </div>

                    <div className="" > 
                        <h3 className="TitleLogin">
                            Đăng nhập
                        </h3>
                        <form className="">

                            <br />

                                <label className="TenDangNhap">
                                    Tên đăng nhập
                                </label>
                                <br />
                                <input type="text" className="unamelogin" name="Uname" placeholder="Nhập tài khoản"/>

                            <br />

                                <label htmlFor="tdn" className="MatKhau">
                                    Mật khẩu
                                </label>

                            <br />

                                <input type="password" className="upassword" name="pword" placeholder="Nhập tài khẩu"/>
                            
                            <br />
                            <br />

                                <div className="bgCheckBox">
                                <input type="checkbox" className="checkpass" name="savepass"/>
                                <label htmlFor="savepass" className="savepass">
                                    Ghi nhớ đăng nhập
                                </label>
                                </div>

                            <br />

                            <Link to="/TrangChinh" className="">
                                <div className="bgbtnDangnhap">
                                    <h4 className="TitlebtnDN">Đăng nhập</h4>
                                </div>
                             </Link>

                        </form>

                        <Routes>
                            <Route path="/TrangChinh"/>
                        </Routes>

                        <div className="quenmatkhau">
                            Quên mật khẩu?
                        </div>
                    </div>
                </div>
            </div>
    );
}