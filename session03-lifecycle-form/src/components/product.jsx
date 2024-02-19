import React, { Component } from 'react'

export default class Product extends Component {
    constructor(){
        super()
        this.state={
            address:"hà nội"
        }
    }
  render() {
    let {data,address}=this.props;
    return (
      <div>{data.name}
        <button onClick={()=>address(this.state.address)}>gửi địa chỉ </button>
      </div>
    )
  }
}