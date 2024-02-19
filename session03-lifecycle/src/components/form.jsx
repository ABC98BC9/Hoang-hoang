import React, { Component } from 'react'

export default class Form extends Component {
      constructor(){
        super()
        this.state={
            userName:"",
            password:""
        }
      }
  // khi làm việc với  form ngăn chặn việc submit form
  render() {
      const login=(e)=>{
        e.preventDefault();
        console.log("đã chạy vào hàm login ");
          console.log("userName",this.state.userName);
            console.log("pass",this.state.password);
    }
    const changeName=(event)=>{
             let userName=event.target.value;
            this.setState({
                userName:userName,
            })   
    }
     const changePass=(event)=>{
             let pass=event.target.value;
            this.setState({
                password:pass,
            })   
    }
    return (
      <div>
        {/* mong muốn khi nhấn login lấy giá trị các ô nhập */}
        <form action="">
            <label htmlFor="">userName</label>
            <input type="text" onChange={changeName} /><br />
            <label htmlFor="">password</label>
            <input type="text"onChange={changePass} /><br />
            <button onClick={()=>login(event)}>đăng nhập</button>
        </form>
      </div>
    )
  }
}