import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Button, Checkbox, ItemMeta, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
// import uuid from "uuid";
import Notification from './Notification'
import { RootState } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/esm/Form';
import AppUtils from './utils/AppUtils';
import axios from 'axios';
// import { setNotification } from '../store/actions/notificationActions';


interface ProductInterface{
  product_id: number
  product_name: string
  price: number| string
  qty: number| string
}

const initial_product: ProductInterface={
  price: "", qty:"", product_name:"", product_id:0
}

export default function Sales() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const[product, setProduct] = React.useState(initial_product)
  const[editItem, setEditItem] = React.useState(false)
  const [item, setItem] = React.useState<ProductInterface[]>([]);
  
  const handle_product = (name: string, value: string)=>{
setProduct({...product, [name]: value})

  }
  const [productName, setProductName] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [error, setError] = React.useState("")

// const dispatch = useDispatch();
// const { message, type } = useSelector((state: RootState) => state.notification);
// const [counter, setCounter] = useState(1);

// const btnClickHandler = (type: 'success') => {
//   dispatch(setNotification({ message: `Notification message ${counter}`, type}))
//   setCounter(prevCounter => prevCounter + 1)
// }

const handleNameChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
  setProductName(e.target.value)
  setProduct({
    product_name: productName,
    price: productPrice,
    qty: productQuantity,
    product_id:0
  })
}

const handlePriceChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
  setProductPrice(e.target.value)
  setProduct({
    product_name: productName,
    price: productPrice,
    qty: productQuantity,
    product_id:0
  })
 
}

const handleQuantityChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
  setProductQuantity(e.target.value)
  setProduct({
    product_name: productName,
    price: productPrice,
    qty: productQuantity,
    product_id:0
  })
 
}
console.log(productName)

const handleSubmit = (e: any ) => {
  e.preventDefault();
  if (!AppUtils.is_valid_name(product.product_name.trim())){
    setError("Enter a valid name")
// }else if (!AppUtils.is_valid_float_number((product.price as string).trim())){
//     setError("Enter a valid price")
// }else if(!AppUtils.is_valid_number((product.qty as string).trim())){
//     setError("Enter a valid qty")

}else{
  
    setError("")
    const newItem = {
      product_name: productName,
      price: productPrice,
      qty: productQuantity,
      product_id: products.length + 1
      
    };

    setProducts([...products,newItem]);
    setItem([]);
}

};
const clearList = () => {
  setProducts([]);
 
  
};
const handleDelete = (id: number) => {
  const filteredItems = products.filter(item => item.product_id !== id);
  setProducts(filteredItems);
  setItem(filteredItems);
  
};
const handleEdit = (id: number) => {
  const filteredItems = products.filter(item => item.product_id !== id);
  const selectedItem = products.find(item => item.product_id === id);
  setItem(filteredItems);
  setEditItem(true);
  console.log(id);
};

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
        <h1 className="text-dark container">Enter your available stock</h1>
        {/* <div className="sales-btn">
          { message && <Notification message={message} type={type} /> }
          <div className="container">
            <button className="mr-2 order-btn" onClick={() => btnClickHandler('success')}>Received orders</button>

          </div>

        </div> */}
        </div>
        <div className="container mt-5">
               <div className="row">
                   <div className="col">
          <Form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add product"
              value={productName}
              onChange={e=> handleNameChange(e)}
              
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add price"
              value={productPrice}
              onChange={e=> handlePriceChange(e)}
            
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add quantity"
              value={productQuantity}
              onChange={e=> handleQuantityChange(e)}
           
            />
          </div>
             
              <div className='error_message'>{error}</div>
           
              <Button variant="primary" type="submit"
               disabled={item ? false : true}
               className={
                 editItem
                   ? "btn btn-block btn-success mt-3"
                   : "btn btn-block btn-primary mt-3 text-uppercase"
               }
              >{editItem ? "edit item" : "add item"}

              </Button>

          </Form>

          <Table striped bordered hover variant="dark">
              <thead>
                  <tr>
                      <th>Index</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Options</th>
                  </tr>
              </thead>
             
              <tbody>
               {
                   // eslint-disable-next-line array-callback-return
                   products.map((item, index) => {
                       return(
                        <tr key={item.product_id}  onClick={()=>{setProduct(item)}}>
                        <td className="text-dark">{index + 1}</td>
                        <td className="text-dark">{item.product_name}</td>
                        <td className="text-dark">{item.price}</td>
                        <td className="text-dark">{item.qty}</td>
                        <td>
                          <span className="mx-2 text-success">
                            <i className="fas fa-pen" onClick={()=>handleEdit(item.product_id)} />
                            </span></td>
                        <td>
                        <span className="mx-2 text-danger">
                          <i className="fas fa-trash" onClick={()=>{handleDelete(item.product_id) }}/>
                          </span>
                        </td>
                    </tr>
                       )
                   })
               }
              </tbody>
              
          </Table>
          <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
       onClick={()=>{clearList()}} >
          clear list
        </button>
          </div>
               </div>

           </div>
       
</div>

</div>
    )
}
