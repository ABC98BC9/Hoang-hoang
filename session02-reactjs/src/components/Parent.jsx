import React, { Component } from 'react'
import Children from './Children'
export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            age:""
        }
    }
    getAge=(age)=>{
            console.log("AGE",age);
          
    }
    // getAge(5)
  render() {
    // console.log("1111",this.props);
    const{name,age}=this.props
    //  age(this.state.age);
    return (
     <>
      <div>Parent</div>
      <Children name={name} age={this.getAge}></Children>
     </>
    )
  }
}