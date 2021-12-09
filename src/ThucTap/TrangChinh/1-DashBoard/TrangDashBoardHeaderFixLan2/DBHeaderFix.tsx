import React from 'react'
import { DatePicker } from 'antd'

import './DBHeaderFix.css'

export default function BCATMHeaderFix () {
    return(
        <div>
            <div className="TittleDashBoardFromDashBoard">
                Dashboard
            </div>

            <div className="TitleDMWYFixLan2    ">
                Thứ 2 , ngày 05/06/2021
            </div>

            <div className="">
                <div className="TitleDBFixLan32">
                    Thời Gian :
                </div>
                
                <div className="DBCallendarFixLan22 ">
                    <DatePicker/>
                </div>
            </div>
        </div>
    );
}