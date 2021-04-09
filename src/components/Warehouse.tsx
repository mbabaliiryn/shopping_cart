import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Button, Checkbox, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import AppUtils from './utils/AppUtils';
import axios from 'axios';


interface Product{
  product_id: number
  product_name: string
  price: number| string
  qty: number| string
}

const initial_product: Product={
  price: "", qty:"", product_name:"", product_id:0
}

export default function WareHouse() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const[product, setProduct] = React.useState(initial_product)
  const handle_product = (name: string, value: string)=>{
setProduct({...product, [name]: value})
  }
  
  const [error, setError] = React.useState("")
  const add = ()=>{
      if (!AppUtils.is_valid_name(product.product_name.trim())){
          setError("Enter a valid name")
      // }else if (!AppUtils.is_valid_float_number((product.price as string).trim())){
      //     setError("Enter a valid price")
      // }else if(!AppUtils.is_valid_number((product.qty as string).trim())){
      //     setError("Enter a valid qty")

      }else{
          setError("")
      }

      }

      axios.post(`https://jsonplaceholder.typicode.com/users`, { product})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
      

return(
        <div>
           <nav className="sticky-top">
          <input type="checkbox" id="check" />
            <label className="checkbtn">
              <i className="fas fa-bar"></i>
            </label>
          <ul>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
        <div className="seller-main">
        <div className="d-flex justify-content-space-around">
        <h1>Update stock</h1>
        </div>
        <div className="container">
               <div className="row">
                   <div className="col">
          <Form>
              <Form.Group controlId="formBasicProductName">
                  <Form.Label>Product Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Product Name"
                  value={product.product_name} 
                  onChange={(event)=> handle_product('product_name', event.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formBasicPrice">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control type="number" placeholder="Price"
                  value={product.price as string} 
                  onChange={(event)=> handle_product('price', event.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formBasicQuantity">
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control type="number" placeholder="How many: Qty" 
                  value={product.qty as string} 
                  onChange={(event)=> handle_product('qty', event.target.value)}/>
              </Form.Group>
              <div className='error_message'>{error}</div>
              <Button variant="primary" type="button" onClick={add}>submit</Button>

          </Form>

          <Table striped bordered hover variant="dark">
              <thead>
                  <tr>
                      <th>Index</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Update Stock</th>
                  </tr>
              </thead>
              <tbody>
               {
                   // eslint-disable-next-line array-callback-return
                   products.map((item, index) => {
                       return(
                        <tr key={item.product_id}  onClick={()=>{setProduct(item)}}>
                        <td>{index + 1}</td>
                        <td>{item.product_name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                    </tr>
                       )
                   })
               }
              </tbody>
          </Table>
          <div className="row mt-5 justify-content-center order-display">
            <div className="col-md-5 mx-2">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text p-r">Make stock report</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
           

            </div>
          

          </div>
          </div>
               </div>
               <Button type='submit'>save</Button>

           </div>
       
</div>


</div>
    )
}

