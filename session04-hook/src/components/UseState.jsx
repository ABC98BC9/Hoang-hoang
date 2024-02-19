import React from 'react'
import { useState } from 'react'
/* rfc react functional component
   rcc react class component
 */
export default function UseState() {
    const [count,setCount]= useState(1);
    const [title,setTitle]= useState("hoa");
    const [job,setJob]=useState("");
    const [jobs,setJobs]=useState([]);

    /* 
        useState sẽ trả về cho mình 1 cái mảng có 2 phần tử
        phần tử 1: giá trị khởi tạo .
        phần tử thứ 2 là 1 hàm xử lý.

        -khi mà setCount(): thì component tự động re-render (tức là render lại)
        cho nên về phía UI(giao diện) tự động cập nhật giá trị
     */
    // nắm kĩ destructoring
    let arr=[1,"hoa"];
    let [a,b]=arr;

   const increase=()=>{
        setCount(count+1);
        setTitle("hồng");
    }
    console.log("component re-render");
    const handleChange=(event)=>{
        let inputValue= event.target.value;
        // console.log("11111",inputValue);
        setJob(inputValue);
    }
    const addJob=()=>{
        setJobs([...jobs,job]);
        setJob("");
    }
    console.log("jobs",jobs);
  return (
    <>
        <div>UseState</div>
        <p>{count}</p>
        <p>{title}</p>
        <button onClick={increase}>click</button>
        <input
         type="text" 
         onChange={handleChange}
         value={job}
        />
        <button onClick={addJob}>add job11</button>

        {/* tạo ô input nhập công việc nhấn nút lưu sẽ hiển ở dưới giao diện
        1: lấy giá trị ô input : onchange
        2. mình  lưu các danh sách công việc ở đâu [];
         */}
         <ul>
            {jobs.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
         </ul>
    </>
  )
}