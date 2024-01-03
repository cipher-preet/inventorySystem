import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import qrcode from "../images/qr.png";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { fetchProduct } from "../ReduxSetup/Action";
import { deleteProduct } from "../ReduxSetup/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const fetchProducts = useSelector(
    (state) =>{
    if(state.fetchProductReducer && 
      state.fetchProductReducer.products && 
      state.fetchProductReducer.products.userProduct ){
        return state.fetchProductReducer.products.userProduct;
      }
      else{
        return []
      }
    });
  console.log("products", fetchProducts);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleDelete = (deleteProductId) =>{
    console.log(deleteProductId)
    dispatch(deleteProduct(deleteProductId));
    fetchProduct();
  }
  dispatch(fetchProduct());

  const handleUpdate = (updateProductId) =>{
    console.log(updateProductId)
    navigate(`/update/${updateProductId}`);

  }

  return (
    <div className="my-4 container">
      <Table responsive className="table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>DateReceived</th>
            <th>Quantity</th>
            <th>DateDispatched</th>
            <th>DispatchQuantity</th>
            <th>Status</th>
            <th>QR code</th>
            <th>PendingItems</th>
            <th>Admin Pannel</th>
          </tr>
        </thead>
        <tbody>
          {fetchProducts?.map((data) => (
              <tr key={data.id}>
              <td className="align-middle">{data.name}</td>
              <td className="align-middle">{new Date(data.dateReceived).toLocaleDateString()}</td>
              <td className="align-middle">{data.quantity}</td>
              <td className="align-middle">{new Date(data.dateDispatched).toLocaleDateString()}</td>
              <td className="align-middle">{data.dispatchQuantity}</td>
              <td className="align-middle">{data.status}</td>
              <td className="align-middle">
               <a href={data.qrcode} download ><img src={data.qrcode}alt="preet"></img></a>
              </td>
              <td className="align-middle">{data.quantity - data.dispatchQuantity}</td>
              <td className="align-middle">
                <div className="admin-icon">
                  <MdDelete onClick={() => handleDelete(data._id)}/>
                  <MdEdit onClick={() => handleUpdate(data._id)}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
