import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function UseEffect() {
    const [count,setCount]=useState(0);
    const [title,setTitle]=useState("ngọc");
    
    useEffect(()=>{
        console.log("đang gọi vào hàm useEffect");
        // thường dùng để callAPI
        // có các tác vụ gọi API xử lý thì thường dùng trong UseEffect
    },[title,count])
    // giống với component didMount không?
    // có 3 cách dùng
    /* 
         Cách 1:
         Cách 2: thêm []
         Cách 3: trong [] chứa dependency(sự phụ thuộc)
         -khi dependency thay đổi thì useEffect mới được gọi.
     */
  return (
    <>
        {console.log("2222222")}
        <div>useEffect111333</div>
        <p>count :{count}</p>
        <button onClick={()=>setCount(count+1)}>click</button>
        <button  onClick={()=>setTitle("Lan")}>changeName</button>
    </>
  )
}