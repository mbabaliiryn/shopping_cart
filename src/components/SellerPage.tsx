import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, Checkbox } from 'semantic-ui-react'
import Form from 'react-bootstrap/esm/Form';
import Nav from 'react-bootstrap/esm/Nav';
import Footer from './Footer'


interface Stock {
    name: string;
    quantity: number;
    price: number;
    unitPrice: number;
    total: number
}

interface AddStock {
    addStock: AddStock;
}
// type ToggleTodo = (selectedTodo: Todo) => void;

// type AddTodo = (name: string, quantity: number, price: number, nunitPrice: number ni) => void;

export default function AddStockForm() {
    const[newStock, setNewStock] = React.useState({name:'',quantity:'', price:'', unitPrice:''})

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewStock(e.target.value);
    // }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    // const addProduct = (newProduct: string) => {
    //     setProduct([...products, {name: newProduct, complete: false}])
    // }

    // const addStock = (newStock: string) => {
    //     setStocks([...stocks, { name: newStock, complete: false}])
    // }
    return(
        <div>
           <nav>
          <input type="checkbox" id="check" />
            <label className="checkbtn">
              <i className="fas fa-bar"></i>
            </label>
          <label  className="logo"><a href="/">Rooms Application</a></label>
          <ul>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
        
            <h1>Enter your available stock</h1>
    <Form className="d-flex">
    <Checkbox className="mt-5" />
  <Form.Group controlId="formBasicProductName" className="mr-4 ml-4">
    <Form.Label >Product Name</Form.Label>
    <Form.Control type="product" placeholder="Enter name" />
    
  </Form.Group>

  <Form.Group controlId="formBasicQuantity" className="mr-4">
    <Form.Label >Quantity</Form.Label>
    <Form.Control type="quantity" placeholder="Enter quantity" />
  </Form.Group>
  <Form.Group controlId="formBasicUnitPrice" className="mr-4">
    <Form.Label >Unit Price</Form.Label>
    <Form.Control type="unit price" placeholder="Enter unit price" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPrice" className="mr-4">
    <Form.Label >Price</Form.Label>
    <Form.Control type="price" placeholder="Enter price" />
  </Form.Group>

  <Form.Group controlId="formBasicPrice" className="mr-4">
    <Form.Label >Total</Form.Label>
    <Form.Control type="total" placeholder="Enter Total" />
  </Form.Group>
  <div>
  <Button type='submit' className="mt-4">Add</Button>
  </div>
</Form>
<Footer/>
</div>
    )
}


