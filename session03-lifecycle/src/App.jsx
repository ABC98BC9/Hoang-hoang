import React, { Component } from 'react'
import Info from './components/info';
import Form from './components/form';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      name:"hoa",
      isLogin:false,
    }
  }
  componentDidUpdate(){
    console.log("giai đoạn thứ 3 :componentDidUpdate");
  }
  componentWillUpdate(){
    console.log("giai đoạn thứ 3 :componentWillUpdate");
  }
  shouldComponentUpdate(){
    console.log("giai đoạn thứ 3 :shouldComponentUpdate");
    return true
  }
  componentDidMount(){
    // quan trọng 
    /* 
      đây là thời điểm thích hợP để gọi API 
     */
    console.log("componentDidMount");
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  checkLogin=()=>{
    // giả sử check đăng nhập thành công
    this.setState({
      isLogin:true,
    })
  }
  render() {
    console.log("component re-render");
    return (
      <>
          <div>11111111</div>
          <p>{this.state.name}</p>
          <button onClick={()=>this.setState({name:"huệ"})}>change</button>
          {this.state.isLogin && <Info></Info>}
          <button onClick={this.checkLogin}>login</button>
          <Form></Form>
      </>
    )
  }
}