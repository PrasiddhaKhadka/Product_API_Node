const Product = require('../models/product')


const getAllProducts= async(req, res) => {
   const {company, name, featured} = req.query
   const query0bject={}

   if(featured){
    query0bject.featured = featured === 'true' ? true : false
   }

   query_param = req.query
   getProduct = await Product.find(query0bject);
    res.status(200).json({
           message: "Success",
           products: getProduct,
           nbHits: getProduct.length       
    })
  
   
}
const getAllProductsStatic = async(req, res) => {
    allProducts = await Product.find({});
    res.status(200).json({
        message: "All Static Products",
        products: allProducts,
        nbHits: allProducts.length
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}