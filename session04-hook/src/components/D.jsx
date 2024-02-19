import React from 'react'
import { useContext } from 'react'
import { createContex } from '../App';

export default function D() {
    /* lấy về name tên hoa */
    const data= useContext(createContex);
    console.log("99999",data);
  return (
    <div>D</div>
  )
}