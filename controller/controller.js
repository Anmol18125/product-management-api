const Product = require('../model/productModel');
//read
const getProduct = async (req, res) => {
    try {
        const allProduct = await Product.find();
        console.log("📦 Products fetched from DB:", allProduct);

        if (!allProduct || allProduct.length === 0) {
          return  res.json({
                success: false,
                message: "No Products Found"
            });
        }

        return res.status(200).json({
            success: true,
            products: allProduct
        
        })
        
    
    } catch (err) {
        console.error("❌ Error fetching products:", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

//create
const createProduct=async (req,res)=>{
   try {
    const {name,price,description,categories}=req.body
    const newProduct=new Product({name,price,description,categories})

    await newProduct.save();
    res.status(200).json({
        product:newProduct
    })

}
   catch (err) {
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}

}

//update

const updateProduct=async(req,res)=>{
    const {name,price,description,categories}=req.body
    const {id}=req.params

    try{
        const toUpdatedDetail=await Product.findByIdAndUpdate(id,{name,price,description,categories},{new:"true"})

        if(!toUpdatedDetail)
        {
            res.status(204).json({
                success:false,message:"No founded"
            })
        }
        res.status(200).json({
            product:toUpdatedDetail
        })
    }
    catch (err) {
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}



const deleteProduct=async(req,res)=>{
    const{id}=req.params;
    const {name,price,description,categories}=req.body
    try{
        const toDeleteProduct=await Product.findByIdAndDelete(id);
        if(!toDeleteProduct)
        {
            res.status(404).json({
                success:false,
                message:"No found"
            })

        }
        res.status(200).json({
            message:"Product Delete Successfully",
            product:toDeleteProduct
        })

    }
    catch (err) {
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
module.exports = { getProduct ,updateProduct,createProduct,deleteProduct};