import React from 'react'
import Table from 'react-bootstrap/Table';
import { json } from 'react-router-dom';
function Basket() {

let myWish=JSON.parse(localStorage.getItem("wishList"))
console.log(myWish);



  return (
    <div>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Title</th>
          <th>Buttons</th>
        </tr>
      </thead>
      <tbody>
     {
       myWish.map((elem,i)=>(
        <tr key={i}>
          <td>{elem._id}</td>
          <td>{elem.name}</td>
          <td>{elem.price}</td>
          <td>{elem.title}</td>
        </tr>
      ))
     }
      
      </tbody>
    </Table>

    </div>
  )
}

export default Basket