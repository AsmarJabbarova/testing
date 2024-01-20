import React, { useEffect, useState } from 'react'
import { Field, Formik,Form } from 'formik';
import Table from 'react-bootstrap/Table';
import * as Yup from 'yup';
const Shema = Yup.object().shape({
  name: Yup.string().required(`name in require`),
  price: Yup.string().required("price is require")
})
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function Add() {
const [products, setProducts]=useState([])
useEffect(()=>{
  axios.get("http://localhost:4040/products").then((res)=>{
    setProducts(res.data)
  })
},[])



  return (
    <>
  
      <Formik initialValues={{
        name: "",
        price: 0
      }}
        validationSchema={Shema}
        onSubmit={(values) => {
          axios.post("http://localhost:4040/products", values).then((res) => console.log(res.data))
    }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field type="text" placeholder='name' name="name" />
          {errors.name && touched.name && (
            <div>{errors.name}</div>
          )}

          <Field type="number" placeholder='price' name="price" />
          {errors.price && touched.price && (
            <div>{errors.price}</div>
          )}
          <button type="submit">
            Submit
          </button>

        </Form>
      )}

    </Formik >

    <div className="tables">
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
       products.map((elem,i)=>(
        <tr key={i}>
          <td>{elem._id}</td>
          <td>{elem.name}</td>
          <td>{elem.price}</td>
          <td>{elem.title}</td>
          <td><button onClick={()=>{
            axios.delete(`http://localhost:4040/products/${elem._id}`).then(()=>{
              axios('http://localhost:4040/products').then((res)=>{
                setProducts(res.data)
              })
            })
          }}>Detele</button></td>
        </tr>
      ))
     }
      
      </tbody>
    </Table>
    </div>



    </>
  )
}

export default Add