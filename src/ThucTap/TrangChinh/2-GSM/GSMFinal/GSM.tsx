import React from 'react'
import Content from '../GSMContent/GSMContent'
import Header from '../GSMHeader/GSMHeader'
import Map from '../GSMMap/GSMMap'

import './GSM.css'

export default function GSM() {
    return (
        <div className="">
            <div className="">
                <Header/>
                <Map/>
                <Content/>
            </div>
        </div>
    );
}