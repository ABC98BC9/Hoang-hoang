import React, { Component } from 'react'
import Product from './product'

export default class Products extends Component {
    constructor(){
        super()
        this.state={
            address:""
        }
    }
  render() {
    // hứng dữ liệu về
    // destructoring CỰC KÌ QUAN TRỌNG 
    let {products,address}=this.props;
    // let data= this.props;
    //  console.log("111111",products);
     const getAddress=(name)=>{
            console.log("giá trị nhận về",name);
            this.setState({
                address:name
            })
     }
     address(this.state.address);
    return (
      <>
        {/* fragment */}
            List Products
        {/* <Product data={products}></Product> */}
        {
            products.map((item,index)=>{
                return <Product address={getAddress} key={index} data={item}></Product> 
            })
        }
      </>
    )
  }
}