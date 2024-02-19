import React, { Component } from 'react'
import Parent from './components/parent'
/* 
   
    State : quản lý trạng thái dữ liệu của ứng dụng
    để viết code js bên trong html thì bọc dấu {}
    khi state thay đổi thì component re-render( render lại);
    Khi nào state thay đỔi(khi đi setState)
    Prop  :property thuộc tính
    dùng để truyền dữ liệu từ component cha xuống dưới component con.
    Muốn truyền dữ liệu từ con lên cha phải truyền hướng truyền sự kiện
    event : hành động tương tác
*/
export default class App extends Component {
    constructor(){
      super()
      // this.increaseCount=this.increaseCount.bind(this);
      this.state={
        count:0,
        title:"rikkei academy",
        name:" minh huyền"
      }
    }
    getAge=(age)=>{
        console.log("app nhận được",age);
    }
    increaseCount=()=>{
      this.setState({
        count:this.state.count+1
      })
      this.setState({
        title:"rikkei"
      })
    }
    // increaseCount(){
    //      this.setState({
    //       count:this.state.count+1
    //   })
    // }
  render() {
    console.log("function re-render");
    return (
      <>
        <div className="hello"> xin chào </div>
        <div>hello</div>
        <p>count: {this.state.count}</p>
        <p>company: {this.state.title}</p>
        <button onClick={this.increaseCount}>increase_count</button>
        <Parent age={this.getAge} name={this.state.name}></Parent>
      </>
    )
  }
}