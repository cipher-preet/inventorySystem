import Container from 'react-bootstrap/Container';
import {useState} from "react";
import { loginUser } from "../ReduxSetup/Action";
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () =>{
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password,setPassword] = useState();

    const handleLoginData = (e) =>{
      e.preventDefault();

      console.log(email)
      console.log(password)
      dispatch(loginUser(email,password));

    }

    return(
        <Container className="mt-4" style={{width:"50%"}}>
             <form onSubmit={handleLoginData}>
        <h3 style={{textAlign:"center"}}>Log In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </Container>
    )
}

export default LoginPage