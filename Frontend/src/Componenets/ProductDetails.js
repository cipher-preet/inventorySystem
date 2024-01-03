import {useState, useRef } from 'react';
import  QrScanner from 'qr-scanner';
import Button from 'react-bootstrap/Button';


const ProductDetails = () =>{
    const [file ,setFile] = useState(null);
    const [data ,setData] = useState(null);
    
    const fileRef = useRef();
    
    const handleClick = () =>{
        fileRef.current.click();
    }
    const handleChange = async (e) =>{
        const files = e.target.files[0];
        setFile(files);
        console.log("files2",files)
        const result = await QrScanner.scanImage(files);
        console.log("preet",result)
        setData(result)
    }

    return(
        <>
              <Button type="button" variant="warning" onClick={handleClick}>upload QR</Button>
              <input type="file" accept=".png , .jpg , .jpeg" className="d-none" ref={fileRef} onChange={handleChange}/>

              <h3>Product detail - {data}</h3>
              
        </>
    )
}

export default ProductDetails