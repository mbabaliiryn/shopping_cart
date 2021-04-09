import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, Checkbox } from 'semantic-ui-react'
import Form from 'react-bootstrap/esm/Form';

import Footer from './Footer';




export default function Finance() {
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
            <div className="row mt-5 justify-content-center order-display">
          <div className="col-md-5 mx-2">
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text p-r">Make a payment report</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

        </div>
        <div className="col-md-5 mx-2">
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text p-r">Make sales report</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

  </div>

</div>

            <Footer />
        </div>
    )
}

