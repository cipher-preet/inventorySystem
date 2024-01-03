import React from 'react'
import { useState , useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../ReduxSetup/Action";
import { updateProduct } from "../ReduxSetup/Action";


const UpdateProduct = () => {

  const dispatch = useDispatch();

const fetchUserProduct = useSelector((state) => state.fetchProductByIdReducer?.product?.ftechProduct || null);

  console.log(fetchUserProduct)

  const { productId } = useParams();
  console.log("params",productId);

  useEffect(()=>{
    dispatch(fetchProductById(productId))
  },[dispatch,productId])

  const initialQty = fetchUserProduct ? fetchUserProduct.quantity : '';
  const names = fetchUserProduct ? fetchUserProduct.name : '';
  const dispatchqty = fetchUserProduct ? fetchUserProduct.dispatchQuantity : '';
  const statusfetch = fetchUserProduct ? fetchUserProduct.status : '';
  const reciData = fetchUserProduct ? fetchUserProduct.dateReceived : '';
  const desiData = fetchUserProduct ? fetchUserProduct.dateDispatched : '';


  console.log("reciData",reciData)

    const [name,setName] = useState( names || '');
    const [recievedDate, setRecievedDate] = useState(reciData ? new Date(reciData) : new Date());
    const [dispatchDate, setDispatchDate] = useState(desiData ? new Date(desiData) : new Date());
    const [qty,setQty] = useState(initialQty || '');
    const [dispatchQty,setDispatchQty] = useState(dispatchqty || '');
    const [status,setStatus] = useState(statusfetch || '');

    useEffect(() => {
      if (fetchUserProduct) {
        setQty(fetchUserProduct.quantity || '');
        setName(fetchUserProduct.name || '');
        setDispatchQty(fetchUserProduct.dispatchQuantity || '');
        setStatus(fetchUserProduct.status || '');
        setRecievedDate(fetchUserProduct.dateReceived ? new Date(fetchUserProduct.dateReceived) : new Date());
        setDispatchDate(fetchUserProduct.dateDispatched ? new Date(fetchUserProduct.dateDispatched) : new Date());
      }
    }, [fetchUserProduct]);

    const handleSubbmitData = (e) =>{
        e.preventDefault();
        console.log(name)
        console.log(new Date(recievedDate).toLocaleDateString())
        console.log(dispatchDate)
        console.log(qty)
        console.log(dispatchQty)
        console.log(status)
        dispatch(updateProduct(productId,name,recievedDate,qty,dispatchDate,dispatchQty,status))

    }

  return (
    <div>
      <div className="product-form">
        <h3>Update Product</h3>
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
      <DatePicker selected={dispatchDate} onChange={(date) => setDispatchDate(date)} maxDate={new Date()} />
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
      <Button variant="outline-primary"  type="submit">Update Product</Button>{' '}
      </div>

    </Form>
      </div>
    </div>
  )
}

export default UpdateProduct
