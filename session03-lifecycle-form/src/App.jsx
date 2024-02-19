import React, { Component } from 'react'
import Products from './components/products';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      products:[{
        name:'iphone15',
        id:1
      },
      {
        name:'iphone16',
        id:2
      }
    ],
      isActive:false,
      title:"học lập trình",
    }
  }
  render() {
    console.log("component bắt đầu re-render");
    const handleClick=()=>{
      this.setState({
        title:"học lập trình javascript"
      })
    }
    const name1="hoa";
    const age= 20;
    const students=["vân","minh huyền","ánh","trang"];
    let obj={
      name:"minh thu",
    }
    const getDataAdress=(address)=>{
      console.log("địa chỉ product gửi lên app",address);
    }
    return (
      <>
        <h1> App</h1>
        <p>tên của bạn là :{name1} </p>
        <p> năm nay {age} tuổi </p>
        <p>{students}</p>
        <p>{JSON.stringify(obj)}</p>
        <ul>
         { students.map((item,index)=>{
            return <li key={index}> {item}</li>
         })}
        </ul>
        <p>title : {this.state.title}</p>
        <button onClick={handleClick}>changeName</button> <br />
        {/* đưa danh sách sản phẩm vào */}
        <Products address={getDataAdress} products={this.state.products}></Products>
      </>
      
    )
  }
}