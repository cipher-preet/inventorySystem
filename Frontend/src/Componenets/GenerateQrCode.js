import React from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'
import { createProduct } from "../ReduxSetup/Action";
import { useDispatch, useSelector } from "react-redux";

import QRCode from "qrcode"





const GenerateQrCode = () => {

    const dispatch = useDispatch();

    const [name,setName] = useState();
    const [recievedDate, setRecievedDate] = useState(new Date());
    const [dispatchDate, setDispatchDate] = useState(new Date());
    const [qty,setQty] = useState();
    const [dispatchQty,setDispatchQty] = useState();
    const [status,setStatus] = useState();

    
    const handleSubbmitData = async (e) =>{
        e.preventDefault();
        console.log(name)
        console.log(new Date(recievedDate).toLocaleDateString())
        console.log(dispatchDate)
        console.log(qty)
        console.log(dispatchQty)
        console.log(status)

          const dataToEncode = `
    Name: ${name}
    Received Date: ${new Date(recievedDate).toLocaleDateString()}
    Dispatch Date: ${new Date(dispatchDate).toLocaleDateString()}
    Quantity: ${qty}
    Dispatch Quantity: ${dispatchQty}
    Status: ${status}
  `;

  
      
        const response = await QRCode.toDataURL(dataToEncode);
        console.log(response)
      

        dispatch(createProduct(name,recievedDate,qty,dispatchDate,dispatchQty,status,response))
    }
  return (
    <div>
      <div className="product-form">
      <Form onSubmit={handleSubbmitData}>
      <DropdownButton id="dropdown-basic-button" title={name || 'Select Product Name'} onSelect={(selectvalue)=> setName(selectvalue)}>
        <Dropdown.Item eventKey="C1">C1</Dropdown.Item>
        <Dropdown.Item eventKey="C2">C2</Dropdown.Item>
        <Dropdown.Item eventKey="C3">C3</Dropdown.Item>
        <Dropdown.Item eventKey="C4">C4</Dropdown.Item>
        <Dropdown.Item eventKey="C5">C5</Dropdown.Item>
      </DropdownButton>

      <Form.Group className="mb-3 date-form" controlId="formGroupEmail">
        <Form.Label>Received Date</Form.Label>
      <DatePicker selected={recievedDate} onChange={(date) => setRecievedDate(date)} maxDate={new Date()}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Enter Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter Quantity" value={qty} onChange={(e)=> setQty(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 date-form" controlId="formGroupEmail">
        <Form.Label>Dispatch Date</Form.Label>
      <DatePicker selected={dispatchDate} onChange={(dates) => setDispatchDate(dates)} maxDate={new Date()} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Dispatch Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter Quantity" value={dispatchQty} onChange={(e)=>setDispatchQty(e.target.value)} />
      </Form.Group>

      <DropdownButton id="dropdown-basic-button" title={status || 'Select Status'} onSelect={(selectvalue)=> setStatus(selectvalue)}>
        <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
        <Dropdown.Item eventKey="Dispatched">Dispatched</Dropdown.Item>
        <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
        
      </DropdownButton>
      <div className='create-button'>
      <Button variant="outline-primary"  type="submit">Create Product</Button>{' '}
      </div>

    </Form>
      </div>
    </div>
  )
}

export default GenerateQrCode
