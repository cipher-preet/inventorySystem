const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Modals/User');
const product = require('../Modals/ProductData')

// User registration API
const registerUser = async (req, res) => {
  try {
    const { name, email,password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'email is already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

  
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser._id);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
function generateToken(userId) {
  return jwt.sign({ userId }, 'preetisgoodboy', { expiresIn: '5h' });
}




//User login API 
const loginUser = async (req,res) =>{
  try {
    const {email , password} = req.body;
    const user = await User.findOne({email});
    
    if(!user){
      return res.status(4001).json({message:'Invalid username and password'})
    }

    const passwordMatch = await bcrypt.compare(password,user.password)
    if(!passwordMatch){
      return res.status(4001).json({message:'Invalid username and password'})
    }

    const token = generateToken(user._id);
    res.json({user,token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
function generateToken(userId) {
  return jwt.sign({ userId }, 'preetisgoodboy', { expiresIn: '5h' });
}



// product created API
const productCreated = async (req,res) =>{
  try {
    const userId = req.user.userId;

    const {name,dateReceived,quantity,dateDispatched,dispatchQuantity,status,qrcode} = req.body;

    const newProduct = new product({
      userId,
      name,
      dateReceived,
      quantity,
      dateDispatched,
      dispatchQuantity,
      status,
      qrcode
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// fetch product by userId
const fectProduct = async (req,res) =>{
  try {
    const userId = req.user.userId;

    const userData = await product.find({userId});
    res.status(201).json({ message: 'all product of particular user fetched successfully', userProduct: userData });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// update product information API integration
const updateProductApi = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, dateReceived, quantity, dateDispatched, dispatchQuantity, status } = req.body;

    // Find the product by ID
    const updateProduct = await product.findByIdAndUpdate(
      productId,
      {
        name,
        dateReceived,
        quantity,
        dateDispatched,
        dispatchQuantity,
        status,
      },
      { new: true } // Return the updated product
    );

    if (!updateProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', updateProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// API for delete product
const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    // Find the product by ID and remove it
    const deletedProduct = await product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// fetch Product by ID
const fetchProductById = async(req,res) =>{
  try {
    const {productId} = req.params;

    const ftechProduct = await product.findById(productId);

    if(!ftechProduct){
      return res.status(404).json({message:"product not found"})
    }

    res.status(200).json({message:"product found",ftechProduct})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser,
  productCreated,
  fectProduct,
  updateProductApi,
  deleteProduct,
  fetchProductById
};