import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css';
import './BCATMContent.css'


const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:'Cảm biến dịch chuyển & gia tốc :Mất kết nối',
      Address:'Trần Gia Lập',
      Status: '10:06:2021 20:00:00',
      TT:<>
      <div className="TT120">
      Chưa xử lý
      </div>
      </>
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
     
      Address:'Lê Quang Liêm',
      Status:'15-06-2021 21:15:35',
      TT:<>
      <div className="TT120">
      Chưa xử lý
      </div>
      </>
   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
     
      Address:'Phương Mỹ Lệ',
      Status:'11-06-2021 23:01:50',
      TT:<>
      <div className="TT109">
      Đã xử lý
      </div>
      </>
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:'Bật cảnh báo : Bật cảnh báo bằng thiết bị remote',
        
        Address:'Lê Thành Huy',
        Status:'08-06-2021 20:14:50',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
            
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:'Cảm biến dịch chuyển & gia tốc :Mất kết nối',
       
        Address:'Nguyễn Thành An',
        Status:'01-06-2021 22:08:10',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
           
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
       
        Address:'Đinh Hoài An',
        Status:'15-06-2021 22:13:00',
        TT:<>
        <div className="TT109">
        Đã xử lý
        </div>
        </>
          
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:'Cảm biến dịch chuyển & gia tốc :Mất kết nối',
       
        Address:'Văn Lệ Thu ',
        Status:'18-06-2021 14:12:24',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
      },
       

      {
        key :' 8',
        Stt:'8',
        seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
      
        Address:'Vũ Minh Khôi ',
        Status:'08-06-2021 00:36:11',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
           
      }, 

      {
        key :' 9',
        Stt:'9',
        seriesNumber:'Cảm biến dịch chuyển & gia tốc :Mất kết nối',
    
        Address:'Trần Gia Lập ',
        Status:'19-06-2021 23:00:00',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
      },
    

      {
        key :' 10',
        Stt:'10',
        seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
      
        Address:'Đinh Hoài An',
        Status:'12-06-2021 12:15:57',
        TT:<>
        <div className="TT109">
        Đã xử lý
        </div>
        </>
          


      }, 


      {
        key :' 11',
        Stt:'11',
        seriesNumber:'Cảm biến dịch chuyển & gia tốc :Mất kết nối',
     
        Address:'Đinh Hoài An',
        Status:'18-06-2021 19:05:00',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
            


      }, 

      {
        key :' 12',
        Stt:'12',
        seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
       
        Address:'Nguyễn Công Minh',
        Status:'07-06-2021 20:34:12',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
           


      }, 

      {
        key :' 13',
        Stt:'13',
        seriesNumber:'Cảm biến dịch chuyển & gia tốc :Mất kết nối',
       
        Address:'Bùi Tấn Toàn',
        Status:'11-06-2021 22:00:56',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
              


      }, 

      {
        key :' 14',
        Stt:'14',
        seriesNumber:'Cảm biến cửa dưới : Mất kết nối',
     
        Address:'Mai Văn Sĩ',
        Status:'14-06-2021 21:12:00',
        TT:<>
        <div className="TT120">
        Chưa xử lý
        </div>
        </>
           


      }, 



  ]
  const colums =[
    {
      title:<>
      <div className="TT1201">
      STT
      </div>
      </>,
      dataIndex:'Stt',
      width: 76
    
    },
  
    {
      title:<>
      <div className="TT1201">
      Nội dung cảnh báo
      </div>
      </>,
      dataIndex:'seriesNumber',
      width: 416
      
   
     
    },
  
  
    {
      title:<>
      <div className="TT1201">
      Người quản lý
      </div>
      </>,
      dataIndex:'Address',
      width:260
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
      Thời gian
      </div>
      </>,
      dataIndex:'Status',
      width:335
    },

    {
        title:<>
        <div className="TT1201">
        Trang Thái
        </div>
        </>,
        dataIndex:'TT',
        width:402
        
      },


  ]

export default function BCATMContent() {
    return (
      <div className="LocationTableBCTATMFix1">
        <Table dataSource={data} columns={colums} pagination={false}/>
      </div>
    )
}
