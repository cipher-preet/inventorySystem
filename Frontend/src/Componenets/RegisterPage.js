import Container from 'react-bootstrap/Container';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from "../ReduxSetup/Action";

const RegisterPage = () =>{

  const dispatch = useDispatch();
  const registerUserDetail = useSelector((state) => state.user) ;
  console.log(registerUserDetail);

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();


const handleRegisterData = (e) =>{
  e.preventDefault();
  console.log(name)
  console.log(email)
  console.log(password)

dispatch(registerUser(name,email,password));
}

    return(
        <Container className="mt-4" style={{width:"50%"}}>
        <form onSubmit={handleRegisterData}>
   <h3 style={{textAlign:"center"}}>Register Yourself</h3>

   <div className="mb-3">
     <label>Name</label>
     <input
       type="text"
       className="form-control"
       placeholder="Enter Name"
       value={name}
       onChange={(e)=> setName(e.target.value)}
     />
   </div>
   <div className="mb-3">
     <label>Email address</label>
     <input
       type="email"
       className="form-control"
       placeholder="Enter email"
       value={email}
      onChange={(e)=> setEmail(e.target.value)}

     />
   </div>

   <div className="mb-3">
     <label>Password</label>
     <input
       type="password"
       className="form-control"
       placeholder="Enter password"
       value={password}
       onChange={(e)=> setPassword(e.target.value)}


     />
   </div>
   <div className="d-grid">
     <button type="submit" className="btn btn-primary">
       Register
     </button>
   </div>
   
 </form>
</Container>
    )
}

export default RegisterPage