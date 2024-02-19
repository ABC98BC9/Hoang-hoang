import React, { Component } from 'react'

export default class Children extends Component {
  constructor(){
    super()
    this.state={
      age:20,
    }
  }
  render() {
    // console.log("11111",this.props);
    const {name,age}= this.props;
    //  console.log("33333333",age);
     age(this.state.age)
    return (
      <div>
        Children11
        nhận dữ liệu từ App : {name}
      </div>
    )
  }
}